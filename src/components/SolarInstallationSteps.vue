<template>
    <div class="container text-center py-5">
        <div class="text-start mb-5">
            <h2 class="text-muted mb-1 text-uppercase"> Optimum Energy</h2>
            <h1 class="display-5 text-uppercase" style="color: var(--bg-third);">Setting up Solar Systems</h1>
        </div>
        <div class="row">
            <div class="col-md-6">
                <img src="/img/stepsImage.jpeg" alt="Rooftop solar panel installation in Delhi by Exolar Energy"
                    class="w-100 sticky-image">
            </div>
            <div class="col-md-6 mt-5 mt-md-0">
                <div class="row row-cols-1 g-2 accordion accordion-flush" id="accordionFlushExample">
                    <div class="col accordion-item border-bottom-0" v-for="(step, index) in steps" :key="index" v-observe>
                        <h3 class="accordion-header">
                            <div class="accordion-button collapsed p-3 h-100 w-100 d-flex align-items-center justify-content-start gap-2"
                                type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapseOne' + index"
                                aria-expanded="false" :aria-controls="'flush-collapseOne' + index"
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
                        </h3>
                        <div :id="'flush-collapseOne' + index" class="accordion-collapse collapse border mt-2"
                            data-bs-parent="#accordionFlushExample" style="background-color: #F3F8F3;">
                            <div class="accordion-body fw-bold text-capitalize">{{ step.description }}</div>
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
                {
                    title: "Consultancy",
                    icon: "bi-sun",
                    description: "Providing expert advice and strategic planning to guide your project from start to finish."
                },
                {
                    title: "End to End Survey",
                    icon: "bi-geo",
                    description: "Conducting comprehensive surveys to assess site conditions and gather necessary data for design and implementation."
                },
                {
                    title: "Detailed Engineering Report",
                    icon: "bi-file-earmark-text",
                    description: "Creating a detailed report that outlines the technical specifications, design plans, and necessary steps for successful execution."
                },
                {
                    title: "Procurement & Liaisoning",
                    icon: "bi-shop-window",
                    description: "Managing the procurement process for required materials and liaising with suppliers and vendors to ensure timely delivery."
                },
                {
                    title: "Desktop Simulation",
                    icon: "bi-display",
                    description: "Using advanced software to simulate the system's performance, ensuring optimal design and function before installation."
                },
                {
                    title: "Site Visit",
                    icon: "bi-geo-alt-fill",
                    description: "Visiting the site to assess physical conditions, make necessary adjustments to designs, and ensure readiness for the next steps."
                },
                {
                    title: "Validation & Design",
                    icon: "bi-diagram-3",
                    description: "Validating the initial designs with on-site data and refining the design to meet all technical and functional requirements."
                },
                {
                    title: "Proposal & Acceptance",
                    icon: "bi-file-earmark-check",
                    description: "Submitting a comprehensive proposal outlining costs, timelines, and specifications, followed by client acceptance to move forward."
                },
                {
                    title: "Installation & Testing",
                    icon: "bi-hammer",
                    description: "Carrying out the installation process and conducting thorough testing to ensure all systems are functional and meet quality standards."
                },
                {
                    title: "Net Metering",
                    icon: "bi-receipt",
                    description: "Implementing net metering systems to track energy usage and optimize energy efficiency, enabling clients to monitor consumption and savings."
                }
            ]

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
.accordion-button:not(.collapsed) {
    color: white !important;
    background-color: #198754 !important;
    border-color: 4px solid var(--bg-primary) !important;
    box-shadow: none !important;
}
.accordion-button::after {
    filter: invert(1) !important
}
</style>