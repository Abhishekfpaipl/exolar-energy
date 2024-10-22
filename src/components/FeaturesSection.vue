<template>
    <div class="container my-5">
        <div class="text-start mb-5">
            <p class="text-muted mb-1 text-uppercase">exolar energy</p>
            <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Why Choose us</h2>
        </div>
        <div class="row row-cols-2 row-cols-md-3 g-3">
            <div v-for="(feature, index) in features" :key="index" class="col mb-4" v-observe>
                <div class="card h-100 rounded-0 shadow p-3 px-4" style="background-color: var(--bg-primary);">
                    <div class="rounded p-1"
                        style="width:60px; height:60px; margin-top:-40px; background-color: var(--bg-secondary);">
                        <img :src="feature.image" alt="" style="width: 100%;height: 100%;filter: invert(1);">
                    </div>
                    <p class="mt-3 text-capitalize text-start fw-bold text-white">{{ feature.title }}</p>
                    <p class="smaller text-start text-white">{{ feature.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            features: [
                {
                    "image": "/img/why-choose/credit-card-icon.png",
                    "title": "Credit Card",
                    "description": "Secure and convenient payment options available via credit card."
                },
                {
                    "image": "/img/why-choose/customer-service-icon.png",
                    "title": "Customer Service",
                    "description": "Dedicated customer support to assist you at every step."
                },
                {
                    "image": "/img/why-choose/end-to-end-delivery.png",
                    "title": "End to End Delivery",
                    "description": "Seamless delivery service from start to finish, ensuring timely arrival."
                },
                {
                    "image": "/img/why-choose/quick-install.png",
                    "title": "Quick Install",
                    "description": "Fast and efficient installation for minimal disruption and downtime."
                },
                {
                    "image": "/img/why-choose/survey-icon.png",
                    "title": "Survey",
                    "description": "Comprehensive surveys to ensure accurate planning and execution."
                },
                {
                    "image": "/img/why-choose/trained-technicians.png",
                    "title": "Trained Technicians",
                    "description": "Expert technicians providing professional and reliable services."
                }
            ]


        }
    },
}
</script>