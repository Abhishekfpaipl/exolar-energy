<template>
    <div class="container mt-5">
        <div class="text-start mb-5">
            <p class="text-muted mb-1 text-uppercase">Exolar Energy</p>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="display-5  text-uppercase" style="color: var(--bg-primary);">Customer Reviews</h2>
                <router-link to="/">
                    <i class="bi bi-arrow-right fs-3"></i>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div v-for="(review, index) in reviews" :key="index" class="col-md-6 col-lg-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <!-- <i class="bi bi-google text-primary"></i> -->
                        <div class="d-flex align-items-center mb-2">
                            <i class="bi bi-person-circle me-2" style="font-size: 1.5rem;"></i>
                            <h5 class="card-title m-0">{{ review.authorName }}</h5>
                        </div>
                        <p class="text-start">{{ review.text }}</p>
                        <div class="d-flex align-items-center mb-2">
                            <span class="me-2 text-warning">
                                <i v-for="n in review.rating" :key="n" class="bi bi-star-fill"></i>
                                <i v-for="n in 5 - review.rating" :key="`empty-${n}`" class="bi bi-star"></i>
                            </span>
                            <span class="text-muted">{{ review.date }}</span>
                        </div>
                        <div class="text-end">
                            <img src="/img/google.png" alt="google" style="width: 35px;">
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
            reviews: [
                {
                    authorName: 'Ravi',
                    rating: 5,
                    date: 'July, 2024',
                    text: 'Very good service.',
                },
                {
                    authorName: 'ashi singh',
                    rating: 5,
                    date: 'April , 2024',
                    text: 'Best service in delhi…',
                },
                {
                    authorName: 'Vicky Kumar',
                    rating: 5,
                    date: 'July , 2024',
                    text: 'best ever',
                },
                // {
                //     authorName: 'Saqlain Khan',
                //     rating: 1,
                //     date: 'July , 2024',
                //     text: 'Average',
                // },
                // Add more review objects here
            ],
        };
    },
};
</script>

<style scoped>
.card-title {
    font-size: 1.1rem;
}
</style>