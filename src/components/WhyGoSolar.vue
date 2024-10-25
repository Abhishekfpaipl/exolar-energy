<template>
    <div class="container">
        <div class="text-start">
            <p class="text-muted mb-1 text-uppercase">Exolar Energy</p>
            <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Why Go Solar ?</h2>
        </div>
        <div class="row justify-content-center align-items-center">
            <div class="col-md-4">
                <img src="/img/banner/2.jpg" alt="Engine" class="img-fluid" />
            </div>
            <div class="col-md-8">
                <p class="text-start fs-5 mb-4 mt-5 mt-md-0">
                    Exolar Energy, a leader in renewable energy solutions, is championing the shift to solar power. As
                    the world moves toward cleaner and more sustainable energy sources, Exolar Energy offers a
                    compelling case for going solar. Harnessing the power of the sun, solar energy provides a reliable,
                    cost-effective, and eco-friendly alternative to traditional power sources.
                </p>
                <section class="d-flex justify-content-center align-items-center my-3">
                    <div class="position-relative w-100">
                        <p class="">We offer&hellip;</p>
                        <h2 class="rotatingText-adjective" :key="currentPhrase">{{ phrases[currentIndex] }}</h2>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhyGoSolar',
    data() {
        return {
            phrases: [
                'fastest growing sector.',
                'Clean, green and cheaper .',
                'Use your vacant roof space.',
                'Roof floor avialable for use .',
                'One time investment.',
                'Electricity for 25 years or more.',
                'Payback in 3-5 years.',
                'No more increasing grid tariff.',
            ],
            currentIndex: 0,
            intervalId: null,
        };
    },
    computed: {
        currentPhrase() {
            return this.phrases[this.currentIndex];
        },
    },
    mounted() {
        // Set interval to cycle through phrases every 2 seconds (or desired duration)
        this.intervalId = setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
        }, 2000);
    },
    beforeUnmount() {
        // Clear interval on component unmount
        clearInterval(this.intervalId);
    },
};
</script>

<style scoped>
.rotatingText-adjective {
    left: 0;
    margin-top: 30px;
    opacity: 0;
    position: absolute;
    right: 0;
    text-align: center;
    text-transform: uppercase;
    top: 0;
    animation: rotate-text-up 1.5s ease-in-out forwards;
}

@keyframes rotate-text-up {
    0% {
        transform: translate3d(0, 80px, 0);
        opacity: 0;
    }

    20%,
    80% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }

    100% {
        transform: translate3d(0, -40px, 0);
        opacity: 0;
    }
}
</style>