<template>
    <div class="container my-5">
        <div class="card rounded-0 p-0 border-0">
            <div class="card-header text-warning" style="background-color: var(--bg-secondary);">
                <h2 class="text-center display-1">Solar Calculator</h2>
            </div>
            <div class="">
                <div class="card-body text-white" style="background-color: var(--bg-secondary);">
                    <!-- Building Type Selection -->
                    <div class="d-flex flex-column align-items-center justify-content-start mb-4">
                        <label class="form-label text-uppercase">Building Type</label>
                        <div class="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" v-model="buildingType" class="btn-check w-50 " name="btnradio"
                                id="btnradio1" autocomplete="off" checked>
                            <label class="btn btn-outline-light" for="btnradio1">Existing Building</label>

                            <input type="radio" v-model="buildingType" class="btn-check w-50" name="btnradio"
                                id="btnradio2" autocomplete="off">
                            <label class="btn btn-outline-light" for="btnradio2">New Building</label>
                        </div>
                    </div>

                    <!-- <div class="mb-4">

                        <label class="form-label">Building Type:</label>
                        <div class="d-flex gap-3">
                            <div class="form-check">
                                <input type="radio" v-model="buildingType" value="existing" id="existingBuilding"
                                    class="form-check-input" />
                                <label class="form-check-label" for="existingBuilding">Existing Building</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" v-model="buildingType" value="new" id="newBuilding"
                                    class="form-check-input" />
                                <label class="form-check-label" for="newBuilding">New Building</label>
                            </div>
                        </div>
                    </div> -->

                    <!-- Location Input -->
                    <div class="mb-4">
                        <label class="form-label text-uppercase">Location</label>
                        <div class="input-group">
                            <input type="text" v-model="location" class="form-control" placeholder="Enter location" />
                            <button @click="detectLocation" class="btn btn-warning">
                                <i class="bi bi-geo-alt"></i> Detect
                            </button>
                        </div>
                    </div>

                    <!-- Load and Bill Inputs -->
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label">Sanctioned Load (kW):</label>
                            <input type="number" v-model="sanctionedLoad" class="form-control"
                                placeholder="Enter sanctioned load" />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Monthly Bill (Rs.):</label>
                            <input type="number" v-model="monthlyBill" class="form-control"
                                placeholder="Estimated monthly bill (Optional)" />
                        </div>
                    </div>

                    <!-- Consumer Category Selection -->
                    <div class="mt-4">
                        <label class="form-label">Consumer Category:</label>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                            <button v-for="category in ['residential', 'commercial', 'industrial']" :key="category"
                                @click="setCategory(category)"
                                :class="['btn', 'me-2', consumerCategory === category ? 'btn-light' : 'btn-outline-light']">
                                {{ category.toUpperCase() }}
                            </button>
                        </div>
                    </div>

                    <!-- Calculate Button -->
                    <div class="text-center mt-4">
                        <button @click="calculate" class="btn btn-warning px-4 w-100">
                            Calculate
                        </button>
                    </div>

                </div>

                <div class="card-body bg-white p-0 pt-3">
                    <!-- Results Tables -->
                    <div v-if="calculatedData" class="">
                        <!-- System Specifications -->
                        <h3 class="text-center text-primary my-4">System Specifications</h3>
                        <div class="table-responsive">
                            <table class="table table-bordered text-center">
                                <thead class="table-primary">
                                    <tr>
                                        <th>System Size (kW)</th>
                                        <th>Avg. Monthly Consumption (kWp)</th>
                                        <th>System Size (sq.ft.)</th>
                                        <th>Total Cost (Rs.)</th>
                                        <th>Subsidy (Rs.)</th>
                                        <th>Net Cost (Rs.)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{ calculatedData.kw }}</td>
                                        <td>{{ calculatedData.consumption }}</td>
                                        <td>{{ calculatedData.area }}</td>
                                        <td>{{ calculatedData.cost.toLocaleString() }}</td>
                                        <td>{{ calculatedData.subsidy.toLocaleString() }}</td>
                                        <td>{{ (calculatedData.cost - calculatedData.subsidy).toLocaleString() }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Savings Over Time -->
                        <h3 class="text-center text-primary my-4">Estimated Savings Over Time</h3>
                        <div class="table-responsive">
                            <table class="table table-bordered text-center">
                                <thead class="table-primary">
                                    <tr>
                                        <th>1 Year</th>
                                        <th>2 Years</th>
                                        <th>3 Years</th>
                                        <th>4 Years</th>
                                        <th>5 Years</th>
                                        <th>25 Years</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{ calculatedData.year1.toLocaleString() }}</td>
                                        <td>{{ calculatedData.year2.toLocaleString() }}</td>
                                        <td>{{ calculatedData.year3.toLocaleString() }}</td>
                                        <td>{{ calculatedData.year4.toLocaleString() }}</td>
                                        <td>{{ calculatedData.year5.toLocaleString() }}</td>
                                        <td>{{ calculatedData.year25.toLocaleString() }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Appliance Support -->
                        <h3 class="text-center text-primary my-4">Supported Appliances</h3>
                        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                            <div v-for="(count, appliance) in appliances" :key="appliance" class="col">
                                <div class="card h-100 text-warning p-2">
                                    <div class="card-body text-center p-0">
                                        <p>{{ appliance }}</p>
                                        <h5 class="">× {{ count }}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="calculatedData">
                        <!-- Savings Over Time Charts -->
                        <h3 class="text-center text-primary my-4">Estimated Savings Over Time</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <canvas id="savingsPieChart" class="mt-4"></canvas>
                            </div>
                            <div class="col-md-6">
                                <canvas id="savingsBarChart"></canvas>
                            </div>
                        </div>

                        <!-- System Specifications Charts -->
                        <h3 class="text-center text-primary my-4">System Specifications</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <canvas id="specificationsBarChart" class="mt-4"></canvas>
                            </div>
                            <div class="col-md-6">
                                <canvas id="specificationsPieChart" class="mt-4"></canvas>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Chart } from "chart.js/auto";
export default {
    name: 'SolarCalculator',
    data() {
        return {
            buildingType: 'new',
            location: '',
            sanctionedLoad: '',
            monthlyBill: '',
            consumerCategory: '',
            calculatedData: null,
            appliances: {
                '1.5 Ton 5 Star Inverter Ac (3200w)': 2,
                'Television LED (100w)': 2,
                'Ceiling Fan (75w)': 2,
                'Tubelight (20w)': 3,
                'Laptop (100w)': 1,
                'Refrigerator (200w)': 1
            },
            solarData: [
                {
                    kw: 180,
                    consumption: 1.50,
                    area: 150,
                    monthly: 1440,
                    year1: 17280,
                    year2: 34560,
                    year3: 51840,
                    year4: 69120,
                    year5: 86400,
                    year25: 432000,
                    cost: 78000,
                    subsidy: 30000,
                    netCost: 48000
                },
                {
                    kw: 240,
                    consumption: 2.00,
                    area: 200,
                    monthly: 1920,
                    year1: 23040,
                    year2: 46080,
                    year3: 69120,
                    year4: 92160,
                    year5: 115200,
                    year25: 576000,
                    cost: 104000,
                    subsidy: 60000,
                    netCost: 44000
                },
                {
                    kw: 360,
                    consumption: 3.00,
                    area: 300,
                    monthly: 2880,
                    year1: 34560,
                    year2: 69120,
                    year3: 103680,
                    year4: 138240,
                    year5: 172800,
                    year25: 864000,
                    cost: 156000,
                    subsidy: 78000,
                    netCost: 78000
                },
                {
                    kw: 480,
                    consumption: 4.00,
                    area: 400,
                    monthly: 3840,
                    year1: 46080,
                    year2: 92160,
                    year3: 138240,
                    year4: 184320,
                    year5: 230400,
                    year25: 1152000,
                    cost: 208000,
                    subsidy: 78000,
                    netCost: 130000
                },
                {
                    kw: 600,
                    consumption: 5.00,
                    area: 500,
                    monthly: 4800,
                    year1: 57600,
                    year2: 115200,
                    year3: 172800,
                    year4: 230400,
                    year5: 288000,
                    year25: 1440000,
                    cost: 260000,
                    subsidy: 78000,
                    netCost: 182000
                },
                {
                    kw: 720,
                    consumption: 6.00,
                    area: 600,
                    monthly: 5760,
                    year1: 69120,
                    year2: 138240,
                    year3: 207360,
                    year4: 276480,
                    year5: 345600,
                    year25: 1728000,
                    cost: 312000,
                    subsidy: 78000,
                    netCost: 234000
                },
                {
                    kw: 840,
                    consumption: 7.00,
                    area: 700,
                    monthly: 6720,
                    year1: 80640,
                    year2: 161280,
                    year3: 241920,
                    year4: 322560,
                    year5: 403200,
                    year25: 2016000,
                    cost: 364000,
                    subsidy: 78000,
                    netCost: 286000
                },
                {
                    kw: 960,
                    consumption: 8.00,
                    area: 800,
                    monthly: 7680,
                    year1: 92160,
                    year2: 184320,
                    year3: 276480,
                    year4: 368640,
                    year5: 460800,
                    year25: 2304000,
                    cost: 416000,
                    subsidy: 78000,
                    netCost: 338000
                },
                {
                    kw: 1080,
                    consumption: 9.00,
                    area: 900,
                    monthly: 8640,
                    year1: 103680,
                    year2: 207360,
                    year3: 311040,
                    year4: 414720,
                    year5: 518400,
                    year25: 2592000,
                    cost: 468000,
                    subsidy: 78000,
                    netCost: 390000
                },
                {
                    kw: 1200,
                    consumption: 10.00,
                    area: 1000,
                    monthly: 9600,
                    year1: 115200,
                    year2: 230400,
                    year3: 345600,
                    year4: 460800,
                    year5: 576000,
                    year25: 2880000,
                    cost: 520000,
                    subsidy: 78000,
                    netCost: 442000
                }
            ],
        }
    },
    methods: {
        setCategory(category) {
            this.consumerCategory = category;
        },
        calculate() {
            if (!this.sanctionedLoad) {
                alert("Please enter sanctioned load");
                return;
            }

            const load = parseFloat(this.sanctionedLoad);
            // Find appropriate solar system based on sanctioned load
            this.calculatedData = this.solarData.find((d) => d.kw >= load) || this.solarData[0];

            // After updating the data, ensure the DOM is updated before rendering the charts
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
                                this.calculatedData.year1,
                                this.calculatedData.year2,
                                this.calculatedData.year3,
                                this.calculatedData.year4,
                                this.calculatedData.year5,
                                this.calculatedData.year25,
                            ],
                            backgroundColor: "rgba(75, 192, 192, 0.2)",
                            borderColor: "rgba(75, 192, 192, 1)",
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
                                this.calculatedData.year1,
                                this.calculatedData.year2,
                                this.calculatedData.year3,
                                this.calculatedData.year4,
                                this.calculatedData.year5,
                                this.calculatedData.year25,
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
                    labels: ["System Size (kW)", "Avg. Monthly Consumption", "Area (sq.ft.)", "Total Cost (Rs.)", "Subsidy (Rs.)", "Net Cost (Rs.)"],
                    datasets: [
                        {
                            label: "System Specifications",
                            data: [
                                this.calculatedData.kw,
                                this.calculatedData.consumption,
                                this.calculatedData.area,
                                this.calculatedData.cost,
                                this.calculatedData.subsidy,
                                this.calculatedData.cost - this.calculatedData.subsidy,
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
        renderSpecificationsPieChart() {
            const ctx = document.getElementById("specificationsPieChart").getContext("2d");

            if (this.specificationsPieChart) {
                this.specificationsPieChart.destroy();
            }

            this.specificationsPieChart = new Chart(ctx, {
                type: "pie",
                data: {
                    labels: ["System Size (kW)", "Avg. Monthly Consumption", "Area (sq.ft.)", "Total Cost (Rs.)", "Subsidy (Rs.)", "Net Cost (Rs.)"],
                    datasets: [
                        {
                            label: "System Specifications",
                            data: [
                                this.calculatedData.kw,
                                this.calculatedData.consumption,
                                this.calculatedData.area,
                                this.calculatedData.cost,
                                this.calculatedData.subsidy,
                                this.calculatedData.cost - this.calculatedData.subsidy,
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
    },

    mounted() {
        this.savingsBarChart = null;
        this.savingsPieChart = null;
        this.specificationsBarChart = null;
        this.specificationsPieChart = null;
    }


}
</script>

<style scoped>
.card {
    background: var(--bg-secondary);
    padding: 1.5rem;
}

@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }
}

.brandPrimary {
    background-color: var(--bg-secondary);
    color: white;
}

.brandSecondary {
    background-color: var(--bg-primary);
    color: white;
}
</style>