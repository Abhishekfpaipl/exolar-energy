<template>
    <div class="container py-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div v-for="(item, index) in items" :key="index" class="col" data-aos="fade-up"
                :data-aos-delay="index * 100">
                <div class="card h-100 border-0 shadow-lg transform-hover transition-all rounded-4 overflow-hidden"
                    :class="getCardClass(index)">
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
                    icon: "bi-sun",
                    title: "Our Mission",
                    text: "Our mission is to accelerate the transition to clean energy by delivering reliable and affordable solar solutions, empowering individuals, businesses, and communities to reduce their carbon footprint and embrace a sustainable future."
                },
                {
                    icon: "bi-globe",
                    title: "Our Vision",
                    text: "Our vision is to be a global leader in renewable energy, driving positive environmental impact and enabling a world where clean, sustainable energy is accessible to all, creating a healthier planet for future generations."
                },
                {
                    icon: "bi-tree",
                    title: "Our Values",
                    text: "Our values are rooted in innovation, integrity, and environmental responsibility, as we strive to deliver high-quality solar solutions that respect the earth and contribute to a greener, cleaner world."
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