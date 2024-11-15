<template>
    <!-- <div>
        <div ref="lightGallery" class="gallery-container">
            <a v-for="(image, index) in images" :key="index" :href="image.src">
          <img :src="image.src" :alt="image.alt" class="gallery-thumbnail" />
        </a> 
            <a href="/img/gallery/1.jpeg">
                <img src="/img/gallery/1.jpeg" alt="image 1" class="gallery-thumbnail" />
            </a>
        </div>
    </div> -->
    <div class="container my-5">
        <div class="text-start">
            <p class="text-muted mb-1 text-uppercase">Dental Solutions</p>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">{{ title }}</h2>
                <router-link :to="route" style="color: var(--bg-primary);"
                    class="text-decoration-none text-uppercase">see more <i class="bi bi-arrow-right"></i></router-link>
            </div>
        </div>
        <p class="display-5 mb-5"></p>
        <div class="d-flex gap-2 justify-content-start  overflow-x-scroll" ref="lightGallery" id="scroll">
            <a :href="image" class="" v-for="(image, index) in images" :key="index">
                <img :alt="'img' + (index + 1)" :src="image" class="card-img-top" />
            </a>
        </div>
    </div>
</template>

<script>
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

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
    mounted() {
        this.initGallery();
    },
    beforeUnmount() {
        if (this.lightGalleryInstance) {
            this.lightGalleryInstance.destroy();
        }
    },
    methods: {
        initGallery() {
            this.lightGalleryInstance = lightGallery(this.$refs.lightGallery, {
                plugins: [lgThumbnail, lgZoom],
                speed: 500,
                thumbnail: true,
                zoom: true,
            });
        },
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