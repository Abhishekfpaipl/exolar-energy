<template>
  <!-- <div class="text-container py-5">
    <h2 :data-text="text" class="">{{ text }}</h2>
  </div> -->
  <!-- <button class="btn btn-warning my-5 fs-3 text-capitalize" data-bs-toggle="modal"
    data-bs-target="#siteVisitModal">Contact Us Today for More Information<i class="bi bi-arrow-right visit"></i></button> -->

  <!-- <router-link to="/contact-us" class="btn btn-success fs-3 text-capitalize">Contact Us Today for More Information<i
      class="bi bi-arrow-right visit"></i></router-link> -->
  <div class="container-fluid shadow" style="background-color: var(--bg-light ) ;">
    <router-link to="/contact-us" class="text-decoration-none text-dark">
      <div class="row align-items-center py-4">
        <div class="col-md-6">
          <img src="/img/contactFooter.png" alt="subscribe newsletter" style="width: 200px; max-width: 90%;">
        </div>
        <div class="col-md-6 mb-4">
          <p class="display-5 text-uppercase fw-bold">Have some more query</p>
          <p class="text-center text-uppercase fs-3">Kindly<br><span class="fw-bold text-warning display-1"></span></p>
          <button class="btn btn-warning w-50 fs-3">Contact Us <i class="bi bi-arrow-right visit"></i></button>
        </div>
      </div>
    </router-link>
  </div>
  <div class="wh-60 rounded position-fixed p-2 bg-warning" data-bs-toggle="modal" data-bs-target="#siteVisitModal"
    style="bottom: 20px; right: 5px;z-index: 10;">
    <img src="/img/enquiry.svg" alt="Rooftop solar panel installation in Delhi by Exolar Energy" width="30" height="30">
  </div>
  <FaqFormSection />

</template>

<script>

import FaqFormSection from '@/components/FaqFormSection.vue'
export default {
  name: 'CreativeTextAnimation',
  components: {
    FaqFormSection,
  },
  data() {
    return {
      text: 'Exolar.Energy'
    };
  }
};
</script>

<style scoped>
.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-primary);
  padding: 0 10px;
}

h2 {
  position: relative;
  color: #252839;
  -webkit-text-stroke: 0.3vw var(--bg-secondary);
  text-transform: uppercase;
  font-size: 8vw;
}

/* Adjust font size for larger screens */
@media (min-width: 768px) {
  h2 {
    font-size: 8vw;
  }
}

@media (min-width: 1024px) {
  h2 {
    font-size: 6vw;
  }
}

h2::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  -webkit-text-stroke: 0vw var(--bg-primary);
  border-right: 2px solid var(--bg-primary);
  overflow: hidden;
  animation: animate 6s linear infinite;
}

@keyframes animate {

  0%,
  10%,
  100% {
    width: 0;
  }

  70%,
  90% {
    width: 100%;
  }
}
</style>