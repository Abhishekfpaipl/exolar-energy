<template>
    <div class=" py-5">
        <div class="container-fluid">
            <!-- About Us Header -->
            <div class="row justify-content-center text-center mb-3">
                <div class="col-md-10">
                    <h1 class="fw-bold text-capitalize">Our Award wining <span class=""
                            style="color: var(--bg-primary)">facts</span>
                    </h1>
                    <p class="mt-3">
                        On the back of an illustrious 150-year legacy, CGL is a French lubricants company
                        that enjoys global recognition as 'The specialist in synthetic lubricants'.
                        Among the oldest, most respected lubricant brands in the world, CGL has become
                        synonymous with high-performance motoring.
                    </p>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-md-6 text-start ps-5 py-5" v-observe style="color: var(--bg-secondary)">
                    <div class="row ">
                        <div class="col-md-6" v-for="(counter, index) in counters" :key="index">
                            <h1 class="display-3 fw-bold">{{ counter.number }}+</h1>
                            <p class="fs-4">{{ counter.text }}</p>
                        </div>
                    </div>

                   
                </div>
                <div class="col-md-6 text-end ps-md-5" v-observe>
                    <img src="/img/aboutSection.jpg" alt="" style="width: 100%;">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutUs",
    data() {
        return {
            counters: [
                { number: 6000, text: "Customers" },
                { number: 20, text: "State Presence" },
                { number: 18, text: "MW Capacity" },
                { number: 250, text: "Trusted Partners" },
            ]
        }
    },
    // mounted() {
    //     const image = this.$refs.motorbikeImage;
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     image.classList.add("scale-up");
    //                 }
    //             });
    //         },
    //         { threshold: [0.1] }
    //     );

    //     observer.observe(image);
    // },
    methods: {
        imageClass(position) {
            return {
                'before-enter-right': position === 'right',
                'before-enter-left': position === 'left'
            };
        },
    }
};
</script>

<style scoped>
h1 span.text-danger {
    color: #d0021b;
    /* Red color for the 'US' part of the title */
}

.bg-danger {
    background-color: #d0021b !important;
    /* Ensure a consistent red background */
}

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

.before-enter-left {
    opacity: 0;
    transform: translateX(-80px);
    transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}

.before-enter-right {
    opacity: 0;
    transform: translateX(80px);
    transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}

.enter {
    opacity: 1;
    transform: translateX(0);
}
</style>