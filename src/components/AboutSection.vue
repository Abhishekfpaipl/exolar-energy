<template>
    <div class="award-section">
        <div class="container-fluid px-0">
            <!-- About Us Header -->
            <div class="row justify-content-center text-center mb-3 mx-0">
                <div class="col-md-10">
                    <h1 class="fw-bold text-capitalize">Our Award wining <span class=""
                            style="color: var(--bg-primary)">facts</span>
                    </h1>
                    <p class="mt-3">
                        Exolar Energy is a new age company that provides the combination of efficient economics and
                        sustainability through use of solar energy. Our vision is to enable the world maximise the use
                        of distributed solar energy. Our mission is to have every potential roof solar systems
                        installed. Rooftop solar is most financially beneficial now and we, at Exolar, are at the
                        forefront of the solar revolution throughdistributed solar.
                    </p>
                </div>
            </div>
            <div class="row align-items-stretch mx-0">
                <div class="col-md-6 px-0 stats-section" v-observe style="background-image: url('/img/worldmap.jpg');">
                    <div class="counter-wrapper d-flex flex-column position-absolute top-0 start-0 end-0 bottom-0 p-5"
                        style=" background-color: rgba(35,122,191, 0.8)">
                        <div class="row g-4">
                            <div class="col-6" v-for="(counter, index) in counters" :key="index">
                                <div class="counter-item text-white">
                                    <div class="display-3 fw-bold d-flex gap-1 justify-content-center">
                                        <AutoCounter :data="counter.number" /> +
                                    </div>
                                    <p class="small">{{ counter.text }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <router-link to="/about-us" class="btn btn-warning">Know More About us</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 px-0 image-section" v-observe>
                    <img src="/img/aboutSection.jpg" alt="Rooftop solar panel installation in Delhi by Exolar Energy"
                        class="award-image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AutoCounter from '@/components/AutoCounter.vue'

export default {
    name: "AboutUs",
    components: {
        AutoCounter,
    },
    data() {
        return {
            counters: [
                { number: 800, text: "Satisfied Customers" },
                { number: 20, text: "State Presence" },
                { number: 16, text: "Megawatt Capacity" },
                { number: 250, text: "Trusted Partners" },
            ]
        }
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
.award-section {
    overflow: hidden;
}

.stats-section {
    height: 500px;
    color: var(--bg-secondary);
    background-position: center;
    background-size: cover;
    position: relative;
}

.counter-wrapper {
    /* background-color: rgba(0, 0, 0, 0.8); */
}

.image-section {
    height: 500px;
}

.award-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.counter-item {
    padding: 0.5rem;
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

@media (max-width: 768px) {

    .stats-section,
    .image-section {
        height: 400px;
    }

    .counter-wrapper {
        padding: 1.5rem;
    }

    .counter-item {
        text-align: center;
    }
}

@media (max-width: 576px) {

    .stats-section,
    .image-section {
        height: 350px;
    }

    .counter-wrapper {
        padding: 1rem;
    }
}
</style>