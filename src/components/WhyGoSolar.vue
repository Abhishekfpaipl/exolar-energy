<template>
    <div class="py-5" style="background-color:#f3f8f3 !important ">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-4">
                    <img ref="solarPanel" src="/img/banner/2.jpg"
                        alt="Rooftop solar panel installation in Delhi by Exolar Energy" class="img-fluid scale-0" width="100%" height="auto">
                </div>
                <div class="col-md-8 mt-5 mt-md-0">
                    <div class="text-center">
                        <p class="text-muted mb-1 text-uppercase">Exolar Energy</p>
                        <h2 class="display-5 text-uppercase" style="color: var(--bg-third);">Why Go Solar ?</h2>
                    </div>
                    <section class="d-flex justify-content-center align-items-center my-3">
                        <div class="position-relative w-100">
                            <h2 class="rotatingText-adjective fw-bold" style="color: var(--bg-primary);"
                                :key="currentPhrase">{{
                                    phrases[currentIndex] }}</h2>
                        </div>
                    </section>
                    <div class="pt-5">
                        <button class="btn mt-5 fs-4 text-white" data-bs-toggle="modal" data-bs-target="#exampleModal"
                            style="background-color:var(--bg-third);">Get Your Free Quote</button>
                    </div>
                </div>
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
        }, 1000);

        const image = this.$refs.solarPanel;
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
    beforeUnmount() {
        // Clear interval on component unmount
        clearInterval(this.intervalId);
    },
};
</script>

<style scoped>
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