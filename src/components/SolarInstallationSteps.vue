<template>
    <div class="container text-center py-5">
        <h2 class="fw-bold mb-4 text-success">Our Approach</h2>
        <h3 class="mb-5">Setting up Solar Systems with Optimum Energy Generation</h3>

        <div class="row justify-content-center">
            <div class="col-12 col-md-2 mb-4 d-flex flex-column justify-content-center align-items-center h-100"
                v-for="(step, index) in steps" :key="index" v-observe>
                <div class="d-flex justify-content-center align-items-center border rounded-circle position-relative"
                    style="width: 100px; height: 100px;">
                    <div class="position-absolute end-0 bg-success text-white rounded-circle mx-auto d-flex align-items-center justify-content-center"
                        style="width: 40px; height: 40px; font-size: 1.2rem; top: -10%">
                        {{ index + 1 }}
                    </div>
                    <div class="d-flex justify-content-center align-items-center bg-light p-3 rounded-circle "
                        style="width: 50px; height: 50px;">
                        <i :class="`bi ${step.icon} fs-1 text-success`"></i>
                    </div>
                </div>
                <h5 class="mt-3">{{ step.title }}</h5>
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
h3 {
    font-weight: 400;
}

.fs-1 {
    font-size: 2rem;
}
</style>