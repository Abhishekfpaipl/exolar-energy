<template>
    <div class="container my-5">
        <div class="text-start mb-5">
            <p class="text-muted mb-1 text-uppercase">Exolar Energy</p>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">{{ title }}</h2>
                <router-link :to="route" style="color: var(--bg-primary);"
                    class="text-decoration-none text-uppercase">see more <i class="bi bi-arrow-right"></i></router-link>
            </div>
        </div>
        <div class="row align-items-center ">
            <div class="col-md-6">
                <img src="/img/gallery.jpg" class="w-100" alt="">
            </div>
            <div class="col-md-6 mt-5 mt-md-0">
                <div id="carouselGalleryAutoplaying" class="carousel slide mb-4" data-bs-ride="carousel"
                    data-bs-interval="5000">
                    <div class="carousel-inner">
                        <div v-for="(image, index) in images" :key="index"
                            :class="['carousel-item', { active: index === 0 }]">
                            <div class="d-md-flex justify-content-center align-items-center d-none">
                                <img :src="image" class="d-block w-75" alt="Carousel Image" style="width: 100%;" />
                            </div>
                            <img :src="image" class="d-block d-md-none" alt="Carousel Image" style="width: 100%;" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselGalleryAutoplaying"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselGalleryAutoplaying"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </div>


    </div>
</template>

<script>

export default {
    name: 'NewGallerySection',
    props: {
        images: {
            type: Array,
            required: true,
        },
        title: {
            type: String,
            default: 'Gallery',
        },
        route: {
            type: String,
            default: '/gallery',
        }
    },
};
</script>

<style scoped>
.card-img-top {
    height: 150px;
    min-width: 100px;
    object-fit: cover;
    object-position: top center;
}
</style>