<template>
  <div>
    <!-- <router-link to="/products" class="text-decoration-none text-dark">
      <img src="/img/banner/banner.jpg" class="d-md-block d-none w-100"
        alt="Rooftop solar panel installation in Delhi by Exolar Energy">
      <img src="/img/banner/mobileBanner.jpg" class="d-md-none d-block w-100"
        alt="Rooftop solar panel installation in Delhi by Exolar Energy">
    </router-link> -->

    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(banner, index) in banners" :key="index" :class="{ 'active': index === 0 }"
          data-bs-interval="3000">
          <img :src="banner.desktop" class="d-md-block d-none h-100"
            alt="Rooftop solar panel installation in Delhi by Exolar Energy" height="auto" width="100%">
          <img :src="banner.mobile" class="d-block d-md-none h-100"
            alt="Rooftop solar panel installation in Delhi by Exolar Energy" height="auto" width="100%">
        </div>
        <!-- <div class="carousel-item" data-bs-interval="2000">
          <img src="/img/banner/banner.jpg" class="d-block w-100"
            alt="Rooftop solar panel installation in Delhi by Exolar Energy">
        </div> -->
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      banners: [
        { desktop: "/img/bannerNew/1.jpg", mobile: "/img/bannerNew/mob1.jpg", },
        { desktop: "/img/bannerNew/2.jpg", mobile: "/img/bannerNew/mob2.jpg", },
        { desktop: "/img/bannerNew/3.jpg", mobile: "/img/bannerNew/mob3.jpg", },
        { desktop: "/img/bannerNew/4.jpg", mobile: "/img/bannerNew/mob4.jpg", },
        { desktop: "/img/bannerNew/5.jpg", mobile: "/img/bannerNew/mob5.jpg", },
      ]
    }
  }
};
</script>

<style scoped>
.card {
  position: relative;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 0, 0.5);
  /* opacity: 1; */
}

.card-title,
.card-text {
  position: relative;
  /* Make sure text is above the overlay */
  z-index: 1;
}

.card:hover .card-img {
  transform: scale(1.05);
}
</style>
