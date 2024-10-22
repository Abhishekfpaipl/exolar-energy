<template>
    <div class="container">
        <div class="text-start mb-5">
            <p class="text-muted mb-1 text-uppercase">Check</p>
            <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Ariseol motor oil</h2>
        </div>
        <div class="sticky-nav my-4">
            <div class="d-flex justify-content-center align-items-center p-3 py-2 overflow-x-scroll" id="scroll"
                style="background-color:rgba(255, 0, 0, 0.2); border:1px solid rgba(255, 0, 0, 1) !important;">
                <div v-for="(section, index) in sections" :key="index">
                    <a :href="'#' + section.id" class="nav-link text-dark" @click.prevent="scrollToSection(section.id)"
                        :class="{ active: activeSection === section.id }">
                        {{ section.name }}
                    </a>
                </div>
            </div>
        </div>

        <div class="container">
            <section v-for="(section, index) in sections" :key="index" :id="section.id" class="section"
                style="padding-top:30px">
                <h3 class="p-2 text-center my-4 cutout">
                    <span>{{ section.name }}</span>
                </h3>
                <component :is="section.component" :product="subproduct" v-observe></component>
            </section>
        </div>
    </div>
</template>
<script>
import ProductTableSection from "@/components/ProductTableSection.vue"
import IsoSection from "@/components/IsoSection.vue"
import ProductBenefitSection from "@/components/ProductBenefitSection.vue"
import FacilitiesSection from "@/components/FacilitiesSection.vue"
export default {
    components: {
        ProductTableSection,
        IsoSection,
        ProductBenefitSection,
        FacilitiesSection,
    },
    data() {
        return {
            sections: [
                { id: 'Reports', name: 'Reports', component: 'ProductTableSection' },
                { id: 'ISO', name: 'ISO', component: 'IsoSection' },
                { id: 'Benefits', name: 'Benefits', component: 'ProductBenefitSection' },
                { id: 'Facilities', name: 'Facilities', component: 'FacilitiesSection' },
            ],
            subproduct: {
                name: "Ariseol motor oil",
                image: "ariseol-motor-oil.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel elit id erat dignissim fermentum. Sed vel velit id erat dignissim fermentum. Sed vel velit id erat dignissim fermentum.",
                table: {
                    tableHead: ["#", "Appearance", "Smooth and Homogeneous"],
                    tableData: [
                        { head: 'NLGI Grade', body: '1', },
                        { head: 'Base Oil Type', body: 'Mineral', },
                        { head: 'Base Oil Viscosity ', body: 'Not specified', },
                        { head: 'Thickener Type', body: 'Calcium', },
                        { head: 'Dropping Point', body: '90 min', },
                        { head: 'EP Properties', body: 'No', },
                        { head: 'Operating Temperature', body: '-10 to 60C', },
                    ],
                },
                benefits: [
                    {
                        "title": "Excellent Engine Sludge & Varnish Control",
                        "content": "Provides superior control over sludge and varnish deposits, keeping the engine cleaner for better performance and longer life."
                    },
                    {
                        "title": "Cold Start Optimization",
                        "content": "Ensures better cold start properties, improving engine startup in low-temperature conditions and reducing wear."
                    },
                    {
                        "title": "Superior Wear Protection",
                        "content": "Offers excellent protection against engine wear, ensuring longevity and reducing maintenance needs."
                    },
                    {
                        "title": "Thermal and Oxidation Stability",
                        "content": "Provides excellent thermal and oxidation stability, ideal for heavy-duty applications where extreme heat is a concern."
                    },
                    {
                        "title": "Enhanced Oil and Engine Life",
                        "content": "Enhances both oil and engine life through superior oxidation and wear protection, ensuring smoother performance."
                    },
                    {
                        "title": "Friction Optimization for Wet Clutches",
                        "content": "Possesses special frictional properties required for smooth operation of wet clutches in 4-stroke 2-wheelers."
                    },
                    {
                        "title": "Outstanding Oxidation Stability",
                        "content": "Offers exceptional oxidation stability, ensuring a cleaner engine and extending the oil's life."
                    },
                    {
                        "title": "Minimized Engine Deposits",
                        "content": "Minimizes engine deposits due to excellent sludge and varnish control, keeping the engine components cleaner."
                    },
                    {
                        "title": "Oil Film Strength",
                        "content": "Provides adequate oil film strength to protect the engine under all operating temperatures, ensuring reliable performance."
                    },
                    {
                        "title": "High Detergency for Cleaner Engine",
                        "content": "Ensures a high level of detergency, keeping the engine clean from harmful deposits and debris."
                    },
                    {
                        "title": "High Thermal Stability",
                        "content": "Minimizes oil degradation with high thermal stability, especially in extreme operating conditions."
                    },
                    {
                        "title": "Shear Stability for Viscosity Retention",
                        "content": "Provides high shear stability to retain oil viscosity, ensuring consistent protection over time."
                    },
                    {
                        "title": "Longer Drain Interval",
                        "content": "Allows for extended drain intervals, reducing the need for frequent oil changes and lowering maintenance costs."
                    },
                    {
                        "title": "Fuel Efficiency Enhancement",
                        "content": "Improves fuel efficiency by reducing petrol consumption, benefiting both performance and cost-effectiveness."
                    },
                    {
                        "title": "All-Season Compatibility",
                        "content": "Suitable for use in all seasons, helping to reduce oil consumption and providing consistent protection."
                    },
                    {
                        "title": "Extended Oil Life",
                        "content": "Extends oil life through excellent oxidation and nitration resistance, reducing the frequency of oil changes."
                    },
                    {
                        "title": "Optimized Ash Content",
                        "content": "Prolongs the life of valves and spark plugs by optimizing ash content, ensuring smooth engine operation."
                    },
                    {
                        "title": "Piston and Engine Cleanliness",
                        "content": "Keeps pistons and engines clean, ensuring smoother engine operation and increased performance."
                    },
                    {
                        "title": "Catalytic Exhaust Compatibility",
                        "content": "Compatible with catalytic exhaust systems, ensuring efficient operation in vehicles with such systems."
                    },
                    {
                        "title": "Smooth Clutch Performance",
                        "content": "Ensures smooth clutch operation, allowing for better power transfer to the wheels."
                    },
                    {
                        "title": "Fuel Consumption Reduction",
                        "content": "Potentially reduces fuel consumption by optimizing oil viscosity, benefiting fuel efficiency."
                    },
                    {
                        "title": "Cleaner Engine at Extreme Conditions",
                        "content": "Keeps engine components clean from harmful deposits, even under extreme operating conditions."
                    },
                    {
                        "title": "Reduced Maintenance and Operating Costs",
                        "content": "Reduces maintenance and operating costs by providing excellent wear protection to engine parts and gears."
                    }
                ]

            }
        }
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        isActive(id) {
            return this.$route.hash === "#" + id;
        },
        scrollToSection(id) {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        },
        handleScroll() {
            const scrollPosition = window.scrollY;
            this.sections.forEach(section => {
                const el = document.getElementById(section.id);
                if (el && scrollPosition >= el.offsetTop - 200) {
                    this.activeSection = section.id;
                }
            });
        },
    }
}
</script>
<style>
.sticky-nav {
    position: sticky;
    top: 67px !important;
    z-index: 2;
    background-color: white;
}
</style>