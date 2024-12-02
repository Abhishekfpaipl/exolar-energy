<template>
    <div class="banner-container">
        <img :src="desktopImg" alt="Product Banner" class="banner-image d-md-block d-none">
        <img :src="mobileImage" alt="Product Banner" class="banner-image d-md-none">
        <!-- <div class="overlay">
            <h1 class="display-1 banner-title">{{ pageName }}</h1>
        </div> -->
    </div>
</template>

<script>
export default {
    props: {
        desktopImg: {
            type: String,
            required: true
        },
        mobileImage: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            pageName: ''
        };
    },
    mounted() {
        let pageName = this.$route.path.split('/').pop();
        this.pageName = pageName.replace(/-/g, ' ');
    },
};
</script>

<style scoped>
.banner-container {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
}

.banner-title {
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    /* Improved readability */
}
</style>