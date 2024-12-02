<template>
    <div class="">
        <SectionTopBanner mobileImage="/img/solarMobile.jpg" desktopImg="/img/solarDesktop.jpg" />
        <div class="container my-5">
            <form v-if="capacityConsumption === 0" @submit.prevent="" class="row">
                <h1 class="text-center mb-4 text-capitalize">Your Details</h1>
                <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="Your Name" placeholder="Your Name" v-model="name"
                            required>
                        <label for="Your Name" class="fw-bold mb-2">Your Name</label>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="Your Email" placeholder="Your Email"
                            v-model="email" required>
                        <label for="Your Email" class="fw-bold mb-2">Your Email</label>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="Your Phone No" placeholder="Your Phone No."
                            v-model="phone" required>
                        <label for="Your Phone No" class="fw-bold mb-2">Your Phone No.</label>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="Your Pin Code" placeholder="Your Pin Code"
                            v-model="pincode" required>
                        <label for="Your Phone No" class="fw-bold mb-2">Your Pincode</label>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="Your Address" placeholder="Your City" v-model="city"
                            required>
                        <label for="Your City" class="fw-bold mb-2">Your City</label>
                    </div>
                </div>
            </form>
            <form v-if="capacityConsumption === 0" @submit.prevent="calculate" class="row mt-5">
                <h1 class="text-center mb-4 text-capitalize">Inputs Chosen for Your Solar Estimate</h1>
                <!-- Electricity Charges -->
                <div class="col-6 mb-3">
                    <div class="form-floating">
                        <input type="number" class="form-control" id="electricityRate"
                            placeholder="Electricity Charges in rupees per unit" v-model="electricityRate" required />
                        <label for="electricityRate" class="fw-bold mb-2">Electricity Charges</label>
                    </div>
                </div>

                <!-- Monthly Bill -->
                <div class="col-6 mb-3">
                    <div class="form-floating">
                        <input type="number" class="form-control" id="monthlyBill" placeholder="Monthly Bill in Rupees"
                            v-model="monthlyBill" required />
                        <label for="monthlyBill" class="fw-bold mb-2">Monthly Bill</label>
                    </div>
                </div>

                <!-- Sanctioned Load -->
                <div class="col-6 mb-3">
                    <div class="form-floating">

                        <input type="number" class="form-control" id="sanctionedLoad"
                            placeholder="Sanctioned Load in kilowatt peak" v-model="userSanctioned" required />
                        <label for="sanctionedLoad" class="fw-bold mb-2">Sanctioned Load</label>
                    </div>
                </div>

                <!-- Shadow Free Area -->
                <div class="col-6 mb-3">
                    <div class="form-floating">
                        <input type="number" class="form-control" id="shadowFree"
                            placeholder="Shadow Free Area in square feet" v-model="shadowFree" required />
                        <label for="shadowFree" class="fw-bold mb-2">Shadow Free Area</label>
                    </div>
                </div>

                <!-- Building Category -->
                <div class="my-5 px-3">
                    <h1 class="text-capitalize text-center mb-4"> Select your building Category</h1>
                    <div class="d-grid gap-3 d-md-flex justify-content-md-center">
                        <div v-for="category in ['Residential', 'Commercial', 'Industrial']" :key="category"
                            @click="setCategory(category)" :class="[
                                'btn',
                                'me-2',
                                buildingCategory === category ? 'btn-warning' : 'btn-outline-warning',
                            ]">
                            {{ category.toUpperCase() }}
                        </div>
                    </div>
                </div>

                <!-- Building Type -->
                <div class="mt-3 mb-5 px-3">
                    <h1 class="text-capitalize text-center mb-4">Select your building Type</h1>
                    <div class="d-grid gap-3 d-md-flex justify-content-md-center">
                        <div v-for="building in ['Existing Building', 'New Building']" :key="building"
                            @click="setBuilding(building)" :class="[
                                'btn',
                                'me-2',
                                buildingType === building ? 'btn-warning' : 'btn-outline-warning',
                            ]">
                            {{ building.toUpperCase() }}
                        </div>
                    </div>
                </div>

                <h1 class="text-center mb-4 text-capitalize">EMI Details</h1>
                <div class="col-6 mb-3">
                    <div class="form-floating">
                        <input type="number" class="form-control" id="tenure" placeholder="Loan Tenure In Months"
                            v-model="loanTenure" required />
                        <label for="tenure" class="fw-bold mb-2">Loan Tenure In Months</label>
                    </div>
                </div>
                <div class="col-6 mb-3">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="InterestRate" placeholder="Interest Rate"
                            v-model="interestRate" pattern="^\d+(\.\d{1,2})?$"
                            title="Enter a valid number with up to 2 decimal places" required />
                        <label for="InterestRate" class="fw-bold mb-2">Interest Rate</label>
                    </div>

                </div>
                <!-- Submit Button -->
                <button type="submit" class="btn btn-success my-3">Calculate</button>
            </form>
            <div class="d-flex justify-content-center align-items-center gap-3">
                <button v-if="capacityConsumption !== 0" class="btn text-white"
                    style="background-color:var(--bg-primary)" @click="resetForm()">Reset Report</button>
                <button v-if="capacityConsumption !== 0" class="btn text-white" @click="generatePdf()"
                    style="background-color:var(--bg-primary)">Download Report</button>
            </div>
            <!-- Output Display -->
            <div v-if="capacityConsumption !== 0" class="mt-4">
                <div class="d-flex justify-content-center align-items-center">
                    <img src="/img/congrats.png" class=" d-md-block d-none" style="width: 500px" alt="">
                    <img src="/img/congrats.png" class=" d-md-none d-flex justify-content-center align-items-center"
                        style="width: 100%;" alt="">
                </div>
                <div class="my-5">
                    <div class="text-center mb-5">
                        <p class="text-muted mb-1 text-uppercase">Top Benefit</p>
                        <h2 class="display-5 text-uppercase" style="color: var(--bg-third);">Installtion of
                            Solar
                        </h2>
                    </div>
                    <div class="row g-2">
                        <div class="col-12 mb-5">
                            <div class="card d-flex flex-column align-items-center text-center p-3 h-100"
                                style="background-color: #f3f8f3 !important;">
                                <p class="text-center mb-1">Recovery of the cost in</p>
                                <p class="text-center mb-1 fs-1 ">{{ paybackYear }} </p>
                                <p class="text-center small">year</p>
                            </div>
                        </div>
                    </div>
                    <div class="row g-3">
                        <div class="col-md-6">
                            <div class="card d-flex flex-column align-items-center text-center p-3 h-100"
                                style="background-color: #f3f8f3 !important;">
                                <p class="text-center mb-1">CO2 Offset</p>
                                <p class="text-center mb-1 fs-1 ">{{ Math.round(coOffset) }} </p>
                                <p class="text-center small"> kg/per year</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card d-flex flex-column align-items-center text-center p-3 h-100"
                                style="background-color: #f3f8f3 !important;">
                                <p class="text-center mb-1">Tree saved</p>
                                <p class="text-center mb-1 fs-1 ">{{ Math.round(treeSaved) }}</p>
                                <p class="text-center small">per year</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row mt-5">
                    <div class="col-12">
                        <h4 class="mb-3">Your Personalized Solar Plant Calculation – See Your Savings!</h4>
                        <table class="table table-bordered table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <th class="text-start">Parameter</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-start">Monthly Bill</td>
                                    <td class="">{{ monthlyBill }}</td>
                                </tr>
                                <tr>
                                    <td class="text-start">Electricity Rate</td>
                                    <td>{{ electricityRate }}</td>
                                </tr>
                                <tr>
                                    <td class="text-start">Sanctioned Load</td>
                                    <td>{{ userSanctioned }}</td>
                                </tr>
                                <tr>
                                    <td class="text-start">Shadow Free Area</td>
                                    <td>{{ shadowFree }}</td>
                                </tr>
                                <tr>
                                    <td class="text-start">Plant Capacity Based on Consumption</td>
                                    <td>{{ capacityConsumption }}</td>
                                </tr>
                                <tr>
                                    <td class="text-start">Plant Capacity Based on Sanctioned Load</td>
                                    <td>{{ userSanctioned }}</td>
                                </tr>
                                <tr>
                                    <td class="text-start">Plant Capacity Based on Area Available</td>
                                    <td>{{ capacityArea }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-12 my-5">
                        <div class="row g-4">
                            <div class="col-6 col-md-3">
                                <div class="card h-100" style="background-color: #FDFD96;">
                                    <div class="card-body">
                                        <h5 class="card-title">Possible Plant Capacity</h5>
                                        <p class="card-text">{{ possibleCapacity }} kWp</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="card h-100" style="background-color: #FFB3A7;">
                                    <div class="card-body">
                                        <h5 class="card-title">Solar Panels (Mono PERC)</h5>
                                        <p class="card-text">{{ monoperc }} Panels</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="card h-100" style="background-color: #FFDAB9;">
                                    <div class="card-body">
                                        <h5 class="card-title">Solar Panels (TOPCon)</h5>
                                        <p class="card-text"> {{ topcon }} Panels</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="card h-100" style="background-color: #B39EB5;">
                                    <div class="card-body">
                                        <h5 class="card-title">Cost of Project</h5>
                                        <p class="card-text">₹ {{ costProject }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="card h-100" style="background-color: #E3E4FA;">
                                    <div class="card-body">
                                        <h5 class="card-title">Yearly Units Generated</h5>
                                        <p class="card-text"> {{ yearlyUnitsGenerated }} kWh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <!-- <h4 class="mb-3">Yearly Savings (30 Years)</h4>
                        <table class="table table-bordered table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <th>Year</th>
                                    <th>Savings (in ₹)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="entry in yearlySavings" :key="entry.year">
                                    <td class="text-center">{{ entry.year }}</td>
                                    <td class="text-center">{{ Math.round(entry.savings) }}</td>
                                </tr>
                            </tbody>
                        </table> -->
                        <h3 class="mb-3">Yearly Savings (10 Years)</h3>
                        <table class="table table-bordered table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <th>Year</th>
                                    <th>Yearly Savings (Rs.)</th>
                                    <th>Cumulative Savings (Rs.)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Loop through yearlySavings and cumulativeYearlySavings -->
                                <tr v-for="(entry, index) in yearlySavings" :key="entry.year">
                                    <td>{{ entry.year }}</td>
                                    <td>{{ Math.round(entry.savings) }}</td>
                                    <td>{{ Math.round(cumulativeYearlySavings[index]?.cumulativeSavings || 0) }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-6">
                        <!-- <h4 class="mb-3">Cumulative Yearly Savings (30 Years)</h4>
                        <table class="table table-bordered table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <th>Year</th>
                                    <th>Cumulative Savings (in ₹)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="entry in cumulativeYearlySavings" :key="entry.year">
                                    <td class="text-center">{{ entry.year }}</td>
                                    <td class="text-center">{{ entry.cumulativeSavings }}</td>
                                </tr>
                            </tbody>
                        </table> -->
                        <h3 class="mb-3">Loan Installment ({{ loanTenure / 12 }} Years)</h3>
                        <table class="table table-bordered table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <th>Year</th>
                                    <th>Loan Installment (Rs.)</th>
                                    <th>Cumulative Loan Installment (Rs.)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Loop through amortizationScheduleByYear to display installment and cumulative installment -->
                                <tr v-for="(entry, index) in amortizationScheduleByYear" :key="entry.year">
                                    <td>{{ entry.year }}</td>
                                    <td>{{ Math.round(entry.principal + entry.interest) }}</td>
                                    <td>{{ Math.round(cumulativePayments[index] || 0) }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div v-if="capacityConsumption !== 0" class="">
                <div class="">
                    <h1 class="text-center mb-5">Solar Loan EMI Chart</h1>
                    <!-- EMI Details -->
                    <div class="row mt-4">
                        <div class="col-12 mb-4">
                            <div class="row g-4">
                                <div class="col-6 col-md-3">
                                    <div class="card" style="background-color: #B39EB5;">
                                        <div class="card-body">
                                            <h5 class="card-title">Cost of Project</h5>
                                            <p class="card-text">{{ costProject }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="card" style="background-color: #FDFD96;">
                                        <div class="card-body">
                                            <h5 class="card-title">Down Payment</h5>
                                            <p class="card-text">{{ downPayment }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="card" style="background-color: #FFB3A7;">
                                        <div class="card-body">
                                            <h5 class="card-title">Loan Amount</h5>
                                            <p class="card-text">{{ localLoanAmount }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="card" style="background-color: #FFDAB9;">
                                        <div class="card-body">
                                            <h5 class="card-title">Tenure</h5>
                                            <p class="card-text"> {{ loanTenure }} months</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="card" style="background-color: #E3E4FA;">
                                        <div class="card-body">
                                            <h5 class="card-title">Interest</h5>
                                            <p class="card-text"> {{ interestRate }} %</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="card" style="background-color: #AEC6CF;">
                                        <div class="card-body">
                                            <h5 class="card-title">Monthly EMI</h5>
                                            <p class="card-text">{{ monthlyEmi.toFixed(2) }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="card" style="background-color: #FFD1DC;">
                                        <div class="card-body">
                                            <h5 class="card-title">Total Interest</h5>
                                            <p class="card-text">{{ totalInterest.toFixed(2) }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="card" style="background-color: #77DD77;">
                                        <div class="card-body">
                                            <h5 class="card-title">Total Payment</h5>
                                            <p class="card-text">{{ totalPayment.toFixed(2) }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="col-md-6 mt-5">
                                <h3>Loan Installment (Yearly)</h3>
                                <table class="table table-striped" id="amortizationTable">
                                    <thead class="table-dark">
                                        <tr>
                                            <th>Year</th>
                                            <th>Total Payment (₹)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, index) in amortizationScheduleByYear" :key="index">
                                            <td>{{ row.year }}</td>
                                            <td>{{ (row.principal + row.interest).toFixed(2) }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-6 mt-5">
                                <h3>Cumulative Loan Installment (Yearly)</h3>
                                <table class="table table-striped" id="cumulativeTable">
                                    <thead class="table-dark">
                                        <tr>
                                            <th>Year</th>
                                            <th>Cumulative Payment (₹)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, index) in amortizationScheduleByYear" :key="index">
                                            <td>{{ row.year }}</td>
                                            <td>{{ cumulativePayments[index].toFixed(2) }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> -->
                    </div>
                    <div class="row justify-content-center mt-5">
                        <!-- Chart Section -->
                        <div class="col-md-6">
                            <div class="chart-container">
                                <canvas id="emiChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
// import SolarEmiCalculator from '@/components/SolarEmiCalculator.vue'
import SectionTopBanner from '@/components/SectionTopBanner.vue'
import { Chart } from 'chart.js/auto';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
export default {
    components: {
        // SolarEmiCalculator,
        SectionTopBanner,
    },
    data() {
        return {
            electricityRate: 8, // Rupees per unit
            monthlyBill: 10000, // Rupees
            userSanctioned: 5, // kWp
            shadowFree: 1000, // square feet
            buildingCategory: null,
            buildingType: null,

            //user details
            name: '',
            email: '',
            pincode: '',
            city: '',
            phone: '',

            // Calculated Values
            possibleCapacity: 0,
            capacityConsumption: 0,
            capacityArea: 0,
            monoperc: 0,
            topcon: 0,
            costProject: 0,
            dailyUnitsGenerated: 0,
            monthlyUnitsGenerated: 0,
            yearlyUnitsGenerated: 0,
            annualUnitReduced: 0,
            yearlySavings: [], // Array to store yearly savings
            cumulativeYearlySavings: [], // Array to store cumulative yearly savings
            unitsGenerated: [], // Array to store unites generated
            cumulativeUnitsGenerated: [], // Array to store cumulative units generated 
            coOffset: null,
            treeSaved: null,
            carbonSaved: null,

            // EMI
            downPayment: 0,
            localLoanAmount: 0,  // Local variable to hold loan amount after down payment
            interestRate: 14,
            loanTenure: 60, // Loan tenure in months
            monthlyEmi: 0,
            totalPayment: 0,
            totalInterest: 0,
            amortizationSchedule: [],
            amortizationScheduleByYear: [],
            cumulativePayments: [],  // To store cumulative payment for each year
            showEmiDetails: false,
            chart: null,
            paybackYear: null,
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
            this.calculateCapacities();
            this.calculateProjectDetails();
            this.calculateUnitGeneration();
            this.calculateYearlyReductions();
            this.calculateYearlySavings();
            this.calculateEnvironmentalBenefits();
            this.calculateLoanDetails();

            // Scroll back to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth', // Optional for smooth scrolling
            });

            // Log loan details
            console.log(this.localLoanAmount);
            console.log(this.downPayment);
        },
        calculateCapacities() {
            // Step 1: Calculate capacities
            this.capacityConsumption = Math.round((this.monthlyBill - (this.userSanctioned * 200)) /
                (this.electricityRate * 4 * 30));
            this.capacityArea = this.shadowFree / 100;

            // Determine possible capacity (whichever is lowest)
            this.possibleCapacity = Math.min(this.capacityConsumption, this.userSanctioned, this.capacityArea);

            // Number of solar panels required
            this.monoperc = Math.ceil((this.possibleCapacity * 1000) / 545);
            this.topcon = Math.ceil((this.possibleCapacity * 1000) / 590);
        },
        calculateProjectDetails() {
            // Calculate project details like cost
            this.costProject = this.possibleCapacity < 10
                ? this.possibleCapacity * 60000
                : this.possibleCapacity * 50000;
        },
        calculateUnitGeneration() {
            // Calculate daily, monthly, and yearly unit generation
            this.dailyUnitsGenerated = Math.round(this.possibleCapacity * 4);
            this.monthlyUnitsGenerated = Math.round(this.dailyUnitsGenerated * 30);
            this.yearlyUnitsGenerated = Math.round(this.monthlyUnitsGenerated * 12);
        },
        calculateYearlyReductions() {
            // Calculate yearly reductions and cumulative units generated
            this.unitsGenerated = [];
            let yearlyReduction = Math.round(this.yearlyUnitsGenerated * 0.995);

            // Yearly reductions
            for (let year = 1; year <= 10; year++) {
                this.unitsGenerated.push({ year, units: Math.round(yearlyReduction) });
                yearlyReduction = Math.round(yearlyReduction * 0.995);
            }

            // Cumulative yearly reductions
            this.cumulativeUnitsGenerated = [];
            let cumulative = 0;
            this.unitsGenerated.forEach((entry) => {
                cumulative += entry.units;
                this.cumulativeUnitsGenerated.push({ year: entry.year, cumulativeUnits: Math.round(cumulative) });
            });
        },
        calculateYearlySavings() {
            // Calculate yearly savings and cumulative savings
            this.yearlySavings = [];
            for (let year = 1; year <= 10; year++) {
                const yearlySavings = Math.round(this.unitsGenerated[year - 1].units * this.electricityRate);
                this.yearlySavings.push({ year, savings: yearlySavings });
            }

            this.cumulativeYearlySavings = [];
            let cumulativeSavings = 0;
            this.yearlySavings.forEach((entry) => {
                cumulativeSavings += entry.savings;
                this.cumulativeYearlySavings.push({ year: entry.year, cumulativeSavings: Math.round(cumulativeSavings) });
            });
        },
        calculateEnvironmentalBenefits() {
            // Calculate environmental benefits
            this.coOffset = ((this.monthlyBill * 12) / this.electricityRate) * 0.7;
            this.treeSaved = this.coOffset / 21.7;
            this.carbonSaved = ((this.coOffset * 40 * 80) / 1000).toFixed(2); // Rounded to 2 decimal places
        },
        calculateLoanDetails() {
            // Calculate loan details
            this.downPayment = this.costProject * 0.2;
            this.localLoanAmount = this.costProject - this.downPayment;

            // Delay EMI calculation to allow DOM update
            setTimeout(() => {
                this.calculateEmi();
            }, 1000);
        },
        resetForm() {
            this.capacityConsumption = 0;
            this.name = '';
            this.email = '';
            this.address = '';
            this.phone = '';
            this.buildingCategory = null;
            this.buildingType = null;
            // Scroll back to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Optional for a smooth scrolling effect
            });
        },
        calculateEmi() {
            const p = this.localLoanAmount;  // Use localLoanAmount instead of loanAmount prop
            const r = this.interestRate / 1200; // Monthly interest rate
            const n = this.loanTenure; // Number of monthly payments

            // EMI Formula
            this.monthlyEmi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            this.totalPayment = this.monthlyEmi * n;
            this.totalInterest = this.totalPayment - this.localLoanAmount;  // Use localLoanAmount here as well

            // Generate Amortization Schedule
            this.generateAmortizationSchedule(p, r, n);

            // Show EMI details and update chart
            this.showEmiDetails = true;
            this.updateChart();
            this.paybackYear = Math.ceil(this.costProject / (this.yearlyUnitsGenerated * this.electricityRate))

        },
        generateAmortizationSchedule(principal, rate, months) {
            this.amortizationSchedule = [];
            this.amortizationScheduleByYear = [];
            this.cumulativePayments = [];  // Reset cumulative payments
            let remainingBalance = principal;
            let yearCounter = 1;
            let yearPrincipal = 0;
            let yearInterest = 0;
            let cumulativePayment = 0;  // Variable to hold cumulative payment

            for (let i = 1; i <= months; i++) {
                const interest = remainingBalance * rate;
                const principalComponent = this.monthlyEmi - interest;
                remainingBalance -= principalComponent;

                this.amortizationSchedule.push({
                    principal: principalComponent,
                    interest: interest,
                    balance: remainingBalance > 0 ? remainingBalance : 0
                });

                yearPrincipal += principalComponent;
                yearInterest += interest;

                // After 12 months (1 year)
                if (i % 12 === 0 || i === months) {
                    this.amortizationScheduleByYear.push({
                        year: yearCounter,
                        principal: yearPrincipal,
                        interest: yearInterest,
                        balance: remainingBalance > 0 ? remainingBalance : 0 // Add remaining balance
                    });

                    // Calculate cumulative payment for the year
                    cumulativePayment += (yearPrincipal + yearInterest);
                    this.cumulativePayments.push(cumulativePayment);

                    // Reset year variables for the next year
                    yearPrincipal = 0;
                    yearInterest = 0;
                    yearCounter++;
                }
            }
        },
        updateChart() {
            const canvas = document.getElementById('emiChart');
            if (!canvas) {
                console.error('Canvas element with ID "emiChart" is not found.');
                return;
            }

            const ctx = canvas.getContext('2d');
            if (this.chart) this.chart.destroy();

            const principalData = this.amortizationScheduleByYear.map(row => row.principal);
            const interestData = this.amortizationScheduleByYear.map(row => row.interest);
            const balanceData = this.amortizationScheduleByYear.map(row => row.balance); // New dataset for balance

            this.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: this.amortizationScheduleByYear.map(row => `Year ${row.year}`),
                    datasets: [
                        {
                            label: 'Principal Paid',
                            data: principalData,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)'
                        },
                        {
                            label: 'Interest Paid',
                            data: interestData,
                            backgroundColor: 'rgba(255, 99, 132, 0.6)'
                        },
                        {
                            label: 'Remaining Balance',
                            data: balanceData,
                            backgroundColor: 'rgba(153, 102, 255, 0.6)'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top'
                        }
                    }
                }
            });
        },
        async generatePdf() {
            const doc = new jsPDF("p", "mm", "a4");

            // Company Letterhead Top Section
            // Add Logo
            const imgData = "/img/logo.png"; // Replace with Base64 of your logo
            doc.addImage(imgData, "PNG", 10, 10, 30, 15); // Adjust the position and size as needed

            // Add Company Name
            doc.setFontSize(18);
            doc.text("Exolar Energy", 50, 20);

            // Add a Divider Line
            doc.setDrawColor(0);
            doc.setLineWidth(0.5);
            doc.line(10, 30, 200, 30); // Horizontal line

            // Main Content Starts Here
            doc.setFontSize(18);
            doc.text("Solar Savings Report", 105, 40, { align: "center" });

            // Benefits Table
            doc.setFontSize(14);
            doc.text("Benefits", 10, 50);
            autoTable(doc, {
                startY: 55,
                head: [["Benefit", "Value"]],
                body: [
                    ["Payback Year", `${this.paybackYear} years`],
                    ["CO2 Offset", `${Math.round(this.coOffset)} kg/year`],
                    ["Trees Saved", `${Math.round(this.treeSaved)} per year`],
                ],
            });

            // Section 3: Solar Calculation Data
            doc.text("Solar Calculation Data", 10, doc.lastAutoTable.finalY + 10);
            autoTable(doc, {
                startY: doc.lastAutoTable.finalY + 15,
                head: [["Parameter", "Value"]],
                body: [
                    ["Monthly Bill", this.monthlyBill],
                    ["Electricity Rate", this.electricityRate],
                    ["Sanctioned Load", this.userSanctioned],
                    ["Shadow Free Area", this.shadowFree],
                    ["Plant Capacity (Consumption)", this.capacityConsumption],
                    ["Plant Capacity (Sanctioned Load)", this.userSanctioned],
                    ["Plant Capacity (Area)", this.capacityArea],
                ],
            });

            // Section 4: Possible Plant Details
            doc.text("Possible Plant Details", 10, doc.lastAutoTable.finalY + 10);
            autoTable(doc, {
                startY: doc.lastAutoTable.finalY + 15,
                head: [["Parameter", "Value"]],
                body: [
                    ["Possible Plant Capacity", `${this.possibleCapacity} kWp`],
                    ["Solar Panels (Mono PERC)", `${this.monoperc} Panels`],
                    ["Solar Panels (TOPCon)", `${this.topcon} Panels`],
                    ["Cost of Project", `Rs. ${this.costProject}`],
                    ["Yearly Units Generated", `${this.yearlyUnitsGenerated} kWh`],
                ],
            });

            // Section 5: Loan Details
            doc.text("Loan Details", 10, doc.lastAutoTable.finalY + 10);
            autoTable(doc, {
                startY: doc.lastAutoTable.finalY + 15,
                head: [["Parameter", "Value"]],
                body: [
                    ["Cost of Project", `Rs. ${this.costProject}`],
                    ["Down Payment", `Rs. ${this.downPayment}`],
                    ["Loan Amount", `Rs. ${this.localLoanAmount}`],
                    ["Tenure", `${this.loanTenure} months`],
                    ["Interest Rate", `${this.interestRate}%`],
                    ["Monthly EMI", `Rs. ${this.monthlyEmi.toFixed(2)}`],
                    ["Total Interest", `Rs. ${this.totalInterest.toFixed(2)}`],
                    ["Total Payment", `Rs. ${this.totalPayment.toFixed(2)}`],
                ],
            });

            // Section 6: Yearly Savings (30 Years)
            doc.text("Yearly Savings (30 Years)", 10, doc.lastAutoTable.finalY + 10);
            autoTable(doc, {
                startY: doc.lastAutoTable.finalY + 15,
                head: [["Year", "Savings (Rs.)"]],
                body: this.yearlySavings.map((entry) => [entry.year, Math.round(entry.savings)]),
            });

            // Section 7: Cumulative Yearly Savings (30 Years)
            doc.text("Cumulative Yearly Savings (30 Years)", 10, doc.lastAutoTable.finalY + 10);
            autoTable(doc, {
                startY: doc.lastAutoTable.finalY + 15,
                head: [["Year", "Cumulative Savings (Rs.)"]],
                body: this.cumulativeYearlySavings.map((entry) => [
                    entry.year,
                    entry.cumulativeSavings,
                ]),
            });

            // Company Footer Section
            // Add Footer Divider Line
            doc.line(10, 280, 200, 280);

            // Add Contact Details
            doc.setFontSize(10);
            doc.text("Contact Us:", 10, 285);
            doc.text("Phone: +123 456 7890", 10, 290);
            doc.text("Email: info@exolarenergy.com", 10, 295);
            doc.text("Website: https://www.exolarenergy.com/", 10, 300);

            // Save the PDF
            doc.save("solar_savings_report.pdf");
        },
    },
};

</script>

<style scoped>
/* Optional styling for the buttons */
.btn {
    min-width: 150px;
    text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>