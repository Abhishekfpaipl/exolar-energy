<template>
    <div class="container mt-4">
        <div class="card shadow-sm">
            <div class="card-header bg-primary text-white">
                <h2 class="text-center">Solar Calculator</h2>
            </div>
            <div class="card-body">
                <!-- Building Type Selection -->
                <div class="mb-4">
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
                </div>

                <!-- Location Input -->
                <div class="mb-3">
                    <label class="form-label">Location:</label>
                    <div class="input-group">
                        <input type="text" v-model="location" class="form-control" placeholder="Enter location" />
                        <button @click="detectLocation" class="btn btn-outline-secondary">
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
                            :class="['btn', 'me-2', consumerCategory === category ? 'brandPrimary' : 'brandSecondary']">
                            {{ category.toUpperCase() }}
                        </button>
                    </div>
                </div>

                <!-- Calculate Button -->
                <div class="text-center mt-4">
                    <button @click="calculate" class="btn text-white px-4" style="background-color: var(--bg-secondary)">
                        Calculate
                    </button>
                </div>

                <!-- Results Tables -->
                <div v-if="calculatedData" class="mt-5">
                    <!-- System Specifications -->
                    <h3 class="text-center text-primary mb-4">System Specifications</h3>
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
                    <div class="row g-3">
                        <div v-for="(count, appliance) in calculatedData.appliances" :key="appliance" class="col-md-4">
                            <div class="card h-100">
                                <div class="card-body text-center">
                                    <p>{{ appliance }}</p>
                                    <h5 class="text-primary">× {{ count }}</h5>
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
                    appliances: {
                        'Ceiling Fan (75w)': 2,
                        'Tubelight (20w)': 2,
                        'Television LED (100w)': 2,
                        'Laptop (100w)': 1,
                        'Refrigerator (200w)': 1
                    }
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
                    appliances: {
                        'Ceiling Fan (75w)': 3,
                        'Tubelight (20w)': 3,
                        'Television LED (100w)': 2,
                        'Laptop (100w)': 2,
                        'Refrigerator (200w)': 1
                    }
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
                    appliances: {
                        'Ceiling Fan (75w)': 4,
                        'Tubelight (20w)': 4,
                        'Television LED (100w)': 2,
                        'Laptop (100w)': 2,
                        'Refrigerator (200w)': 2
                    }
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
                    appliances: {
                        'Ceiling Fan (75w)': 5,
                        'Tubelight (20w)': 5,
                        'Television LED (100w)': 3,
                        'Laptop (100w)': 2,
                        'Refrigerator (200w)': 2
                    }
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
                    appliances: {
                        'Ceiling Fan (75w)': 6,
                        'Tubelight (20w)': 6,
                        'Television LED (100w)': 3,
                        'Laptop (100w)': 3,
                        'Refrigerator (200w)': 2
                    }
                }
            ]
        }
    },
    methods: {
        detectLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        // In a real implementation, you would use a reverse geocoding service
                        const { latitude, longitude } = position.coords
                        this.location = `Lat: ${latitude.toFixed(4)}, Long: ${longitude.toFixed(4)}`
                    },
                    (error) => {
                        console.error('Error getting location:', error)
                        this.location = 'Location detection failed'
                    }
                )
            } else {
                this.location = 'Geolocation not supported'
            }
        },
        setCategory(category) {
            this.consumerCategory = category
        },
        calculate() {
            if (!this.sanctionedLoad) {
                alert('Please enter sanctioned load')
                return
            }

            const load = parseFloat(this.sanctionedLoad)
            // Find appropriate solar system based on sanctioned load
            this.calculatedData = this.solarData.find(d => d.kw >= load) || this.solarData[0]
        }
    }
}
</script>

<style scoped>
.card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
} 

@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }
}
.brandPrimary{
    background-color:var(--bg-secondary);
    color:white;
}
.brandSecondary{
    background-color:var(--bg-primary);
    color:white;
}
</style>