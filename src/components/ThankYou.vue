<template>
  <div class="text-container py-5">
    <h2 :data-text="text" class="">{{ text }}</h2>
  </div>
  <!-- <button class="btn btn-warning my-5 fs-3 text-capitalize" data-bs-toggle="modal"
    data-bs-target="#exampleModal">Contact Us Today for More Information<i class="bi bi-arrow-right visit"></i></button> -->
    
  <router-link to="/contact-us" class="btn btn-success my-5 fs-3 text-capitalize">Contact Us Today for More Information<i class="bi bi-arrow-right visit"></i></router-link>
  
  <div class="wh-60 rounded position-fixed p-2 bg-warning" data-bs-toggle="modal" data-bs-target="#exampleModal"
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