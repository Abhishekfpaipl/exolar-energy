<template>
    <div class="container">
        <div class="text-start">
            <p class="text-muted mb-1 text-uppercase">Exolar Energy</p>
            <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Steps For Successful Solar Rooftop
                Installation</h2>
        </div>
        <h2 class="text-center mb-4"></h2>
        <div class="row row-cols-1 row-cols-md-2 g-2">
            <div class="col" v-for="(step, index) in steps" :key="index">
                <!-- <div class="card border-0">
                    <div class="card-body"> -->
                <div class="accordion" :id="'accordion' + index">
                    <div class="accordion-item" style="background-color: var(--bg-primary);">
                        <h2 class="accordion-header" :id="'heading' + index">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#collapse' + index" aria-expanded="false"
                                :aria-controls="'collapse' + index" style="background-color: var(--bg-primary);">
                                <i :class="step.icon" class="fs-1 text-white me-3"></i>
                                <h5 class="text-white mb-0">{{ step.title }}</h5>
                            </button>
                        </h2>
                        <div :id="'collapse' + index" class="accordion-collapse collapse"
                            :aria-labelledby="'heading' + index" :data-bs-parent="'#accordion' + index">
                            <div class="accordion-body">
                                <ul class=" ">
                                    <li class="text-start text-white small" v-for="(detail, detailIndex) in step.details"
                                        :key="detailIndex">
                                        {{ detail }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- </div>
                </div> -->
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'SolarInstallationSteps',
    data() {
        return {
            steps: [
                {
                    title: 'Desktop simulation',
                    icon: 'bi bi-pc-display',
                    details: [
                        'We use customer inputs viz. Electricity bills, location coordinates and physical rooftop',
                        'Necessary preliminary assessment before site survey'
                    ]
                },
                {
                    title: 'Site visit',
                    icon: 'bi bi-geo-alt',
                    details: [
                        'Solar engineer visits site to validate simulation inputs and for physical assessment',
                        'Parameters viz. roof space, strength, shadow, future use etc. are assessed for discussion and finalize simulation'
                    ]
                },
                {
                    title: 'Validation & Design',
                    icon: 'bi bi-gear',
                    details: [
                        'Validation and updating of the simulation',
                        'Finalization of plant design',
                        'Plant design is prepared based on site inputs and international design principles, process and software'
                    ]
                },
                {
                    title: 'Proposal & Acceptance',
                    icon: 'bi bi-file-earmark-text',
                    details: [
                        'Preparation of optimized commercial terms and conditions',
                        'Submission of techno-commercial proposal to client',
                        'Client accepts the proposal and issues signing documents',
                        'Client gets maximum possible value',
                        'Best supplier, system, liability, and implications are offered with clear terms of business'
                    ]
                },
                {
                    title: 'Installation & Testing',
                    icon: 'bi bi-lightning-charge',
                    details: [
                        'Detailed design drawing prepared',
                        'Supplies, schedule and allotment',
                        'Installation of solar system',
                        'Cooperation from client is very important in this phase for swift access, availability of water, electricity etc.'
                    ]
                },
                {
                    title: 'Net Metering',
                    icon: 'bi bi-plug',
                    details: [
                        'Detailed drawings compliant with Discom rules are made and submitted to Discom',
                        'Liaison with Discom for processing',
                        'Multiple visits to engineers and staff to Discom to resolve queries and provide information',
                        'Net metering is a process between client and Discom. It is facilitated by Solar EPC companies from clients to easy completion'
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
.accordion-button::after {
    filter: invert(1) !important
}
</style>