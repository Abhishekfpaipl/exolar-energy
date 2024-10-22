<template> 
        <div class="container my-5 text-start">
            <div class="row border my-2" v-for="(benefit, index) in benefits" :key=index>
                <div class="col-12 d-flex align-items-center bg-light p-2 col-md-4">{{ benefit.title }}</div>
                <div class="col-12 d-flex align-items-center col-md-8 p-2">{{ benefit.content }}</div>
            </div>
        </div> 
    <!-- <div v-else class="container mt-4 text-center">
        <h5>No benefits provided for this product.</h5>
    </div> -->
</template>

<script>
export default {
    name: 'ProductBenefitSection',
    // props: {
    //     product: {
    //         type: Object,
    //         required: true,
    //     }
    // },
    data() {
        return {
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
}
</script>