<template>
  <div class="" style="padding-top: 64px;">
    <CarouselBanner />
    <!-- <CardSection /> -->
    <!-- <ImageSection /> -->

    <!-- <ImageTextSection image-src="/img/gallery/1.jpg" heading="High-Performance Industrial Oils for Enhanced Efficiency"
      subHeading="Our range of industrial oils is designed to meet the demands of various industries, offering superior lubrication, reduced friction, and enhanced equipment longevity."
      :points="points" image-alt="gallery" :imageFirst="true" />

    <ImageTextSection image-src="/img/gallery/10.jpg" heading="Advanced Industrial Grease for Heavy-Duty Applications"
      subHeading="Our industrial greases are engineered to provide superior protection and performance in
                    the most demanding environments, ensuring machinery runs smoothly and efficiently." text="Formulated to withstand extreme temperatures and high loads, our grease minimizes friction, reduces
                    wear, and extends the lifespan of your equipment. It offers excellent water resistance and corrosion
                    protection, making it ideal for industrial applications such as manufacturing, mining, and
                    construction." image-alt="gallery" :imageFirst="false" />

    <ImageTextSection image-src="/img/gallery/3.jpg" heading="Leaders in Oil and Grease Manufacturing" subHeading="Our industry is at the forefront of producing high-performance oils and greases that
                    meet the demands of various sectors, from automotive to heavy machinery and industrial equipment."
      text="We specialize in advanced formulations that enhance machinery efficiency, reduce wear, and extend the
                    lifespan of equipment. Our products are designed to operate under extreme conditions, providing
                    reliable lubrication, protection against corrosion, and optimal performance for a wide range of
                    applications. With a focus on sustainability, we continuously innovate to deliver solutions that
                    help reduce energy consumption and environmental impact." image-alt="gallery" :imageFirst="true" /> -->
    <div class="my-5">
      <WhyGoSolar />
    </div>
    <div class="my-5">
      <SolarAdvantages />
    </div>
    <div class="my-5">
      <SolarInstallationSteps />
    </div>
    <div class="container my-5">
      <div class="text-start mb-5">
        <p class="text-muted mb-1 text-uppercase">Ariseol Lubricants</p>
        <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Precision Engineered with Nanotechnology
        </h2>
      </div>
      <!-- <ImageTextSection image-src="/img/oiltexture.jpg"
        text="At Ariseol, we harness cutting-edge nanotechnology to engineer lubricants with unparalleled precision—down to a millionth of a millimeter. Even the most polished gears have microscopic imperfections, and our advanced electron microscopes allow us to inspect and refine lubricants at the nanoscale. This ensures that our products provide optimal performance, reducing friction and wear at the most minute level. Since our founding in 1911, we’ve been committed to this level of precision, continuously developing solutions tailored to meet the specific needs of our customers. With over a century of expertise, we remain at the forefront of innovation, ensuring our lubricants not only meet but exceed industry standards."
        image-alt="gallery" :imageFirst="false" /> -->
      <NanoTechnology />
    </div>

    <!-- <ImageTextSection /> -->
    <GermanTechonology />
    <GermanPerformance />
    <ProductSection />

    <WeAreAriseol />


    <FeaturesSection />
    <AboutSection />
    <TestimonialSection />
    <div class="my-5">
      <AriseolBenefits />
    </div>
    <ContactSection />
    <div class="my-5">
      <TeamSection />
    </div>
    <div class="my-5">
      <GallerySection />
    </div>
  </div>
</template>

<script>
import WhyGoSolar from '@/components/WhyGoSolar.vue'
import SolarAdvantages from '@/components/SolarAdvantages.vue'
import SolarInstallationSteps from '@/components/SolarInstallationSteps.vue'
import CarouselBanner from "@/components/CarouselBanner.vue";
import GallerySection from "@/components/GallerySection.vue";
// import CardSection from "@/components/CardSection.vue";
// import ImageTextSection from "@/components/ImageTextSection.vue";
// import ProductSection from "@/components/ProductSection.vue";
// import TeamSection from "@/components/TeamSection.vue";
// import ContactSection from "@/components/ContactSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import TestimonialSection from "@/components/TestimonialSection.vue";
// import ImageSection from "@/components/ImageSection.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import WeAreAriseol from "@/components/WeAreAriseol.vue";
import GermanTechonology from "@/components/GermanTechonology.vue";
import GermanPerformance from "@/components/GermanPerformance.vue";
import NanoTechnology from "@/components/NanoTechnology.vue";
import AriseolBenefits from "@/components/AriseolBenefits.vue";

export default {
  name: "HomeView",
  components: {
    WhyGoSolar,
    SolarAdvantages,
    CarouselBanner,
    GallerySection,
    SolarInstallationSteps,
    // ImageSection,
    // CardSection,
    // ImageTextSection,
    // ProductSection,
    // TeamSection,
    // ContactSection,
    AboutSection,
    TestimonialSection,
    FeaturesSection,
    WeAreAriseol,
    GermanTechonology,
    GermanPerformance,
    NanoTechnology,
    AriseolBenefits
  },
  data() {
    return {
      points: [
        "Optimized for heavy-duty machinery, ensuring smooth operation under extreme conditions.",
        "Formulated to reduce energy consumption and minimize equipment wear.",
        "Provides superior protection against rust, corrosion, and oxidation."
      ]
    };
  }
};
</script>
