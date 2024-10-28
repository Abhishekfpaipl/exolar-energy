<template>
    <div>
        <div class="container pt-4">
            <div class="text-start mb-5">
                <p class="text-muted mb-1 text-uppercase">Check</p>
                <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Our Core Values</h2>
            </div>
            <p class="text-start container">
                One thing that we've tried to keep consistent through all these years is our core set of values and
                beliefs.
                They have helped us get to where we are today, and they guide us as we grow. We inculcate these
                values
                in
                everything we do - from the littlest of things to the biggest of decisions.
            </p>
            <div class="p-2 row">
                <div v-for="(data, index) in datas" :key="index" class="col-12 col-md-6 g-3">
                    <div class="d-md-flex align-items-center p-2"
                        style=" min-height: 120px; border: 1px solid var(--bg-primary);">
                        <i :class="data.icon" class="fs-2 mx-3" style="color: var(--bg-primary)"></i>
                        <div class=" ms-2 text-md-start">
                            <span class="fw-bold">{{ data.heading }}</span>
                            <p class="mb-0">{{ data.text }}</p>
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
                    icon: 'bi bi-globe', // Globe icon for global reach
                    heading: 'Global Reach',
                    text: 'With projects across various regions, we are committed to making solar energy accessible and beneficial worldwide.'
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
}

</script>
<style lang="">

</style>