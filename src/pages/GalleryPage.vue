<template>
    <div style="padding-top: 60px;">
        <SectionTopBanner />
        <div class="container my-5">
            <div class="row g-1" ref="lightGallery" id="scroll">
                <a :href="image" class="col-md-4" v-for="(image, index) in images" :key="index">
                    <img :alt="'img' + (index + 1)" :src="image" class="card-img-top" />
                </a>
            </div>
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
import SectionTopBanner from "@/components/SectionTopBanner.vue";

export default {
    name: 'NewGallerySection',
    components: {
        SectionTopBanner,
    },
    data() {
        return {
            images: [
                "/img/gallery/7.jpeg",
                "/img/gallery/8.jpeg",
                "/img/gallery/9.jpeg",
                "/img/gallery/10.jpeg",
                "/img/gallery/11.jpeg",
                "/img/gallery/12.jpeg",
                "/img/gallery/13.jpeg",
                "/img/gallery/14.jpeg",
                "/img/gallery/15.jpeg",
                "/img/gallery/1.jpg",
                "/img/gallery/2.jpg",
                "/img/gallery/3.jpg",
                "/img/gallery/4.jpg",
                "/img/gallery/5.jpg",
                "/img/gallery/6.jpg",
            ],
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
    height: 250px;
    min-width: 100px;
    object-fit: cover;
    object-position: top center;
}
</style>