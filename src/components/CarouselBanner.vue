<template>
  <div>
    <router-link to="/products" class="text-decoration-none text-dark">
      <img src="/img/banner/desktopBanner.jpg" class="d-md-block d-none w-100" alt="Banner">
      <img src="/img/banner/mobileBanner.jpg" class="d-md-none d-block w-100" alt="Banner">
    </router-link>
  </div>

</template>

<script>
export default {
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
