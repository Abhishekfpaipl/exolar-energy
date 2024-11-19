<template>
  <div class="" style="padding-top: 64px;">
    <CarouselBanner />
    <div class="my-5">
      <AnimatedText />
      <WhyGoSolar />
    </div>
    <div class="my-5">
      <SolarInstallationSteps />
      <!-- <TestimonialSection /> -->
      <!-- <div class="my-5"> -->
      <TestSection />
      <!-- </div> -->
    </div>
    <div class="my-5">
      <ShortsVideoSection />
    </div>
    <div class="my-5">
      <ReviewSection />
    </div>
    <AboutSection />
    <ContactSection />
    <div class="my-5">
      <TeamSection />
    </div>
    <div class="my-5">
      <FaqSection />
    </div>
    <div class="my-5">
      <NewGallerySection :images="images" />
    </div>
    <!-- <div class="my-5">
      <ThankYou />
    </div> -->
    <div>
      <SolarCalculator/>
    </div>
    <div class="my-5">
      <GoogleReviewSection />
    </div>
  </div>
</template>

<script>
import AnimatedText from '@/components/AnimatedText.vue'
import WhyGoSolar from '@/components/WhyGoSolar.vue'
import SolarInstallationSteps from '@/components/SolarInstallationSteps.vue'
import CarouselBanner from "@/components/CarouselBanner.vue";
import AboutSection from "@/components/AboutSection.vue";
// import TestimonialSection from "@/components/TestimonialSection.vue";
import FaqSection from "@/components/FaqSection.vue";
import ReviewSection from "@/components/ReviewSection.vue";
// import ThankYou from "@/components/ThankYou.vue";
import ShortsVideoSection from "@/components/ShortsVideoSection.vue";
import GoogleReviewSection from "@/components/GoogleReviewSection.vue";
import NewGallerySection from '@/components/NewGallerySection.vue';
import TestSection from '@/components/TestSection.vue';
import SolarCalculator from '@/components/SolarCalculator.vue';

export default {
  name: "HomeView",
  components: {
    AnimatedText,
    WhyGoSolar,
    CarouselBanner,
    SolarInstallationSteps,
    AboutSection,
    // TestimonialSection,
    FaqSection,
    // ThankYou,
    ShortsVideoSection,
    ReviewSection,
    GoogleReviewSection,
    NewGallerySection,
    TestSection,
    SolarCalculator,
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
