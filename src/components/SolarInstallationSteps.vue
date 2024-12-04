<template>
    <div class="container text-center py-5">
        <div class="text-start mb-5">
            <h2 class="text-muted mb-1 text-uppercase">Complete Solar Journey</h2>
            <h1 class="display-5 text-uppercase" style="color: var(--bg-third);">Step-by-Step Installation Process</h1>
        </div>
        <div class="row">
            <div class="col-md-6">
                <img src="/img/stepsImage.jpeg" alt="Rooftop solar panel installation in Delhi by Exolar Energy"
                    class="w-100 sticky-image">
            </div>
            <div class="col-md-6 mt-5 mt-md-0">
                <div class="row row-cols-1 g-2 accordion accordion-flush" id="accordionFlushExample">
                    <div class="col accordion-item   px-0" v-for="(step, index) in steps" :key="index" v-observe>
                        <h3 class="accordion-header">
                            <div class="accordion-button collapsed p-3 h-100 w-100 d-flex align-items-center justify-content-start gap-2"
                                type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapseOne' + index"
                                aria-expanded="false" :aria-controls="'flush-collapseOne' + index"
                                style="background-color: #F3F8F3;">
                                <div class="d-flex justify-content-center align-items-center border rounded-circle position-relative"
                                    style="min-width: 80px; min-height: 80px;">
                                    <div class="position-absolute end-0 bg-success text-white rounded-circle mx-auto d-flex align-items-center justify-content-center"
                                        style="width: 30px; height: 30px; font-size: 1.2rem; top: -10%">
                                        {{ index + 1 }}
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center bg-light p-3 rounded-circle "
                                        style="width: 50px; height: 50px;">
                                        <i :class="`bi ${step.icon} fs-2 text-success`"></i>
                                    </div>
                                </div>
                                <p class="mb-0 fs-4 text-start ms-3">{{ step.title }}</p>
                            </div>
                        </h3>
                        <div :id="'flush-collapseOne' + index"
                            class="accordion-collapse collapse border-end border-start border-bottom"
                            data-bs-parent="#accordionFlushExample"
                            style="background-color: var(--bg-background);border-color:var(--bg-third) !important">
                            <div class="accordion-body">{{ step.description }}</div>
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
                    title: "Understanding Customer Needs",
                    icon: "bi-sun",
                    description: "Collect electricity bills, location details, and rooftop photos to analyze consumption and site conditions."
                },
                {
                    title: "On-Site Survey",
                    icon: "bi-geo",
                    description: "Engineers assess roof space, shadowing, structural strength, and cable routes for system feasibility."
                },
                {
                    title: "Design Finalization & Proposal",
                    icon: "bi-diagram-3",
                    description: "Prepare designs and proposals following field data, guidelines, and client preferences."
                },
                {
                    title: "Approval of the Proposal",
                    icon: "bi-file-earmark-check",
                    description: "Client reviews and approves the proposal, advancing the project with payment confirmation."
                },
                {
                    title: "Procurement & Liaisoning",
                    icon: "bi-file-earmark-text",
                    description: "Materials are procured, and approvals from DISCOMs and authorities are managed."
                },
                {
                    title: "Installation & Commissioning",
                    icon: "bi-shop-window",
                    description: "Solar panels, inverters, and cables are installed, followed by system testing and commissioning."
                },
                {
                    title: "Net Metering & Subsidy Approval",
                    icon: "bi-receipt",
                    description: "Submit compliant designs to DISCOM, ensure queries are resolved, and process subsidy applications."
                },
                // {
                //     title: "Desktop Simulation",
                //     icon: "bi-display",
                //     description: "Using advanced software to simulate the system's performance, ensuring optimal design and function before installation."
                // },
                // {
                //     title: "Site Visit",
                //     icon: "bi-geo-alt-fill",
                //     description: "Visiting the site to assess physical conditions, make necessary adjustments to designs, and ensure readiness for the next steps."
                // },
                // {
                //     title: "Validation & Design",
                //     icon: "bi-diagram-3",
                //     description: "Validating the initial designs with on-site data and refining the design to meet all technical and functional requirements."
                // },

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