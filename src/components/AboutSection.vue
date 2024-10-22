<template>
    <div class="about-us-section py-5">
        <div class="container-fluid">
            <!-- About Us Header -->
            <div class="row justify-content-center text-center mb-3">
                <div class="col-md-10">
                    <h1 class="fw-bold">ABOUT <span class="" style="color: var(--bg-primary)">US</span></h1>
                    <p class="mt-3">
                        On the back of an illustrious 150-year legacy, CGL is a French lubricants company
                        that enjoys global recognition as 'The specialist in synthetic lubricants'.
                        Among the oldest, most respected lubricant brands in the world, CGL has become
                        synonymous with high-performance motoring.
                    </p>
                </div>
            </div>
            <div class="row align-items-center">
                <!-- <div class="col-md-5 text-start ps-5 bg-danger text-white py-5" v-observe :class="imageClass('left')"> -->
                <div class="col-md-5 text-start ps-5 text-white py-5" style="background-color: var(--bg-primary)"
                    v-observe>
                    <div class="d-flex gap-2 align-items-center">
                        <h1 class="display-3 fw-bold">25+</h1>
                        <p class="h4 display-3">Experience</p>
                    </div>
                    <div class="d-flex gap-2 align-items-center">
                        <h1 class="display-3 fw-bold">100+</h1>
                        <p class="h4 display-3">Employees</p>
                    </div>
                    <div class="d-flex gap-2 align-items-center">
                        <h1 class="display-3 fw-bold">250+</h1>
                        <p class="h4 display-3">Dealerships</p>
                    </div>
                </div>
                <div class="col-md-2 text-center  ">
                    <img ref="motorbikeImage" src="/img/bike.png" alt="Motorbike" class="img-fluid scale-0" />
                </div>
                <!-- <div class="col-md-5 text-start" v-observe :class="imageClass('right')"> -->
                <div class="col-md-5 text-end ps-md-5" v-observe>
                    <p class="text-ellipsis5">
                        CLG Oil India Private Limited embarked on its journey over two and a half decades ago, in 2000,
                        making its mark by introducing high-quality greases for both automotive and industrial
                        applications. These products are marketed under various leading brands, earning the company a
                        strong reputation in the industry. Over the years, CLG Oil has grown into one of the foremost
                        grease manufacturers in India, with a production capacity ranging between 2,200 to 2,700 MT per
                        month. This impressive output meets more than 15-20% of India's demand for premium greases,
                        underscoring the company’s pivotal role in the market. In addition to greases, CLG Oil India
                        Private Limited has diversified its product range to Lubricants and oils also, such as engine
                        oils and industrial oils, catering to the automotive and industrial sectors both within India
                        and internationally.
                    </p>
                    <router-link to="/about-us" class="btn text-white"
                        style="background-color: var(--bg-primary)">Read More</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutUs",
    mounted() {
        const image = this.$refs.motorbikeImage;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        image.classList.add("scale-up");
                    }
                });
            },
            { threshold: [0.1] }
        );

        observer.observe(image);
    },
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
.about-us-section {
    background-color: #f4f4f4;
}

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