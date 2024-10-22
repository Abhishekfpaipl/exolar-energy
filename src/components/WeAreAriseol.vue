<template>
    <div class="container my-5">
        <div class="text-start mb-5">
            <p class="text-muted mb-1 text-uppercase">Ariseol</p>
            <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">what makes us different</h2>
        </div>
        <div class="row justify-content-center align-items-center">
            <div class="col-md-6">
                <p class="text-start mb-5">Renowned across the globe as 'The Specialist in Synthetic Lubricants',
                    Ariseol stands as a beacon of German engineering excellence and innovation. This powerhouse of a
                    company has carved out a unique niche in the highly competitive world of performance products,
                    focusing on the cutting-edge development, meticulous manufacturing, and strategic marketing of
                    state-of-the-art lubricants.</p>
            </div>
            <div class="col-md-6">
                <div class="row g-1">
                    <div class="col-12" v-for="(card, index) in cards" :key="index">
                        <div class="border p-2 d-flex align-items-center gap-3">
                            <i :class="card.icon" class="fs-4 text-start"></i>
                            <span class="text-center fs-5 fw-bold">{{ card.title }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cards: [
                { icon: 'bi bi-star-fill', title: 'Quality' },
                { icon: 'bi bi-lightbulb-fill', title: 'Innovation' },
                { icon: 'bi bi-flag-fill', title: 'Racing' }
            ]
        }
    }
}
</script>
<style lang="">

</style>