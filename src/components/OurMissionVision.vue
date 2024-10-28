<template>
    <div class="container my-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
            <div class="col" v-for="(item, index) in items" :key="index">
                <a href="#" class="text-decoration-none card rounded-0 p-2 h-100 text-white"
                    style="background-color: var(--bg-primary)">
                    <i class="bi primary-text display-1" :class="item.icon"></i>
                    <p class="fs-1">{{ item.title }}</p>
                    <p class="small">{{ item.text }}
                    </p>

                </a>
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
};
</script>