<template>
    <div class="mb-5">
        <SectionTopBanner mobileImage="/img/solarMobile.jpg" desktopImg="/img/solarDesktop.jpg" />
        <div class="container my-5">
            <form v-if="capacityConsumption === 0" @submit.prevent="" class="row">
                <h1 class="text-center mb-4 text-capitalize">Your Details</h1>
                <div class="col-12">
                    <div class="form-floating mb-3 rounded" style="border: 1px solid var(--bg-secondary)">
                        <input type="text" class="form-control" id="Your Name" placeholder="Your Name" v-model="name"
                            required>
                        <label for="Your Name" class="fw-bold mb-2">Your Name</label>
                    </div>
                </div>
                <!-- <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="Your Email" placeholder="Your Email"
                            v-model="email" required>
                        <label for="Your Email" class="fw-bold mb-2">Your Email</label>
                    </div>
                </div> -->
                <div class="col-6">
                    <div class="form-floating mb-3 rounded" style="border: 1px solid var(--bg-secondary)">
                        <input type="number" class="form-control" id="Your Phone No" placeholder="Your Phone No."
                            v-model="phone" required>
                        <label for="Your Phone No" class="fw-bold mb-2">Your Phone No.</label>
                    </div>
                </div>
                <!-- <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="Your Pin Code" placeholder="Your Pin Code"
                            v-model="pincode" required>
                        <label for="Your Phone No" class="fw-bold mb-2">Your Pincode</label>
                    </div>
                </div> -->
                <div class="col-6">
                    <div class="form-floating mb-3 rounded" style="border: 1px solid var(--bg-secondary)">
                        <input type="text" class="form-control" id="Your Address" placeholder="Your City" v-model="city"
                            required>
                        <label for="Your City" class="fw-bold mb-2">Your City</label>
                    </div>
                </div>
            </form>
            <form v-if="capacityConsumption === 0" @submit.prevent="calculate" class="row mt-5">
                <h1 class="text-center mb-4 text-capitalize">Inputs Chosen for Your Solar Estimate</h1>
                <!-- Electricity Charges -->
                <div class="col-6 col-md-3 mb-3">
                    <div class="form-floating mb-3 rounded" style="border: 1px solid var(--bg-secondary)">
                        <input type="number" class="form-control" id="electricityRate"
                            placeholder="Electricity Charges in rupees per unit" v-model="electricityRate" required />
                        <label for="electricityRate" class="fw-bold mb-2">Electricity Charges</label>
                    </div>
                </div>

                <!-- Monthly Bill -->
                <div class="col-6  col-md-3 mb-3">
                    <div class="form-floating mb-3 rounded" style="border: 1px solid var(--bg-secondary)">
                        <input type="number" class="form-control" id="monthlyBill" placeholder="Monthly Bill in Rupees"
                            v-model="monthlyBill" required />
                        <label for="monthlyBill" class="fw-bold mb-2">Monthly Bill</label>
                    </div>
                </div>

                <!-- Sanctioned Load -->
                <div class="col-6 col-md-3 mb-3">
                    <div class="form-floating mb-3 rounded" style="border: 1px solid var(--bg-secondary)">

                        <input type="number" class="form-control" id="sanctionedLoad"
                            placeholder="Sanctioned Load in kilowatt peak" v-model="userSanctioned" required />
                        <label for="sanctionedLoad" class="fw-bold mb-2">Sanctioned Load</label>
                    </div>
                </div>

                <!-- Shadow Free Area -->
                <div class="col-6 col-md-3 mb-3">
                    <div class="form-floating mb-3 rounded" style="border: 1px solid var(--bg-secondary)">
                        <input type="number" class="form-control" id="shadowFree"
                            placeholder="Shadow Free Area in square feet" v-model="shadowFree" required />
                        <label for="shadowFree" class="fw-bold mb-2">Shadow Free Area</label>
                    </div>
                </div>

                <!-- Building Category -->
                <!-- <div class="my-5 px-3">
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
                </div> -->

                <!-- Building Type -->
                <!-- <div class="mt-3 mb-5 px-3">
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
                </div> -->

                <h1 class="text-center mb-4 text-capitalize my-5">EMI Details</h1>
                <div class="col-6 mb-3">
                    <div class="form-floating mb-3 rounded" style="border: 1px solid var(--bg-secondary)">
                        <input type="number" class="form-control" id="tenure" placeholder="Loan Tenure In Months"
                            v-model="loanTenure" required />
                        <label for="tenure" class="fw-bold mb-2">Loan Tenure In Months</label>
                    </div>
                </div>
                <div class="col-6 mb-3">
                    <div class="form-floating mb-3 rounded" style="border: 1px solid var(--bg-secondary)">
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
                <button v-if="capacityConsumption !== 0" class="btn btn-success text-white" style=" "
                    @click="resetForm()">Reset Report</button>
                <button v-if="capacityConsumption !== 0" class="btn btn-success text-white" @click="generatePdf()"
                    style=" ">Download Report</button>
            </div>
            <!-- Output Display -->
            <div v-if="capacityConsumption !== 0" class="mt-4">
                <!-- <div class="d-flex justify-content-center align-items-center">
                    <img src="/img/congrats.png" class=" d-md-block d-none" style="width: 500px" alt="">
                    <img src="/img/congrats.png" class=" d-md-none d-flex justify-content-center align-items-center"
                        style="width: 100%;" alt="">
                </div> -->

                <div class="">
                    <div class="text-center mt-5 mb-4">
                        <p class="text-muted mb-1 text-uppercase">Your Personalized Solar
                            Plant Calculation</p>
                        <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">See Your Savings!
                        </h2>
                    </div>
                    <div class="row align-items-end text-white py-5" style="background-color: var(--bg-secondary);">
                        <div class="col-md-6 text-center mb-4 mb-md-0">
                            <div class="d-flex justify-content-center align-items-center">
                                <!-- <img src="/img/savingBill.png" alt="" class="" style="width: 120px" /> -->
                                <p class="display-1 mb-0">{{ savingPercent }} %</p>
                            </div>
                            <p class="small text-center">Start your savings from the 1st day</p>
                        </div>
                        <div class="col-6 col-md-3 text-center">
                            <p class="text-center mb-1 fw-bold fs-4"> ₹ {{ monthlyBill }}</p>
                            <img src="/img/monthBill.png" alt="" class="" style="width: 100px; filter: invert(1);" />
                            <p class="small text-center">Current bill</p>
                        </div>
                        <div class="col-6 col-md-3 text-center">
                            <p class="text-center mb-1 fw-bold fs-4"> ₹ {{ billAfterSolar }}</p>
                            <img src="/img/billSolar.png" alt="" class="" style="width: 100px; filter: invert(1);" />
                            <p class="small text-center">Bill With Solar</p>
                        </div>
                    </div>
                </div>
                <div class="row g-md-5 g-2">
                    <div class="col-12">
                        <h3 class="text-center mt-5 mb-4">Your Input Details</h3>
                        <table class="table table-bordered ">
                            <thead class="table-success">
                                <tr>
                                    <th class="text-start">Parameter</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-start">Monthly Bill</td>
                                    <td class="">₹ {{ monthlyBill }}</td>
                                </tr>
                                <tr>
                                    <td class="text-start">Electricity Rate</td>
                                    <td>₹ {{ electricityRate }}</td>
                                </tr>
                                <tr>
                                    <td class="text-start">Sanctioned Load</td>
                                    <td>{{ userSanctioned }} kW</td>
                                </tr>
                                <tr>
                                    <td class="text-start">Shadow Free Area</td>
                                    <td>{{ shadowFree }} sq.ft</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-12">
                        <h3 class="text-center mt-4 mb-4">Your Possible Plant Capacity</h3>
                        <table class="table table-bordered ">
                            <thead class="table-success">
                                <tr>
                                    <th class="text-start">Parameter</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-start">Plant Capacity Based on Consumption</td>
                                    <td>{{ capacityConsumption }} kW</td>
                                </tr>
                                <tr>
                                    <td class="text-start">Plant Capacity Based on Sanctioned Load</td>
                                    <td>{{ userSanctioned }} kW</td>
                                </tr>
                                <tr>
                                    <td class="text-start">Plant Capacity Based on Area Available</td>
                                    <td>{{ capacityArea }} kW</td>
                                </tr>
                                <tr class="table-warning fw-bold">
                                    <td class="text-start">Possible Plant Capacity (whichever is lower)</td>
                                    <td>{{ possibleCapacity }} kW</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div class="row">
                    <div class="col-12">
                        <h3 class="text-center mt-5 mb-4">Your Solar Plant Output</h3>
                        <div class="row g-4 justify-content-center">
                            <!-- <div class="col-6 col-md-3">
                                <div class="card h-100"
                                    style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                    <div class="card-body">
                                        <h5 class="card-title">Possible Plant Capacity</h5>
                                        <p class="card-text">{{ possibleCapacity }} kWp</p>
                                    </div>
                                </div>
                            </div> -->
                            <div class="col-6 col-md-4">
                                <div class="card h-100"
                                    style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                    <div class="card-body">
                                        <h5 class="card-title">Cost of Project</h5>
                                        <p class="card-text">₹ {{ costProject }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-4">
                                <div class="card h-100"
                                    style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                    <div class="card-body">
                                        <h5 class="card-title">Solar Panels </h5>
                                        <p class="card-text">{{ monoperc }} Panels</p>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-6 col-md-3">
                                <div class="card h-100"
                                    style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                    <div class="card-body">
                                        <h5 class="card-title">Solar Panels (TOPCon)</h5>
                                        <p class="card-text"> {{ topcon }} Panels</p>
                                    </div>
                                </div>
                            </div> -->

                            <div class="col-6 col-md-4">
                                <div class="card h-100"
                                    style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                    <div class="card-body">
                                        <h5 class="card-title">Yearly Units Generated</h5>
                                        <p class="card-text"> {{ yearlyUnitsGenerated }} kWh</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-4">
                                <div class="card h-100"
                                    style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                    <div class="card-body">
                                        <h5 class="card-title">Yearly Saving</h5>
                                        <p class="card-text">₹ {{ yearlyUnitsSaving }}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-6 col-md-4">
                                <div class="card h-100"
                                    style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                    <div class="card-body">
                                        <h5 class="card-title">Recovery of the cost in year</h5>
                                        <p class="card-text">{{ paybackYear }} </p>
                                    </div>
                                </div>
                            </div> -->
                            <div class="col-6 col-md-4">
                                <div class="card h-100"
                                    style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                    <div class="card-body">
                                        <h5 class="card-title">CO2 Offset kg/per year</h5>
                                        <p class="card-text">{{ Math.round(coOffset) }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-4">
                                <div class="card h-100"
                                    style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                    <div class="card-body">
                                        <h5 class="card-title">Tree saved per year</h5>
                                        <p class="card-text">{{ Math.round(treeSaved) }} </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card d-flex flex-column align-items-center text-center p-0 h-100 text-white"
                                    style="background-color: var(--bg-secondary) !important;">
                                    <p class="text-center mb-1 fs-1 ">{{ paybackYear }} </p>
                                    <p class="text-center small mb-1">Recovery of the cost in year</p>
                                </div>
                            </div>
                            <!-- <div class="col-md-4">
                            <div class="card d-flex flex-column align-items-center text-center p-0 h-100 text-white"
                                style="background-color: var(--bg-secondary) !important;">
                                <p class="text-center mb-1 fs-1 ">{{ Math.round(coOffset) }} </p>
                                <p class="text-center small mb-1">CO2 Offset kg/per year</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card d-flex flex-column align-items-center text-center p-0 h-100 text-white"
                                style="background-color: var(--bg-secondary) !important;">
                                <p class="text-center mb-1 fs-1 ">{{ Math.round(treeSaved) }}</p>
                                <p class="text-center small mb-1">Tree saved per year</p>
                            </div>
                        </div> -->
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
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
                        <h3 class="mt-5 mb-4">Yearly Savings (10 Years)</h3>
                        <table class="table table-bordered ">
                            <thead class="table-success">
                                <tr>
                                    <th>Year</th>
                                    <th>Yearly Savings </th>
                                    <th>Cumulative Savings </th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Loop through yearlySavings and cumulativeYearlySavings -->
                                <tr v-for="(entry, index) in yearlySavings" :key="entry.year">
                                    <td>{{ entry.year }}</td>
                                    <td>₹ {{ Math.round(entry.savings) }}</td>
                                    <td>₹ {{ Math.round(cumulativeYearlySavings[index]?.cumulativeSavings || 0) }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <div v-if="capacityConsumption !== 0" class="">
                <div class="">
                    <div class="row">
                        <div class="col-12">
                            <h3 class="text-center mt-5 mb-4">Your Input Details For EMI</h3>
                            <table class="table table-bordered ">
                                <thead class="table-success">
                                    <tr>
                                        <th class="text-start">Parameter</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-start">Cost of Project</td>
                                        <td class="">₹ {{ costProject }}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-start">Down Payment</td>
                                        <td>₹ {{ downPayment }}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-start">Loan Amount</td>
                                        <td>₹ {{ localLoanAmount }}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-start">Interest</td>
                                        <td> {{ interestRate }} %</td>
                                    </tr>
                                    <tr>
                                        <td class="text-start">Tenure</td>
                                        <td> {{ loanTenure }} months</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- EMI Details -->
                    <div class="row">
                        <h3 class="text-center mt-5 mb-4">Your EMI Calculation & Graph for ({{ loanTenure / 12 }} Years)
                        </h3>
                        <div class="col-12 mb-4">
                            <div class="row g-4">
                                <!-- <div class="col-6 col-md-3">
                                    <div class="card"
                                        style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                        <div class="card-body">
                                            <h5 class="card-title">Cost of Project</h5>
                                            <p class="card-text">{{ costProject }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="card"
                                        style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                        <div class="card-body">
                                            <h5 class="card-title">Down Payment</h5>
                                            <p class="card-text">{{ downPayment }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="card"
                                        style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                        <div class="card-body">
                                            <h5 class="card-title">Loan Amount</h5>
                                            <p class="card-text">{{ localLoanAmount }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="card"
                                        style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                        <div class="card-body">
                                            <h5 class="card-title">Tenure</h5>
                                            <p class="card-text"> {{ loanTenure }} months</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="card"
                                        style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                        <div class="card-body">
                                            <h5 class="card-title">Interest</h5>
                                            <p class="card-text"> {{ interestRate }} %</p>
                                        </div>
                                    </div>
                                </div> -->
                                <div class="col-6 col-md-3">
                                    <div class="card"
                                        style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                        <div class="card-body">
                                            <h5 class="card-title">Loan Amount</h5>
                                            <p class="card-text">₹ {{ localLoanAmount }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="card"
                                        style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                        <div class="card-body">
                                            <h5 class="card-title">Monthly EMI</h5>
                                            <p class="card-text">₹ {{ monthlyEmi.toFixed(2) }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="card"
                                        style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                        <div class="card-body">
                                            <h5 class="card-title">Total Interest</h5>
                                            <p class="card-text">₹ {{ totalInterest.toFixed(2) }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="card"
                                        style="background-color: var(--bg-light);color:var(--bg-primary);border-color: var(--bg-primary)">
                                        <div class="card-body">
                                            <h5 class="card-title">Total Payment</h5>
                                            <p class="card-text">₹ {{ totalPayment.toFixed(2) }}</p>
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
                            <table class="table table-bordered ">
                                <thead class="table-success">
                                    <tr>
                                        <th>Year</th>
                                        <th>Loan Installment </th>
                                        <th>Cumulative Loan Installment </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Loop through amortizationScheduleByYear to display installment and cumulative installment -->
                                    <tr v-for="(entry, index) in amortizationScheduleByYear" :key="entry.year">
                                        <td>{{ entry.year }}</td>
                                        <td>₹ {{ Math.round(entry.principal + entry.interest) }}</td>
                                        <td>₹ {{ Math.round(cumulativePayments[index] || 0) }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-md-6 mt-5 mt-md-0">
                            <div class="chart-container">
                                <canvas id="emiChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <h3 class="text-center mt-5 mb-4 text-capitalize">Annual cashflow & savings</h3>
                    <div class="col-md-6">
                        <table class="table table-bordered">
                            <thead class="table-success">
                                <tr>
                                    <th>Year</th>
                                    <th>Yearly Savings </th>
                                    <th>Payments (Down Payment & EMIs) </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="row in yearlyEmiSavings" :key="row.year">
                                    <td>{{ row.year }}</td>
                                    <td>₹ {{ row.savings }}</td>
                                    <td>₹ {{ row.emi }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-6 mt-5 mt-md-0">
                        <canvas id="emiSavingsChart" width="400" height="200"></canvas>
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
            billAfterSolar: null,
            savingPercent: null,
            yearlyUnitsSaving: null,
            yearlyEmiSavings: null,
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
            this.calculateFinalBill();

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
            let yearlyReduction = Math.round(this.yearlyUnitsGenerated * 1);

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
        calculateFinalBill() {
            this.billAfterSolar = this.monthlyBill -  (this.possibleCapacity * 4 * 30 * this.electricityRate );
            this.savingPercent = (this.monthlyBill - this.billAfterSolar) / this.monthlyBill * 100
            this.yearlyUnitsSaving = this.yearlyUnitsGenerated * this.electricityRate
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
            console.log(p, r, n, this.monthlyEmi)
            let test = this.loanTenure / 12
            let test2 = this.monthlyEmi * 12
            this.calculateEmiSavingsTable(p, r, test, test2);
            // Generate Amortization Schedule
            this.generateAmortizationSchedule(p, r, n);

            // Show EMI details and update chart
            this.showEmiDetails = true;
            this.updateChart();
            this.renderEmiSavingsChart();
            this.paybackYear = Math.ceil(this.costProject / (this.yearlyUnitsGenerated * this.electricityRate))

        },
        calculateEmiSavingsTable(principal, rate, years, emi) {
            this.yearlyEmiSavings = [];
            console.log('down', this.downPayment)
            // Add Year 0 with down payment
            this.yearlyEmiSavings.push({
                year: 0,
                // downpayment: Math.round(this.costProject * 0.2), // Show down payment for year 0
                savings: 0,
                emi: Math.round(this.costProject * 0.2), // No EMI for year 0
            });

            // Add subsequent years
            for (let year = 1; year <= years; year++) {
                const savings = Math.round(this.unitsGenerated[year - 1].units * this.electricityRate);
                this.yearlyEmiSavings.push({
                    year: year,
                    savings: Math.round(savings),
                    emi: Math.round(emi), // EMI for subsequent years
                    downpayment: null, // No down payment for other years
                });
            }
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
                            backgroundColor: 'rgba(39, 65, 133)'
                        },
                        {
                            label: 'Interest Paid',
                            data: interestData,
                            backgroundColor: 'rgba(28, 117, 188)'
                        },
                        {
                            label: 'Remaining Balance',
                            data: balanceData,
                            backgroundColor: 'rgba(28, 132, 82)'
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
        renderEmiSavingsChart() {
            const emiCanvas = document.getElementById('emiSavingsChart');
            if (!emiCanvas) {
                console.error('Canvas element with ID "emiSavingsChart" is not found.');
                return;
            }
            const emiCtx = emiCanvas.getContext('2d');
            if (this.emiChart) this.emiChart.destroy();

            const savingsData = this.yearlyEmiSavings.map(row => row.savings);
            const emiData = this.yearlyEmiSavings.map(row => row.emi);

            this.emiChart = new Chart(emiCtx, {
                type: 'bar',
                data: {
                    labels: this.yearlyEmiSavings.map(row => `Year ${row.year}`),
                    datasets: [
                        {
                            label: 'Yearly Savings',
                            data: savingsData,
                            backgroundColor: 'rgba(28, 132, 82)',
                        },
                        {
                            label: 'Yearly EMI',
                            data: emiData,
                            backgroundColor: 'rgba(28, 117, 188)',
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                    },
                },
            });
        },
        async generatePdf() {
            const doc = new jsPDF("p", "mm", "a4");
            const pageWidth = doc.internal.pageSize.width;
            const pageHeight = doc.internal.pageSize.height;

            // Define header and footer content
            const companyLogo = "/img/logo.png"; // Replace with actual logo path
            const companyPhone = "+911146568831";
            const companyEmail = "info@exolarenergy.com";
            const companyAddress = "405, Pearls Best Heights-1, Netaji Subhash Place, Pitampura, Delhi, 110034";
            const companyWebsite = "www.exolarenergy.com";

            // Custom function to add header and footer with borders
            const addHeaderAndFooter = () => {
                // Header
                doc.setFontSize(10);

                // Logo (left side)
                if (companyLogo) {
                    try {
                        doc.addImage(companyLogo, "PNG", 10, 10, 40, 13);
                    } catch (error) {
                        console.error("Error adding logo:", error);
                    }
                }

                // Contact Info (right side)
                doc.text(`Phone: ${companyPhone}`, pageWidth - 70, 15);
                doc.text(`Email: ${companyEmail}`, pageWidth - 70, 20);

                // Draw border below header
                doc.setLineWidth(0.5);
                doc.line(10, 25, pageWidth - 10, 25); // Draw line at Y position 25

                // Footer
                doc.setFontSize(8);
                doc.text(`Address: ${companyAddress}`, 10, pageHeight - 20);
                doc.text(`Website: ${companyWebsite}`, pageWidth - 70, pageHeight - 20);

                // Draw border above footer
                doc.setLineWidth(0.5);
                doc.line(10, pageHeight - 30, pageWidth - 10, pageHeight - 30); // Draw line at Y position (footer margin)

                // Page number
                doc.text(`Page ${doc.internal.getNumberOfPages()}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
            };

            // Function to add descriptive text
            const addDescriptiveText = (text, startY) => {
                doc.setFontSize(11);
                const splitText = doc.splitTextToSize(text, pageWidth - 20);
                doc.text(splitText, 10, startY);
                return startY + (splitText.length * 7); // Adjust line height as needed
            };

            // Configure autoTable options
            const autoTableOptions = {
                didDrawPage: function () {
                    addHeaderAndFooter();
                },
                margin: { top: 40, bottom: 30 },
            };

            // Main Content
            doc.setFontSize(20);
            doc.text("Exolar Solar Savings Calculator", 105, 40, { align: "center" });

            let currentYPosition = 50; // Starting Y position

            // Benefits Table
            doc.setFontSize(16);
            doc.text("Benefits", 10, currentYPosition);
            autoTable(doc, {
                ...autoTableOptions,
                startY: currentYPosition + 10,
                head: [["Benefit", "Value"]],
                body: [
                    ["Payback Year", `${this.paybackYear} years`],
                    ["CO2 Offset", `${Math.round(this.coOffset)} kg/year`],
                    ["Trees Saved", `${Math.round(this.treeSaved)} per year`],
                ],
            });
            currentYPosition = doc.lastAutoTable.finalY + 10; // Update the position after table

            // Descriptive text after Benefits
            const benefitsDescText = "Switching to solar energy helps you save money and protect the environment. It's a smart and eco-friendly choice that benefits both you and the planet.";
            currentYPosition = addDescriptiveText(benefitsDescText, currentYPosition);

            // Solar Calculation Data
            doc.setFontSize(16);
            doc.text("Solar Calculation Data", 10, currentYPosition + 10);
            autoTable(doc, {
                ...autoTableOptions,
                startY: currentYPosition + 15,
                head: [["Parameter", "Value"]],
                body: [
                    ["Monthly Bill", `Rs.${this.monthlyBill}`],
                    ["Electricity Rate", this.electricityRate],
                    ["Sanctioned Load", `${this.userSanctioned} kW`],
                    ["Shadow Free Area", `${this.shadowFree} sq.ft`],
                ],
            });
            currentYPosition = doc.lastAutoTable.finalY + 10;

            // Descriptive text after Solar Calculation Data
            const calculationDescText = "Solar power is efficient and uses your available roof space wisely. We design a system to meet your energy needs while saving costs.";
            currentYPosition = addDescriptiveText(calculationDescText, currentYPosition);

            // Possible Plant Capacity Table
            doc.setFontSize(16);
            doc.text("Your Possible Plant Capacity", 10, currentYPosition + 10);
            autoTable(doc, {
                ...autoTableOptions,
                startY: currentYPosition + 15,
                head: [["Parameter", "Value"]],
                body: [
                    ["Plant Capacity (Consumption)", this.capacityConsumption],
                    ["Plant Capacity (Sanctioned Load)", this.userSanctioned],
                    ["Plant Capacity (Area)", this.capacityArea],
                    ["Possible Plant Capacity (whichever is lower)", this.possibleCapacity],
                ],
            });
            currentYPosition = doc.lastAutoTable.finalY + 10;

            // Solar Plant Output Table
            doc.setFontSize(16);
            doc.text("Your Solar Plant Output", 10, currentYPosition + 10);
            autoTable(doc, {
                ...autoTableOptions,
                startY: currentYPosition + 15,
                head: [["Parameter", "Value"]],
                body: [
                    ["Cost of Project", this.costProject],
                    ["Solar Panels", `${this.monoperc} panels`],
                    ["Yearly Units Generated", `${this.yearlyUnitsGenerated} kWh`],
                    ["Yearly Saving", `Rs ${this.yearlyUnitsSaving}`],
                ],
            });
            currentYPosition = doc.lastAutoTable.finalY + 10;

            // Descriptive text after Solar Plant Output
            const plantDetailsDescText = "Our solar systems use advanced panels for better performance and durability, giving you reliable power for years to come.";
            currentYPosition = addDescriptiveText(plantDetailsDescText, currentYPosition);

            // Loan Details Table
            doc.setFontSize(16);
            doc.text("Loan Details", 10, currentYPosition + 10);
            autoTable(doc, {
                ...autoTableOptions,
                startY: currentYPosition + 15,
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
            currentYPosition = doc.lastAutoTable.finalY + 10;

            // Descriptive text after Loan Details
            const loanDescText = "We offer easy loan options with low monthly payments, so you can go solar without financial worries.";
            currentYPosition = addDescriptiveText(loanDescText, currentYPosition);

            // Yearly Savings Table
            doc.setFontSize(16);
            doc.text("Yearly Savings (10 Years)", 10, currentYPosition + 10);
            autoTable(doc, {
                ...autoTableOptions,
                startY: currentYPosition + 15,
                head: [["Year", "Savings (Rs.)"]],
                body: this.yearlySavings.map((entry) => [entry.year, Math.round(entry.savings)]),
            });
            currentYPosition = doc.lastAutoTable.finalY + 10;

            // Descriptive text after Yearly Savings
            const yearlySavingsDescText = "Solar panels help reduce your electricity bill every year, giving you long-term financial benefits.";
            currentYPosition = addDescriptiveText(yearlySavingsDescText, currentYPosition);

            // Bar Charts (EMI and Savings Chart)
            const maxContentHeight = pageHeight - 50; // Keeping some margin space for footer
            let chartYPosition = currentYPosition;

            // Check if the EMI Chart fits on the page
            const emiChartCanvas = document.getElementById('emiChart');
            if (emiChartCanvas) {
                const emiChartHeight = 100;
                if (chartYPosition + emiChartHeight > maxContentHeight) {
                    doc.addPage(); // If not enough space, create a new page
                    chartYPosition = 10; // Reset the position
                }
                const emiChartImage = emiChartCanvas.toDataURL('image/png');
                doc.addImage(emiChartImage, 'PNG', 10, chartYPosition + 10, pageWidth - 20, emiChartHeight);
                chartYPosition += emiChartHeight + 10;
            }

            // Check if the Savings Bar Chart fits on the page
            const savingsChartCanvas = document.getElementById('emiSavingsChart');
            if (savingsChartCanvas) {
                const savingsChartHeight = 100;
                if (chartYPosition + savingsChartHeight > maxContentHeight) {
                    doc.addPage(); // If not enough space, create a new page
                    chartYPosition = 10; // Reset the position
                }
                const savingsChartImage = savingsChartCanvas.toDataURL('image/png');
                doc.addImage(savingsChartImage, 'PNG', 10, chartYPosition + 10, pageWidth - 20, savingsChartHeight);
            }

            // Finalize and Save the PDF
            doc.save("Exloar_Energy.pdf");
        }



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