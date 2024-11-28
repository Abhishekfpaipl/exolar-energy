<template>
    <div>
        <div class="" style="background-color: var(--bg-secondary)">
            <div class="container pt-5">
                <h1 class="text-center display-5 text-white mb-4 text-uppercase">Why Choose Us?</h1>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 align-items-center ">
                    <div class="col mb-5" v-for="(card, index) in cards" :key="index">
                        <div class="card-container border position-relative rounded p-2 "
                            style="background-color:#f3f8f3 !important">
                            <div class="card border-0">
                                <div class="card-header d-flex flex-column justify-content-center align-items-center">
                                    <div class="rounded overflow-hidden border border-white border-2 p-1 rotate"
                                        style="width:60px; height:60px; margin-top:-40px; background-color: var(--bg-third)">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover; filter: invert(1)" />
                                    </div>
                                    <p class="fw-bold smaller mb-0 mt-0 text-ellipsis1">{{ card.title }}</p>
                                </div>
                                <div class="card-body bg-light py-2 px-1">
                                    <p class="fw-bold smaller mb-0 mt-0 text-ellipsis1">{{ card.name }}</p>
                                    <p class="text-dark smaller mb-0 text-ellipsis3">{{ card.description }} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center pb-5 pt-2">
                    <div class="col-lg-4 row row-cols-1 g-3 mt-0">
                        <div v-for="(card, index) in servicesLeft" :key="index" class="col" v-observe>
                            <div class="d-flex justify-content-start align-items-center text-white p-2">
                                <div class="text-md-end text-start order-2 order-md-1 card-body me-md-3 ms-3 p-0">
                                    <p class="fw-bold small mb-0 text-ellipsis1">{{ card.title }}</p>
                                    <p class="smaller mb-0 text-ellipsis3">{{ card.description }} </p>
                                </div>
                                <div class="d-flex justify-content-center align-items-center rounded overflow-hidden border order-md-2 border-white border-2 p-1 rotate"
                                    style="min-width:60px; height:60px;background-color: var(--bg-secondary)">
                                    <i class="bi bi-arrow-up"></i>
                                    <!-- <img :src="card.image" alt="Profile" class="rounded-circle"
                                        style="width: 100%; height: 100%;object-fit: cover; filter: invert(1)" /> -->
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4 overflow-hidden p-5 mt-0">
                        <img src="/img/why-choose.png" ref="solarPanel" alt="Rooftop solar panel installation in Delhi by Exolar Energy" class="w-75 of-cover scale-0" height="auto">
                    </div>


                    <div class="col-lg-4 row row-cols-1 g-3 mt-0">
                        <div v-for="(card, index) in servicesRight" :key="index" class="col" v-observe>
                            <div class="d-flex justify-content-start align-items-center text-white p-2">
                                <div class="d-flex justify-content-center align-items-center rounded overflow-hidden border border-white border-2 p-1 rotate"
                                    style="min-width:60px; height:60px;background-color: var(--bg-secondary)">
                                    <i class="bi bi-arrow-up"></i>
                                    <!-- <img :src="card.image" alt="Profile" class="rounded-circle"
                                        style="width: 100%; height: 100%;object-fit: cover; filter: invert(1)" /> -->
                                </div>
                                <div class="text-start card-body ms-3 p-0">
                                    <p class="fw-bold small mb-0 text-ellipsis1">{{ card.title }}</p>
                                    <p class="smaller mb-0 text-ellipsis3">{{ card.description }} </p>
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
    data() {
        return {
            images: [
                "/img/why-choose/1.png",
                "/img/why-choose/2.png",
                "/img/why-choose/3.png",
                "/img/why-choose/4.png",
                "/img/why-choose/5.png",
                "/img/why-choose/6.png",
            ],
            "servicesLeft": [
                {
                    "image": "/img/why-choose/credit-card-icon.png",
                    "title": "Optimized Design & Engineering",
                    "description": "Efficient design and engineering for the best project outcomes."
                },
                {
                    "image": "/img/why-choose/customer-service-icon.png",
                    "title": "The Best Technology and Value",
                    "description": "Advanced technology with cost-effective solutions, no compromises."
                },
                {
                    "image": "/img/why-choose/end-to-end-delivery.png",
                    "title": "Quick Project Delivery",
                    "description": "On-time project completion with precision and expertise."
                },
                {
                    "image": "/img/why-choose/end-to-end-delivery.png",
                    "title": "Fast Net Metering & Subsidy Approval",
                    "description": "Quick approval for net metering and subsidies, ensuring timely project setup."
                },
            ],
            "servicesRight": [
                {
                    "image": "/img/why-choose/quick-install.png",
                    "title": "Strong Top Management",
                    "description": "Led by solar experts, we ensure quality solutions for your projects."
                },
                {
                    "image": "/img/why-choose/survey-icon.png",
                    "title": "Trust & Honesty",
                    "description": "Clear communication and flexible options for your peace of mind."
                },
                {
                    "image": "/img/why-choose/trained-technicians.png",
                    "title": "Top-Quality Maintenance",
                    "description": "Proactive maintenance for smooth operations and optimal performance."
                },
                {
                    "image": "/img/why-choose/trained-technicians.png",
                    "title": "Daily Remote Monitoring",
                    "description": "Real-time monitoring and analytics for complete control."
                },
            ]
        };
    },
    mounted() { 

        const image = this.$refs.solarPanel;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        image.classList.add("scale-up");
                    }
                });
            },
            { threshold: [0.1] }
        );

        observer.observe(image);
    },
    beforeUnmount() {
        // Clear interval on component unmount
        clearInterval(this.intervalId);
    },
};
</script>
<style scoped>
/* Initial scale set to 0 */
.scale-0 {
    transform: scale(0);
    transition: transform 1.5s ease-in-out;
    /* Smooth scaling transition */
}

/* This class will be added when the image is in view */
.scale-up {
    transform: scale(1);
}
@keyframes rotate {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.15);
    }
}

.rotate {
    display: inline-block;
    animation: rotate 1.5s ease-in-out infinite;
}
</style>