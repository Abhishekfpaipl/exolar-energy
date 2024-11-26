<template>
    <div class="container my-5">
        <h1 class="text-center mb-5">Solar Loan EMI Chart</h1>

        <!-- Loan Input Section -->
       

        <!-- EMI Details -->
        <div class="row mt-4" v-if="showEmiDetails">
            <div class="col-12 mb-4"> 
                <div class="row g-4">
                    <div class="col-6 col-md-3">
                        <div class="card" style="background-color: #B39EB5;">
                            <div class="card-body">
                                <h5 class="card-title">Cost of Project</h5>
                                <p class="card-text">{{ loanAmount }}</p>
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

            <!-- Table Section for Yearly Payments -->

            <!-- <div class="col-md-6">
                <h3>Amortization Schedule (Yearly)</h3>
                <table class="table table-striped" id="amortizationTable">
                    <thead class="table-dark">
                        <tr>
                            <th>Year</th>
                            <th>Total Principal (₹)</th>
                            <th>Total Interest (₹)</th>
                            <th>Total Payment (₹)</th>
                            <th>Remaining Balance (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, index) in amortizationScheduleByYear" :key="index">
                            <td>{{ row.year }}</td>
                            <td>{{ row.principal.toFixed(2) }}</td>
                            <td>{{ row.interest.toFixed(2) }}</td>
                            <td>{{ (row.principal + row.interest).toFixed(2) }}</td> 
                            <td>{{ row.balance.toFixed(2) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div> -->
            <div class="col-md-6 mt-5">
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
            </div>
            <button class="btn btn-secondary mt-3" @click="downloadPdf">Download as PDF</button>
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
</template>

<script>
import { Chart } from 'chart.js/auto';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
    name: 'SolarEmiCalculator',
    props: {
        loanAmount: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
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
            chart: null
        };
    },
    methods: {
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
            if (this.chart) this.chart.destroy();

            const principalData = this.amortizationScheduleByYear.map(row => row.principal);
            const interestData = this.amortizationScheduleByYear.map(row => row.interest);
            const balanceData = this.amortizationScheduleByYear.map(row => row.balance); // New dataset for balance

            const ctx = document.getElementById('emiChart').getContext('2d');
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
        downloadPdf() {
            const doc = new jsPDF();
            doc.text('Amortization Schedule (Yearly)', 14, 10);

            // Generate table data for the PDF
            const tableData = this.amortizationScheduleByYear.map((row) => [
                row.year,
                (row.principal + row.interest).toFixed(2)
            ]);

            // Add table to PDF
            doc.autoTable({
                head: [['Year', 'Total Payment (₹)']],
                body: tableData,
                startY: 20
            });

            // Generate Cumulative Payment data for PDF
            const cumulativeData = this.amortizationScheduleByYear.map((row, index) => [
                row.year,
                this.cumulativePayments[index].toFixed(2)
            ]);

            // Add Cumulative Payment table to PDF
            doc.autoTable({
                head: [['Year', 'Cumulative Payment (₹)']],
                body: cumulativeData,
                startY: doc.lastAutoTable.finalY + 10
            });

            // Save the PDF
            doc.save('Amortization_Schedule_With_Cumulative_Payments.pdf');
        }
    },
    mounted() {
        if (this.loanAmount !== 0) {
            this.downPayment = this.loanAmount * 0.2;
            this.localLoanAmount = this.loanAmount - this.downPayment;  // Use localLoanAmount instead
            this.calculateEmi();
        }
    },
    watch: {
        loanAmount(newVal) {
            if (newVal !== 0) {
                this.downPayment = newVal * 0.2;
                this.localLoanAmount = newVal - this.downPayment;  // Use localLoanAmount instead
                this.calculateEmi();
            } else {
                this.showEmiDetails = false;
                if (this.chart) this.chart.destroy();
            }
        }
    },
};
</script>
