<template>
    <div class="core-values-section py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center mb-5"> 
                    <h2 class="display-5 text-uppercase fw-bold" style="color: var(--bg-primary)">
                        Our Core Values
                    </h2>
                </div>
            </div>

            <div class="row mb-4">
                <div class="col-12 col-lg-8 mx-auto">
                    <p class="lead text-center text-muted">
                        One thing that we've tried to keep consistent through all these years is our core set of values and beliefs. 
                        They have helped us get to where we are today, and they guide us as we grow. 
                        We inculcate these values in everything we do - from the littlest of things to the biggest of decisions.
                    </p>
                </div>
            </div>

            <div class="row g-4">
                <div 
                    v-for="(data, index) in datas" 
                    :key="index" 
                    class="col-12 col-md-6 col-lg-4"
                    data-aos="fade-up"
                    :data-aos-delay="index * 100"
                >
                    <div class="card h-100 border-0 shadow-sm hover-lift">
                        <div class="card-body d-flex align-items-center p-4">
                            <div 
                                class="icon-wrapper me-4 d-flex align-items-center justify-content-center rounded-circle"
                                :style="{ 'background-color': getIconBackground(index) }"
                            >
                                <i 
                                    :class="data.icon" 
                                    class="fs-3 text-white"
                                ></i>
                            </div>
                            <div>
                                <h5 class="card-title mb-2 fw-bold">{{ data.heading }}</h5>
                                <p class="card-text text-muted mb-0">{{ data.text }}</p>
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
            datas: [
                {
                    icon: 'bi bi-sun', // Sun icon for renewable energy
                    heading: 'Sustainable Energy',
                    text: 'Our mission is to deliver clean, renewable energy solutions that reduce carbon footprint and contribute to a greener planet.'
                },
                {
                    icon: 'bi bi-recycle', // Recycle icon for eco-friendliness
                    heading: 'Eco-Friendly Practices',
                    text: 'We are dedicated to eco-friendly practices, minimizing environmental impact through sustainable product development and operations.'
                },
                {
                    icon: 'bi bi-tree', // Tree icon for environmental consciousness
                    heading: 'Environmental Stewardship',
                    text: 'We prioritize conservation and environmental responsibility in all aspects of our business, ensuring a positive impact on the planet.'
                },
                {
                    icon: 'bi bi-lightning', // Lightning icon for energy efficiency
                    heading: 'High Energy Efficiency',
                    text: 'Our products are engineered for maximum energy efficiency, providing reliable power while reducing overall energy consumption.'
                }, 
                {
                    icon: 'bi bi-lightbulb', // Lightbulb icon for innovation
                    heading: 'Innovation in Technology',
                    text: 'We continuously innovate to bring the latest advancements in solar technology, providing efficient and cost-effective energy solutions.'
                },
                {
                    icon: 'bi bi-building', // Building icon for infrastructure
                    heading: 'Reliable Infrastructure',
                    text: 'Our robust infrastructure supports sustainable energy production, ensuring reliable power for both residential and commercial needs.'
                },
                {
                    icon: 'bi bi-wrench', // Wrench icon for flexibility
                    heading: 'Custom Solutions',
                    text: 'We offer tailored solar solutions to meet the unique requirements of our customers, ensuring optimal results for each project.'
                },
                {
                    icon: 'bi bi-award', // Award icon for quality assurance
                    heading: 'Quality Assurance',
                    text: 'Our commitment to quality is backed by industry standards and certifications, guaranteeing excellence in every product and service.'
                },
            ],
        }
    },
    methods: {
        getIconBackground(index) {
            const backgrounds = [
                '#19f8f3',   // Coral Red
                '#274185',   // Turquoise
                '#1c75bc',   // Sky Blue
                '#1C8452',   // Sunflower Yellow
                '#FEC111',   // Purple
                '#A8E6CF',   // Mint Green
                '#546670',   // Soft Orange
                '#BACAD3'    // Emerald Green
            ];
            return backgrounds[index % backgrounds.length];
        }
    },
    mounted() {
        // Initialize AOS if available
        if (window.AOS) {
            window.AOS.init();
        }
    }
}
</script>

<style scoped>
.core-values-section {
    background-color: #f8f9fa;
}

.icon-wrapper {
    width: 70px;
    height: 70px;
    flex-shrink: 0;
}

.hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
}

.ls-wider {
    letter-spacing: 2px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .icon-wrapper {
        width: 60px;
        height: 60px;
    }
}
</style>