<template>
    <div class="container">
        <div class="text-start">
            <p class="text-muted mb-1 text-uppercase">Exolar Energy</p>
            <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Steps For Successful Solar
                Rooftop Installation</h2>
        </div>
        <div class="timeline-main">
            <div class="timeline-wrap">
                <div class="timeline-card" v-for="(step, index) in steps" :key="index">
                    <div class="timeline-card-wrap">
                        <div class="d-md-flex gap-4 align-items-center">
                            <h6 class="text-white mb-0"> <i :class="step.icon" class="fs-1"></i></h6>
                            <h2 class="text-white mb-0">(Step {{ index + 1 }}). {{ step.title }}</h2>
                        </div>
                        <p class="text-white mt-4">
                        <ul>
                            <li class="text-start" v-for="(detail, detailIndex) in step.details" :key="detailIndex">
                                {{ detail }}
                            </li>
                        </ul>
                        </p>
                    </div>
                </div>
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
                    title: 'Desktop Simulation',
                    icon: 'bi bi-display',
                    details: [
                        'We use customer inputs viz. Electricity bills, location coordinates and physical rooftop',
                        'Necessary preliminary assessment before site survey'
                    ]
                },
                {
                    title: 'Site Visit',
                    icon: 'bi bi-geo-alt-fill',
                    details: [
                        'Solar engineer visits site to validate simulation inputs and for physical assessment',
                        'Parameters viz. roof space, strength, shadow, future use etc. are assessed for discussion and finalize simulation'
                    ]
                },
                {
                    title: 'Validation & Design',
                    icon: 'bi bi-diagram-3',
                    details: [
                        'Validation and updating of the simulation',
                        'Finalization of plant design',
                        'Plant design is prepared based on site inputs and international design principles, process and software'
                    ]
                },
                {
                    title: 'Proposal & Acceptance',
                    icon: 'bi bi-file-earmark-check',
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
                    icon: 'bi bi-hammer',
                    details: [
                        'Detailed design drawing prepared',
                        'Supplies, schedule and allotment',
                        'Installation of solar system',
                        'Cooperation from client is very important in this phase for swift access, availability of water, electricity etc.'
                    ]
                },
                {
                    title: 'Net Metering',
                    icon: 'bi bi-receipt',
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

.timeline-main {
    width: 100%;
    padding: 25px;
}

.timeline-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.timeline-wrap::before {
    content: "";
    position: absolute;
    top: 10px;
    left: -5px;
    transform: translateX(50%);
    width: 4px;
    height: calc(100% - 10px);
    background-color: #00283a;
    animation: line 5s linear;
}

.timeline-card {
    width: 100%;
    margin-left: auto;
    position: relative;

    @media (max-width: 767px) {
        width: 100%;
    }
}

.timeline-card::after {
    content: "";
    position: absolute;
    top: 10px;
    left: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid #fff;
    background: #00283a;
    animation: fadeIn 1.5s;
    animation-fill-mode: both;
}

.timeline-card-wrap {
    height: 100%;
    margin-left: 35px;
    background-color: #00283a;
    border-radius: 10px;
    padding: 30px;
    animation: fadeInRight 2.5s;
    animation-fill-mode: both;

    @media (max-width: 767px) {
        padding: 20px;
    }
}

.card-head-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    @media (max-width: 1199px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
}
 

@keyframes fadeInRight {
    0% {
        opacity: 0;
        transform: translateX(30px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
</style> 