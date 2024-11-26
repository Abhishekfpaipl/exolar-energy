<template>
    <div class="modal fade" id="solarCalculator" tabindex="-1" aria-labelledby="solarCalculatorLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content position-relative">
                <!-- <div class="position-absolute wh-60 bg-light border rounded-circle p-1 px-2" data-bs-dismiss="modal"
                        aria-label="Close" style="top: -2%; right: -2%;">
                        <i class="bi bi-x"></i>
                    </div> -->
                <div class="modal-header d-flex justify-content-between align-items-center text-white bg-success"
                    style="background-color: var(--bg-primary);">
                    <h1 class="modal-title fs-5" id="solarCalculatorLabel">Solar Calculator</h1>
                    <i class="bi bi-x fs-4" data-bs-dismiss="modal" aria-label="Close"></i>
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                </div>
                <div class="modal-body">
                    <div class="container">
                        <form @submit.prevent="calculate" class="row">
                            <!-- Electricity Charges -->
                            <div class="col-6 mb-3">
                                <label for="electricityRate" class="fw-bold mb-2">Electricity Charges</label>
                                <input type="number" class="form-control" id="electricityRate"
                                    placeholder="Electricity Charges in rupees per unit" v-model="electricityRate"
                                    required />
                            </div>
    
                            <!-- Monthly Bill -->
                            <div class="col-6 mb-3">
                                <label for="monthlyBill" class="fw-bold mb-2">Monthly Bill</label>
                                <input type="number" class="form-control" id="monthlyBill"
                                    placeholder="Monthly Bill in Rupees" v-model="monthlyBill" required />
                            </div>
    
                            <!-- Sanctioned Load -->
                            <div class="col-6 mb-3">
                                <label for="sanctionedLoad" class="fw-bold mb-2">Sanctioned Load</label>
                                <input type="number" class="form-control" id="sanctionedLoad"
                                    placeholder="Sanctioned Load in kilowatt peak" v-model="userSanctioned" required />
                            </div>
    
                            <!-- Shadow Free Area -->
                            <div class="col-6 mb-3">
                                <label for="shadowFree" class="fw-bold mb-2">Shadow Free Area</label>
                                <input type="number" class="form-control" id="shadowFree"
                                    placeholder="Shadow Free Area in square feet" v-model="shadowFree" required />
                            </div>
    
                            <!-- Building Category -->
                            <div class="my-3 px-3">
                                <label class="form-label text-uppercase fw-bold mb-4">
                                    Select your building Category
                                </label>
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
                            <div class="my-3 px-3">
                                <label class="form-label text-uppercase fw-bold mb-4">
                                    Select your building Type
                                </label>
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
    
                            <!-- Submit Button -->
                            <button type="submit" class="btn btn-primary my-3">Calculate</button>
                        </form>
    
                        <!-- Output Display -->
                        <div class="mt-4">
                            <div class="row">
                                <div class="col-12">
                                    <h4 class="mb-3">User Details</h4>
                                    <table class="table table-bordered table-striped">
                                        <thead class="table-dark">
                                            <tr>
                                                <th>Parameter</th>
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
                                            <!-- <tr>
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
                                <tr>
                                    <td class="text-start">Annual Electricity Reduced</td>
                                    <td>{{ annualUnitReduced }}</td>
                                </tr> -->
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
                                                    <p class="card-text"> {{ yearlyUnitsGenerated }} kWp</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h4 class="mb-3">Yearly Savings (30 Years)</h4>
                                    <table class="table table-bordered table-striped">
                                        <thead class="table-dark">
                                            <tr>
                                                <th>Year</th>
                                                <th>Savings (in ₹)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="entry in yearlySavings" :key="entry.year">
                                                <td class="text-start">{{ entry.year }}</td>
                                                <td class="text-start">{{ Math.round(entry.savings) }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-md-6">
                                    <h4 class="mb-3">Cumulative Yearly Savings (30 Years)</h4>
                                    <table class="table table-bordered table-striped">
                                        <thead class="table-dark">
                                            <tr>
                                                <th>Year</th>
                                                <th>Cumulative Savings (in ₹)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="entry in cumulativeYearlySavings" :key="entry.year">
                                                <td class="text-start">{{ entry.year }}</td>
                                                <td class="text-start">{{ entry.cumulativeSavings }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
    
                                <!-- <div class="mt-4">
                        <h4>Annual Unit Reduction (30 Years)</h4>
                        <table class="table table-bordered table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <th>Year</th>
                                    <th>Units Reduced (in kWh)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="entry in unitsGenerated" :key="entry.year">
                                    <td>{{ entry.year }}</td>
                                    <td>{{ entry.units }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> -->
    
                                <!-- <div class="mt-4">
                        <h4>Cumulative Units Generated (30 Years)</h4>
                        <table class="table table-bordered table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <th>Year</th>
                                    <th>Cumulative Units (in kWh)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="entry in cumulativeUnitsGenerated" :key="entry.year">
                                    <td>{{ entry.year }}</td>
                                    <td>{{ entry.cumulativeUnits }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> -->
    
    
                            </div>
                        </div>
                        <SolarEmiCalculator :loanAmount="costProject" />
                        <div class="my-5">
                            <div class="text-center mb-5">
                                <p class="text-muted mb-1 text-uppercase">Top Benefit</p>
                                <h2 class="display-5 text-uppercase" style="color: var(--bg-third);">Installtion of Solar
                                </h2>
                            </div>
                            <div class="row g-2">
                                <div class="col-12 mb-5">
                                    <div class="card d-flex flex-column align-items-center text-center p-3 h-100"
                                        style="background-color: #f3f8f3 !important;">
                                        <p class="text-center mb-1">Recovery of the cost incured</p>
                                        <p class="text-center mb-1 fs-1 ">{{ Math.round(coOffset) }} </p>
                                        <p class="text-center small">year</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row g-3">
                                <div class="col-md-4">
                                    <div class="card d-flex flex-column align-items-center text-center p-3 h-100"
                                        style="background-color: #f3f8f3 !important;">
                                        <p class="text-center mb-1">CO2 Offset</p>
                                        <p class="text-center mb-1 fs-1 ">{{ Math.round(coOffset) }} </p>
                                        <p class="text-center small"> kg/per year</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card d-flex flex-column align-items-center text-center p-3 h-100"
                                        style="background-color: #f3f8f3 !important;">
                                        <p class="text-center mb-1">Tree saved</p>
                                        <p class="text-center mb-1 fs-1 ">{{ Math.round(treeSaved) }}</p>
                                        <p class="text-center small">per year</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card d-flex flex-column align-items-center text-center p-3 h-100"
                                        style="background-color: #f3f8f3 !important;">
                                        <p class="text-center mb-1">Carbon Credit</p>
                                        <p class="text-center mb-1 fs-1">{{ Math.round(carbonSaved) }}</p>
                                        <p class="text-center small">Units</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SolarEmiCalculator from '@/components/SolarEmiCalculator.vue'
export default {
    components: {
        SolarEmiCalculator,
    },
    data() {
        return {
            electricityRate: 8, // Rupees per unit
            monthlyBill: 10000, // Rupees
            userSanctioned: 5, // kWp
            shadowFree: 1000, // square feet
            buildingCategory: null,
            buildingType: null,

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
            // Step 1: Calculate Average Monthly Consumption
            this.capacityConsumption = Math.round((this.monthlyBill - this.userSanctioned * 200) / (this.electricityRate * 4 * 30));
            this.capacityArea = this.shadowFree / 100;

            // Whichever is lower
            this.possibleCapacity = Math.min(
                this.capacityConsumption,
                this.userSanctioned,
                this.capacityArea
            );

            // Number of solar panels
            this.monoperc = Math.ceil((this.possibleCapacity * 1000) / 545);
            this.topcon = Math.ceil((this.possibleCapacity * 1000) / 590);

            // Cost of project
            this.costProject =
                this.possibleCapacity < 10
                    ? this.possibleCapacity * 60000
                    : this.possibleCapacity * 50000;

            // Daily, monthly, yearly generation
            this.dailyUnitsGenerated = Math.round(this.possibleCapacity * 4);
            this.monthlyUnitsGenerated = Math.round(this.dailyUnitsGenerated * 30);
            this.yearlyUnitsGenerated = Math.round(this.monthlyUnitsGenerated * 12);

            // Annual unit reduction
            this.annualUnitReduced = Math.round(this.yearlyUnitsGenerated - (this.yearlyUnitsGenerated * 0.005));

            // Annual unit reduction for 30 years
            this.unitsGenerated = []; // Array to store yearly reductions
            let yearlyReduction = Math.round(this.yearlyUnitsGenerated * 0.995); // Year 1 reduction (99.5% efficiency)

            for (let year = 1; year <= 10; year++) {
                this.unitsGenerated.push({
                    year,
                    units: Math.round(yearlyReduction), // Round to nearest integer
                });
                yearlyReduction = Math.round(yearlyReduction * 0.995); // Apply 0.5% reduction for the next year
            }

            // Calculate cumulative units generated for 30 years
            this.cumulativeUnitsGenerated = []; // Array to store cumulative units
            let cumulative = 0; // Initialize cumulative sum

            this.unitsGenerated.forEach((entry) => {
                cumulative += entry.units; // Add current year's units to cumulative sum
                this.cumulativeUnitsGenerated.push({
                    year: entry.year,
                    cumulativeUnits: Math.round(cumulative), // Round to nearest integer
                });
            });

            // Calculate yearly savings for up to 30 years
            this.yearlySavings = [];
            let yearlySavings = 0;
            for (let year = 1; year <= 10; year++) {
                yearlySavings = Math.round(this.unitsGenerated[year - 1].units * this.electricityRate); // Use the units generated for the current year
                this.yearlySavings.push({
                    year,
                    savings: yearlySavings, // Round to nearest integer
                });
            }

            // Calculate cumulative yearly savings for 30 years
            this.cumulativeYearlySavings = [];
            let cumulativeSavings = 0;

            this.yearlySavings.forEach((entry) => {
                cumulativeSavings += entry.savings; // Add current year's savings to cumulative sum
                this.cumulativeYearlySavings.push({
                    year: entry.year,
                    cumulativeSavings: Math.round(cumulativeSavings), // Round to nearest integer
                });
            });

            this.coOffset = (this.annualUnitReduced * 0.932).toFixed(2); // Round to 2 decimal places
            this.treeSaved = (this.coOffset / 200).toFixed(2); // Round to 2 decimal places
            this.carbonSaved = ((this.coOffset * 40 * 80) / 1000).toFixed(2); // Round to 2 decimal places
        }


    },
};

</script>

<style>
/* Optional styling for the buttons */
.btn {
    min-width: 150px;
    text-align: center;
}
</style>