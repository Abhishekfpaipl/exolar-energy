<template>
    <div class="container py-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div v-for="(item, index) in items" :key="index" class="col" data-aos="fade-up"
                :data-aos-delay="index * 100">
                <div class="card h-100 border-0 shadow-lg transform-hover transition-all rounded-4 overflow-hidden"  style="background: linear-gradient(90deg, rgba(41,61,144,1) 0%, rgba(35,122,191,1) 90%);">
                    <div class="card-body d-flex flex-column p-4">
                        <div class="d-flex align-items-center mb-3">
                            <i :class="[
                                item.icon,
                                'display-4 me-3 text-white opacity-75'
                            ]"></i>
                            <h3 class="card-title mb-0 text-white">
                                {{ item.title }}
                            </h3>
                        </div>
                        <p class="card-text text-white flex-grow-1">
                            {{ item.text }}
                        </p>
                        <!-- <div class="mt-auto">
                            <span class="btn btn-outline-light btn-sm rounded-pill opacity-75">
                                Learn More
                            </span>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutKeyFeatures",
    data() {
        return {
            items: [
                {
                    icon: "bi-house",
                    title: "Mission",
                    text: "We are dedicated to providing start-to-end support for our customers in rooftop solar power plant installation. Our focus is on delivering high-quality solar systems at minimal cost while ensuring aesthetic appeal. We strive to be the most reliable and trusted solar company in the market, setting a benchmark for excellence in solar solutions."
                },
                {
                    icon: "bi-building",
                    title: "Vision",
                    text: "Our vision is to enable the world to maximize the use of distributed solar energy. To become India’s No. 1 rooftop solar company, renowned for delivering exceptional quality and maintaining system-oriented processes across every major city in the country. We aspire to be recognized as the best employer in India, fostering a workplace that inspires growth, innovation, and excellence."
                },
                {
                    icon: "bi-people",
                    title: "Values",
                    text: "We value trust, on-time delivery, and uncompromised quality. Customer satisfaction and happiness are our priorities, alongside caring for our employees. We focus on growing as an organization while increasing company profitability."
                }


            ]
        };
    },
    methods: {
        getCardClass(index) {
            const gradientClasses = [
                'bg-gradient-primary',
                'bg-gradient-success',
                'bg-gradient-info'
            ];
            return gradientClasses[index];
        }
    },
    mounted() {
        // Add AOS (Animate on Scroll) initialization if not already present
        if (window.AOS) {
            window.AOS.init();
        }
    }
};
</script>

<style scoped>
.transform-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.transform-hover:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

/* Gradient Backgrounds */
.bg-gradient-primary {
    background: linear-gradient(145deg, #274185 0%, #1C8452 100%) !important;
}

.bg-gradient-success {
    background: linear-gradient(145deg, #65ea65 0%, #ca9a0c 100%) !important;
}

.bg-gradient-info {
    background: linear-gradient(145deg, #546670 0%, #BACAD3 100%) !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .card-body {
        padding: 2rem !important;
    }
}
</style>