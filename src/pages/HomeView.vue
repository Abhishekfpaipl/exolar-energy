<template>
  <div class="" style="padding-top: 60px;">
    <CarouselBanner />
    <div class="">
      <AnimatedText />
      <WhyGoSolar />
    </div>
    <div class="my-5">
      <WhyChooseUs />
    </div>
    <div class="my-5">
      <SolarInstallationSteps />
    </div>
    <div class="my-5">
      <BlogSection />
    </div>
    <!-- <div class="my-5">
      <ShortsVideoSection />
    </div> -->
    <div class="my-5">
      <GoogleReviewSection />
    </div>
    <div class="mt-5 pt-5">
      <AboutSection />
    </div> 
    <!-- <div class="my-5">
      <NewGallerySection :images="images" />
    </div> -->

    <div class="">
      <FaqSection />
    </div>

  </div>
</template>

<script>
import CarouselBanner from "@/components/CarouselBanner.vue";
// import AnimatedText from '@/components/AnimatedText.vue'
import WhyGoSolar from '@/components/WhyGoSolar.vue'
import SolarInstallationSteps from '@/components/SolarInstallationSteps.vue'
import WhyChooseUs from '@/components/WhyChooseUs.vue';
import AboutSection from "@/components/AboutSection.vue";
// import TestimonialSection from "@/components/TestimonialSection.vue";
import FaqSection from "@/components/FaqSection.vue";
// import ShortsVideoSection from "@/components/ShortsVideoSection.vue";
import GoogleReviewSection from "@/components/GoogleReviewSection.vue";
// import NewGallerySection from '@/components/NewGallerySection.vue'; 
import BlogSection from '@/components/BlogSection.vue';  

export default {
  name: "HomeView",
  components: {
    // AnimatedText,
    WhyGoSolar,
    CarouselBanner,
    SolarInstallationSteps,
    AboutSection,
    // TestimonialSection,
    FaqSection,
    // ShortsVideoSection,
    GoogleReviewSection,
    // NewGallerySection,
    WhyChooseUs,
    BlogSection, 
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
    };
  }
};
</script>
