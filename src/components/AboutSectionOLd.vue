<template>
    <div class="container mt-5">
        <div class="text-start mb-5">
            <p class="text-muted mb-1 text-uppercase">About</p>
            <h2 class="display-5 text-primary text-uppercase">Know about us</h2>
        </div>
        <div class="row">
            <div class="col-md-7" v-observe :class="imageClass('left')">
                <h2 class="text-start">GROWING RESPONSIBLY</h2>
                <p class="text-start">
                    HOEC's story began in 1983, when the great visionary, the late Shri. H.T. Parekh,
                    foresaw the need for private participation in the Indian Oil & Gas sector. After more
                    than 3 decades of existence, HOEC has now emerged as a fast-growing and
                    independent E&P player in India. HOEC now, through its operations contributes
                    10,000 boe of products everyday to the nation, from 4 of the 7 producing basins in
                    India. We have turned around our fortunes by adopting a low-cost, fast-track
                    development model with a focus on local content, innovation and sustainable
                    practices. We aim to create long-term stakeholder value while ensuring that we
                    'Grow Responsibly'.
                </p>
                <router-link to="/about-us"
                    class="d-flex justify-content-start align-items-center  text-dark fw-bold text-decoration-none text-uppercase">
                    More About <i class="bi bi-arrow-right ms-2"></i>
                </router-link>
            </div>
            <div class="col-md-5" v-observe :class="imageClass('right')">
                <img src="img/about.png" alt="Growing Responsibly" class="img-fluid">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            values: {
                'Instil INTEGRITY': 0,
                'Practice SUSTAINABILITY': 60,
                'Promote SAFETY': 120,
                'Foster INNOVATION': 180,
                'Plan AHEAD': 240,
                'Support SOCIETY': 300
            }
        }
    }, methods: {
        imageClass(position) {
            return {
                'before-enter-right': position === 'right',
                'before-enter-left': position === 'left'
            };
        },
        textClass(position) {
            return {
                'before-enter-left': position === 'right',
                'before-enter-right': position === 'left'
            };
        }
    }
}
</script>

<style scoped>
/* .before-enter-left {
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
} */
</style>