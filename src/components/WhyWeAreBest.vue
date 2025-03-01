<template>
    <div class="why-we-are-best py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 mb-4 mb-md-0">
                    <div class="pe-md-4">
                        <div class="text-center text-md-start mb-5">
                            <h2 class="display-5 text-capitalize fw-bold" style="color: var(--bg-primary);">
                                Why We Are The Best
                            </h2>
                            <div class="separator-line bg-primary mb-4"></div>
                        </div>

                        <div class="highlights-list">
                            <div v-for="(item, index) in highlights" :key="index"
                                class="highlight-item mb-4 p-3 rounded shadow-sm" data-aos="fade-up"
                                :data-aos-delay="index * 100">
                                <div class="d-flex align-items-center">
                                    <div class="icon-wrapper me-3 rounded-circle d-flex align-items-center justify-content-center"
                                        :style="{ backgroundColor: getIconBackground(index) }">
                                        <i :class="getIconClass(index)" class="text-white"></i>
                                    </div>
                                    <div>
                                        <h5 class="mb-1 fw-bold">{{ item.title }}</h5>
                                        <p class="text-muted mb-0">{{ item.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="image-container position-relative">
                        <img src="/img/About_Img.jpg" alt="Rooftop solar panel installation in Delhi by Exolar Energy"
                            class="img-fluid w-100 rounded-4 shadow-lg" data-aos="zoom-in">
                        <div class="image-overlay position-absolute top-0 start-0 w-100 h-100 rounded-4"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhyWeAreBest',
    data() {
        return {
            highlights: [
                {
                    title: "Exclusive Brands Tie-up",
                    description: "Collaborating with top-tier brands for premium product offerings."
                },
                {
                    title: "Extended Quality Assurance",
                    description: "  Delivering products and services that exceed industry standards."
                },
                {
                    title: "Expert In-House Design",
                    description: "Innovative, tailor-made solutions crafted by skilled professionals."
                },
                {
                    title: "Excellent Installation Work",
                    description: "Precision and perfection in every project execution."
                },
                {
                    title: "Exceptional After-Sales Support ",
                    description: "Ensuring long-term customer satisfaction with dedicated service."
                }
            ]
        };
    },
    methods: {
        getIconBackground(index) {
            const backgrounds = [
                '#FF6B6B',   // Coral Red
                '#4ECDC4',   // Turquoise
                '#45B7D1',   // Sky Blue
                '#FDCB6E',   // Sunflower Yellow
                '#6C5CE7'    // Purple
            ];
            return backgrounds[index % backgrounds.length];
        },
        getIconClass(index) {
            const icons = [
                'bi bi-people-fill',
                'bi bi-gear-fill',
                'bi bi-laptop-fill',
                'bi bi-puzzle-fill',
                'bi bi-graph-up-arrow'
            ];
            return icons[index % icons.length];
        }
    },
    mounted() {
        // Initialize AOS if available
        if (window.AOS) {
            window.AOS.init();
        }
    }
};
</script>

<style scoped>
.why-we-are-best {
    background-color: #f8f9fa;
}

.separator-line {
    height: 4px;
    width: 100px;
    margin-left: 0;
}

.highlight-item {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: white;
}

.highlight-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.icon-wrapper {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
}

.image-container {
    overflow: hidden;
}

.image-overlay {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
    mix-blend-mode: multiply;
}

@media (max-width: 768px) {
    .icon-wrapper {
        width: 50px;
        height: 50px;
    }

    .highlights-list {
        padding: 0 15px;
    }
}
</style>