<template>
    <div style="background-color: var(--bg-primary)">
        <div class="container py-5">
            <div class="row align-items-center ">
                <div class="col-md-6">
                    <div class="text-md-start text-center mb-5">
                        <p class="mb-1 text-uppercase text-warning display-5">Watch out</p>
                        <div class="my-4">
                            <AutoTypeDeleteText :texts="services" :typingSpeed="300" :deleteSpeed="150" :delay="500" />
                        </div>
                        <router-link :to="route" class="btn btn-warning w-50 text-uppercase text-dark">see more <i
                                class="bi bi-arrow-right visit"></i></router-link>
                    </div>
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
    </div>
</template>

<script>
import AutoTypeDeleteText from './AutoTypeDeleteText.vue';
export default {
    name: 'NewGallerySection',
    components: {
        AutoTypeDeleteText
    },
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
    data() {
        return {
            services: ['Gallery']
        }
    }
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