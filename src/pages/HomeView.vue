<template>
  <div class="" style="padding-top: 64px;">
    <CarouselBanner />
    <div class="my-5">
      <AnimatedText />
      <WhyGoSolar />
    </div>
    <div class="my-5">
      <SolarInstallationSteps />
      <TestimonialSection />
    </div>
    <div class="my-5">
      <ShortsVideoSection />
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
      <GallerySection />
    </div>
    <div class="my-5">
      <ThankYou />
    </div>
  </div>
</template>

<script>
import AnimatedText from '@/components/AnimatedText.vue'
import WhyGoSolar from '@/components/WhyGoSolar.vue'
import SolarInstallationSteps from '@/components/SolarInstallationSteps.vue'
import CarouselBanner from "@/components/CarouselBanner.vue";
import GallerySection from "@/components/GallerySection.vue";
import AboutSection from "@/components/AboutSection.vue";
import TestimonialSection from "@/components/TestimonialSection.vue";
import FaqSection from "@/components/FaqSection.vue";
import ThankYou from "@/components/ThankYou.vue";
import ShortsVideoSection from "@/components/ShortsVideoSection.vue";

export default {
  name: "HomeView",
  components: {
    AnimatedText,
    WhyGoSolar,
    CarouselBanner,
    GallerySection,
    SolarInstallationSteps,
    AboutSection,
    TestimonialSection,
    FaqSection,
    ThankYou,
    ShortsVideoSection,
  },
  data() {
    return {
    };
  }
};
</script>
