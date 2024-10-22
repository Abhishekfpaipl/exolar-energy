<template>
    <div class="container my-5">
        <div class="text-start">
            <p class="text-muted mb-1 text-uppercase">Ariseol</p>
            <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">why choose us?</h2>
        </div>
        <div class="row justify-content-center align-items-start">
            <div class="col-md-6 mt-3">
                <p class="text-start fs-5 mb-4">
                    Ariseol, the renowned powerhouse in industrial lubricants, is gearing up for a game-changing
                    expansion. After establishing itself as a dominant force in the industrial sector, the company is
                    now setting its sights on conquering new territory: the automotive market.
                    With decades of expertise in formulating high-performance lubricants for demanding industrial
                    applications, Ariseol is poised to revolutionize the world of motor oils. As Ariseol prepares to
                    unveil its state-of-the-art
                    motor oils, the automotive industry stands on the brink of a lubricant revolution.
                </p>
                <div class="row g-1">
                    <div class="col-12" v-for="(advantage, index) in advantages" :key="index">
                        <div class="d-flex align-items-center">
                            <i class="me-3 fs-4" :class="advantage.icon"></i>
                            <span>{{ advantage.text }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <img src="/img/engine.png" alt="Engine" class="img-fluid" />
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
                { icon: 'bi bi-shield-check', text: 'Protect Engine Wear & Tear' },
                { icon: 'bi-gear-wide-connected', text: 'Unique Friction Control Formula' },
                { icon: 'bi-cloud-minus', text: 'Minimize Engine Carbon deposits' },
                { icon: 'bi-lightning-charge', text: 'It Ensures Maximum power' }
            ]
        }
    }
}
</script>

<style scoped></style>