<template>
    <div class="container my-5">
        <div class="text-start">
            <p class="text-muted mb-1 text-uppercase">Exolar Energy</p>
            <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Why Go Solar ?</h2>
        </div>
        <div class="row justify-content-center align-items-start">
            <div class="col-md-8 mt-3">
                <p class="text-start fs-5 mb-4">
                    Exolar Energy, a leader in renewable energy solutions, is championing the shift to solar power. As
                    the world moves toward cleaner and more sustainable energy sources, Exolar Energy offers a
                    compelling case for going solar. Harnessing the power of the sun, solar energy provides a reliable,
                    cost-effective, and eco-friendly alternative to traditional power sources.
                </p>

                <div class="row g-1">
                    <div class="col-6" v-for="(advantage, index) in advantages" :key="index">
                        <div class="card p-2 h-100">
                            <div class="d-md-flex align-items-center">
                                <i class="me-3 fs-4 bi bi-check-circle text-success"></i>
                                <p class="mb-0 text-md-start text-center text-capitalize">{{ advantage.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <img src="/img/banner/2.jpg" alt="Engine" class="img-fluid" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurAdvantages',
    data() {
        return {
            advantages: [
                { text: 'fastest growing sector.', },
                { text: 'Clean, green and cheaper .' },
                { text: 'Use your vacant roof space.', },
                { text: 'Roof floor avialable for use .' },
                { text: 'One time investment.', },
                { text: 'Electricity for 25 years or more.', },
                { text: 'Payback in 3-5 years.', },
                { text: 'No more increasing grid tariff.', },
            ]
        }
    }
}
</script>

<style scoped></style>