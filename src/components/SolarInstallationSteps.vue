<template>
    <div class="container text-center py-5">
        <div class="text-start mb-5">
            <p class="text-muted mb-1 text-uppercase">Our Approach</p>
            <h2 class="display-5 text-uppercase" style="color: var(--bg-third);">Setting up Solar Systems with Optimum
                Energy Generation</h2>
        </div>
        <div class="row">
            <div class="col-md-6">
                <img src="/img/stepsImage.jpeg" alt="" class="w-100 sticky-image">
            </div>
            <div class="col-md-6 mt-5 mt-md-0">
                <div class="row row-cols-1 g-2">
                    <div class="col " v-for="(step, index) in steps" :key="index" v-observe>
                        <div class="border p-3 h-100 w-100 d-flex align-items-center justify-content-start gap-2"
                            style="background-color: #F3F8F3;">
                            <div class="d-flex justify-content-center align-items-center border rounded-circle position-relative"
                                style="min-width: 100px; min-height: 100px;">
                                <div class="position-absolute end-0 bg-success text-white rounded-circle mx-auto d-flex align-items-center justify-content-center"
                                    style="width: 40px; height: 40px; font-size: 1.2rem; top: -10%">
                                    {{ index + 1 }}
                                </div>
                                <div class="d-flex justify-content-center align-items-center bg-light p-3 rounded-circle "
                                    style="width: 50px; height: 50px;">
                                    <i :class="`bi ${step.icon} fs-1 text-success`"></i>
                                </div>
                            </div>
                            <p class="mb-0 fs-3 text-start ms-3">{{ step.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SolarSetupApproach",
    data() {
        return {
            steps: [
                { title: "Consultancy", icon: "bi-sun" },
                { title: "End to End Survey", icon: "bi-geo" },
                { title: "Detailed Engineering Report", icon: "bi-file-earmark-text" },
                { title: "Procurement & Liaisoning", icon: "bi-shop-window" },
                // { title: "Installation & Commissioning", icon: "bi-cone-striped" },
                { title: 'Desktop Simulation', icon: 'bi bi-display', },
                { title: 'Site Visit', icon: 'bi bi-geo-alt-fill', },
                { title: 'Validation & Design', icon: 'bi bi-diagram-3', },
                { title: 'Proposal & Acceptance', icon: 'bi bi-file-earmark-check', },
                { title: 'Installation & Testing', icon: 'bi bi-hammer', },
                { title: 'Net Metering', icon: 'bi bi-receipt', }
            ],
        };
    },
};
</script>

<style scoped> 
@media (min-width: 768px) {
 
    .sticky-image {
        position: sticky;
        top: 10%; 
    }
}
</style>