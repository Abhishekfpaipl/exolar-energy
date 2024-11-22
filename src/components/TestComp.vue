<template>
    <div>
        <div class="container">
            <form @submit.prevent="">
                <h1>Your Details</h1>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Your Name" v-model="name"
                        required>
                    <label for="floatingInput">Your Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Your Email" v-model="email"
                        required>
                    <label for="floatingInput">Your Email</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Your Phone No."
                        v-model="phone" required>
                    <label for="floatingInput">Your Phone No.</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Your Address"
                        v-model="address" required>
                    <label for="floatingInput">Your Address</label>
                </div>
            </form>
            <form @submit.prevent="calculate">
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Electricity Rate"
                        v-model="electricityRate" required>
                    <label for="floatingInput">Electricity Rate</label>
                </div>
                <div class="form-floating">
                    <input type="number" class="form-control" id="floatingPassword" placeholder="Bill Amount"
                        v-model="billAmount" required>
                    <label for="floatingPassword">Bill Amount</label>
                </div>
                <div class="my-5 px-3">
                    <label class="form-label text-uppercase fw-bold mb-4">Select your building
                        Category</label>
                    <div class="d-grid gap-3 d-md-flex justify-content-md-center">
                        <div v-for="category in ['Residential', 'Commercial', 'Industrial']" :key="category"
                            @click="setCategory(category)"
                            :class="['btn', 'me-2', buildingCategory === category ? 'btn-warning' : 'btn-outline-warning']">
                            {{ category.toUpperCase() }}
                        </div>
                    </div>
                </div>
                <div class="my-5 px-3">
                    <label class="form-label text-uppercase fw-bold mb-4">Select your building
                        Type</label>
                    <div class="d-grid gap-3 d-md-flex justify-content-md-center">
                        <div v-for="building in ['Existing Building', 'New Building']" :key="building"
                            @click="setBuilding(building)"
                            :class="['btn', 'me-2', buildingType === building ? 'btn-warning' : 'btn-outline-warning']">
                            {{ building.toUpperCase() }}
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary my-3">Calculate</button>
            </form>

            <div class="" v-if="kWH !== null">
                <div class="text-start mb-5">
                    <h2 class="display-5 text-uppercase">Selected Data</h2>
                </div>
                <div class="table-responsive">
                    <table class="table table-bordered text-center">
                        <thead class="table-warning border-warning">
                            <tr>
                                <th>Building Type</th>
                                <th>Building Category</th>
                                <th>Location</th>
                                <th>Electricity Rate</th>
                                <th>Monthly Bill (Rs)</th>
                            </tr>
                            <tr>
                                <td>{{ buildingType }}</td>
                                <td>{{ buildingCategory }}</td>
                                <td>{{ address }}</td>
                                <td>{{ electricityRate }}</td>
                                <td>{{ billAmount }}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
                <button @click="downloadPDF" class="btn btn-warning">Download as
                    PDF</button>
            </div>

            <div class="" v-if="kWH !== null">
                <div class="text-start mb-5">
                    <p class="text-muted mb-1 text-uppercase">system required</p>
                    <h2 class="display-5 text-uppercase">Specifications</h2>
                </div>
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="table-responsive">
                            <table class="table table-bordered text-center">
                                <thead class="table-warning border-warning">
                                    <tr>
                                        <th class="text-start small">System Size (kW)</th>
                                        <td class="">{{ kWH }}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-start small">Shadow Free Space</th>
                                        <td class="">{{ shadowFree }}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-start small">System Installed</th>
                                        <td class="">{{ systemInstalled }}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-start small">Total Cost (Rs.)</th>
                                        <td class="">{{ totalCost }}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-start small">Subsidy (Rs.)</th>
                                        <td class="">{{ subsidy }}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-start small">Net Cost (Rs.)</th>
                                        <td class="">{{ finalPrice }}</td>
                                    </tr>

                                </thead>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 mt-md-0">
                        <canvas id="specificationsBarChart" class=""></canvas>
                    </div>
                </div>
            </div>

            <div class="" v-if="kWH !== null">
                <!-- Savings Over Time -->
                <div class="text-start my-5">
                    <p class="text-muted mb-1 text-uppercase">Over the Time</p>
                    <h2 class="display-5 text-uppercase">Estimated Savings
                    </h2>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="table-responsive">
                            <table class="table table-bordered text-center">
                                <thead class=""
                                    style="background-color: #EBE0FF !important; border-color:#9864FD !important">
                                    <tr>
                                        <th class="text-start small" style="background-color: #EBE0FF !important;">1
                                            Year</th>
                                        <td style="background-color: #EBE0FF !important;">₹ {{ yearlyBill }}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-start small" style="background-color: #EBE0FF !important;">2
                                            Years</th>
                                        <td style="background-color: #EBE0FF !important;">₹ {{ twoyearlBill }}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-start small" style="background-color: #EBE0FF !important;">3
                                            Years</th>
                                        <td style="background-color: #EBE0FF !important;">₹ {{ threeyearlBill }}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-start small" style="background-color: #EBE0FF !important;">4
                                            Years</th>
                                        <td style="background-color: #EBE0FF !important;">₹ {{ fouryearlBill }}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-start small" style="background-color: #EBE0FF !important;">5
                                            Years</th>
                                        <td style="background-color: #EBE0FF !important;">₹ {{ fiveyearlBill }}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-start small" style="background-color: #EBE0FF !important;">25
                                            Years</th>
                                        <td style="background-color: #EBE0FF !important;">₹ {{ twentyfiveyearlBill }}
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 mt-md-0">
                        <canvas id="savingsBarChart"></canvas>
                    </div>
                </div>
            </div>
            <div v-if="kWH !== null">
                <!-- Savings Over Time Charts -->
                <div class="text-start my-5">
                    <p class="text-muted mb-1 text-uppercase">Graphical view</p>
                    <h2 class="display-5 text-uppercase">Estimated Savings
                    </h2>
                </div>
                <div class="col-md-4">
                    <canvas id="savingsPieChart" class=""></canvas>
                </div>

                <!-- System Specifications Charts -->
                <div class="text-start my-5">
                    <p class="text-muted mb-1 text-uppercase">Graphical view</p>
                    <h2 class="display-5 text-uppercase">Specifications
                    </h2>
                </div>
                <div class="col-md-4">
                    <canvas id="specificationsPieChart" class=""></canvas>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { Chart } from "chart.js/auto";
import jsPDF from "jspdf";
import "jspdf-autotable";
export default {
    data() {
        return {
            electricityRate: 0,
            billAmount: 0,
            kWH: null,
            systemInstalled: null,
            shadowFree: null,
            monthlyBill: null,
            yearlyBill: null,
            twoyearlBill: null,
            threeyearlBill: null,
            fouryearlBill: null,
            fiveyearlBill: null,
            twentyfiveyearlBill: null,
            totalCost: null,
            subsidy: null,
            finalPrice: null,
            buildingType: '',
            buildingCategory: '',
            name: '',
            email: '',
            address: '',
            phone: '',
        };
    },
    methods: {
        setCategory(category) {
            this.buildingCategory = category;
        },
        setBuilding(building) {
            this.buildingType = building;
        },
        calculate() {
            // Step 1: Calculate Avg Monthly Consumption (kWh)
            if (this.electricityRate > 0) {
                this.kWH = this.billAmount / this.electricityRate;

                // Step 2: Calculate System Installed
                this.systemInstalled = this.kWH / 120;

                // Step 3: Calculate Shadow Free Space
                this.shadowFree = this.systemInstalled * 100;

                // Step 4: Calculate Avg Monthly Bill Saved
                this.monthlyBill = this.kWH * this.electricityRate;

                // Step 5: Calculate Avg Yearly Bill Saved
                this.yearlyBill = this.monthlyBill * 12;
                this.twoyearlBill = this.monthlyBill * 24;
                this.threeyearlBill = this.monthlyBill * 36;
                this.fouryearlBill = this.monthlyBill * 48;
                this.fiveyearlBill = this.monthlyBill * 60;
                this.twentyfiveyearlBill = this.monthlyBill * 300;

                // Step 6: Calculate Total Cost (Estimated)
                if (this.systemInstalled < 10) {
                    this.totalCost = 60000 * this.systemInstalled;
                } else {
                    this.totalCost = 50000 * this.systemInstalled;
                }

                // Step 7: Calculate Subsidy
                if (this.systemInstalled >= 3) {
                    this.subsidy = 78000;
                } else if (this.systemInstalled === 2) {
                    this.subsidy = 60000;
                } else if (this.systemInstalled === 1) {
                    this.subsidy = 30000;
                } else {
                    this.subsidy = 0;
                }

                // Step 8: Calculate Final Price
                this.finalPrice = this.totalCost - this.subsidy;
            }
            this.$nextTick(() => {
                this.renderSavingsBarChart();
                this.renderSavingsPieChart();
                this.renderSpecificationsBarChart();
                this.renderSpecificationsPieChart();
            });
        },
        renderSavingsBarChart() {
            const ctx = document.getElementById("savingsBarChart").getContext("2d");

            if (this.savingsBarChart) {
                this.savingsBarChart.destroy();
            }

            this.savingsBarChart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: ["1 Year", "2 Years", "3 Years", "4 Years", "5 Years", "25 Years"],
                    datasets: [
                        {
                            label: "Savings (Rs.)",
                            data: [
                                this.yearlyBill,
                                this.twoyearlBill,
                                this.threeyearlBill,
                                this.fouryearlBill,
                                this.fiveyearlBill,
                                this.twentyfiveyearlBill,
                            ],
                            backgroundColor: "rgba(153, 102, 255, 0.2)",
                            borderColor: "rgba(153, 102, 255, 1)",
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        },
        renderSavingsPieChart() {
            const ctx = document.getElementById("savingsPieChart").getContext("2d");

            if (this.savingsPieChart) {
                this.savingsPieChart.destroy();
            }

            this.savingsPieChart = new Chart(ctx, {
                type: "pie",
                data: {
                    labels: ["1 Year", "2 Years", "3 Years", "4 Years", "5 Years", "25 Years"],
                    datasets: [
                        {
                            label: "Savings (Rs.)",
                            data: [
                                this.yearlyBill,
                                this.twoyearlBill,
                                this.threeyearlBill,
                                this.fouryearlBill,
                                this.fiveyearlBill,
                                this.twentyfiveyearlBill,
                            ],
                            backgroundColor: [
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(255, 159, 64, 0.2)",
                                "rgba(255, 99, 132, 0.2)",
                            ],
                        },
                    ],
                },
                options: {
                    responsive: true,
                },
            });
        },
        renderSpecificationsBarChart() {
            const ctx = document.getElementById("specificationsBarChart").getContext("2d");

            if (this.specificationsBarChart) {
                this.specificationsBarChart.destroy();
            }

            this.specificationsBarChart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: ["System Size (kW)", "Shadow Free Space", "System Installed", "Total Cost (Rs.)", "Subsidy (Rs.)", "Net Cost (Rs.)"],
                    datasets: [
                        {
                            label: "System Specifications",
                            data: [
                                this.kWH,
                                this.shadowFree,
                                this.systemInstalled,
                                this.totalCost,
                                this.subsidy,
                                this.finalPrice,
                            ],
                            backgroundColor: "rgba(255,243,205)",
                            borderColor: "rgba(255,193,7, 1)",
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        },
        renderSpecificationsPieChart() {
            const ctx = document.getElementById("specificationsPieChart").getContext("2d");

            if (this.specificationsPieChart) {
                this.specificationsPieChart.destroy();
            }

            this.specificationsPieChart = new Chart(ctx, {
                type: "pie",
                data: {
                    labels: ["System Size (kW)", "Shadow Free Space", "System Installed", "Total Cost (Rs.)", "Subsidy (Rs.)", "Net Cost (Rs.)"],
                    datasets: [
                        {
                            label: "System Specifications",
                            data: [
                                this.kWH,
                                this.shadowFree,
                                this.systemInstalled,
                                this.totalCost,
                                this.subsidy,
                                this.finalPrice,
                            ],
                            backgroundColor: [
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(255, 159, 64, 0.2)",
                                "rgba(255, 99, 132, 0.2)",
                            ],
                        },
                    ],
                },
                options: {
                    responsive: true,
                },
            });
        },
        downloadPDF() {
            const pdf = new jsPDF();
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();

            let yPosition = 10; // Initial Y position for content placement

            // Add Title
            pdf.text("Solar Calculator Report", 10, yPosition);
            yPosition += 10; // Move Y position down

            // Add User Input Data Table
            pdf.autoTable({
                head: [["Your Name", "Email", "Phone", "Address"]],
                body: [[
                    this.name || "Not Selected",
                    this.email || "Not Selected",
                    this.phone || "Not Provided",
                    this.address || "Not Provided", 
                ]],
                startY: yPosition,
                didDrawPage: (data) => {
                    yPosition = data.cursor.y + 10; // Update position after table
                },
            });

            pdf.autoTable({
                head: [["Building Type", "Building Category", "Location", "Electricity Rate", "Monthly Bill (Rs)"]],
                body: [[
                    this.buildingType || "Not Selected",
                    this.buildingCategory || "Not Selected",
                    this.address || "Not Provided",
                    this.electricityRate || "Not Provided",
                    this.billAmount || "Not Provided",
                ]],
                startY: yPosition,
                didDrawPage: (data) => {
                    yPosition = data.cursor.y + 10; // Update position after table
                },
            });

            // Add Specifications Table
            pdf.autoTable({
                head: [["System Size (kW)", "Shadow Free Space", "System Installed", "Total Cost (Rs.)", "Subsidy (Rs.)", "Net Cost (Rs.)"]],
                body: [[
                    this.kWH,
                    this.shadowFree,
                    this.systemInstalled,
                    this.totalCost,
                    this.subsidy,
                    this.finalPrice,
                ]],
                startY: yPosition,
                didDrawPage: (data) => {
                    yPosition = data.cursor.y + 10; // Update position after table
                },
            });

            // Add Estimated Savings Table
            pdf.autoTable({
                head: [["1 Year", "2 Years", "3 Years", "4 Years", "5 Years", "25 Years"]],
                body: [
                    [
                        this.yearlyBill,
                        this.twoyearlBill,
                        this.threeyearlBill,
                        this.fouryearlBill,
                        this.fiveyearlBill,
                        this.twentyfiveyearlBill,
                    ],
                ],
                startY: yPosition,
                didDrawPage: (data) => {
                    yPosition = data.cursor.y + 10; // Update position after table
                },
            });

            // Charts Array (Exclude Pie Charts)
            const charts = [
                { id: "savingsBarChart", title: "Savings Bar Chart" },
                { id: "specificationsBarChart", title: "Specifications Bar Chart" },
            ];

            // Add Charts to PDF
            charts.forEach((chart) => {
                const canvas = document.getElementById(chart.id);
                if (canvas) {
                    const imageData = canvas.toDataURL("image/png");
                    const chartHeight = 60; // Chart height in mm
                    const chartWidth = pageWidth - 20; // Width with padding

                    // Check if new page is needed
                    if (yPosition + chartHeight > pageHeight) {
                        pdf.addPage(); // Add a new page
                        yPosition = 10; // Reset Y position for the new page
                    }

                    // Add Chart Title
                    pdf.text(chart.title, 10, yPosition);
                    yPosition += 10;

                    // Add Chart Image
                    pdf.addImage(imageData, "PNG", 10, yPosition, chartWidth, chartHeight);
                    yPosition += chartHeight + 10; // Update Y position after chart
                }
            });

            // Save PDF
            pdf.save("solar_calculator_report.pdf");
        },
    },
    mounted() {
        this.savingsBarChart = null;
        this.savingsPieChart = null;
        this.specificationsBarChart = null;
        this.specificationsPieChart = null;
    }
};
</script>

<style lang="css">
/* Add your custom styles here */
</style>
