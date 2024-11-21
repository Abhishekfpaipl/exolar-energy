<template>
    <div>
        <div class="container">
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
                <button type="submit" class="btn btn-primary my-3">Calculate</button>
            </form>

            <div v-if="kWH !== null">

                <div class="table-responsive">
                    <table class="table table-bordered text-center">
                        <thead class="table-warning border-warning">
                            <tr>
                                <th>kWh</th>
                                <th>Shadow Free Space</th>
                                <th>System Installed</th>
                                <th>Monthly Bill Saved</th>
                                <th>Two Bill Saved</th>
                                <th>Three Bill Saved</th>
                                <th>Four Bill Saved</th>
                                <th>Five Bill Saved</th>
                                <th>Twenty Five Bill Saved</th>
                                <th>Total Estimated Cost</th>
                                <th>Total Cost</th>
                                <th>Subsidy</th>
                                <th>Final Price</th>
                            </tr>
                            <tr>
                                <td>{{ kWH }}</td>
                                <td>{{ shadowFree }}</td>
                                <td>{{ systemInstalled }}</td>
                                <td>₹{{ monthlyBill }}</td>
                                <td>₹{{ yearlyBill }}</td>
                                <td>₹{{ twoyearlBill }}</td>
                                <td>₹{{ threeyearlBill }}</td>
                                <td>₹{{ fouryearlBill }}</td>
                                <td>₹{{ fiveyearlBill }}</td>
                                <td>₹{{ twentyfiveyearlBill }}</td>
                                <td>₹{{ totalCost }}</td>
                                <td>₹{{ subsidy }}</td>
                                <td>₹{{ finalPrice }}</td>
                            </tr>
                        </thead>
                    </table>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            electricityRate: 0,
            billAmount: 0,
            kWH: null,
            systemInstalled:null,
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
        };
    },
    methods: {
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
        }
    }
};
</script>

<style lang="css">
/* Add your custom styles here */
</style>
