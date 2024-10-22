<template>
    <div style="padding-top: 66px;">
        <SectionTopBanner />
        <div class="container py-5" v-observe>
            <div class="row">
                <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <img src="/img/career-benefit.svg" style="width: 500px; max-width: 80%" alt="">
                </div>
                <div class="col-12 col-md-6 text-center mt-4 mt-md-0">
                    <h1>" We encourage new ideas and professionalism mixed with teamwork to achieve your
                        career goals as well as making the customer satisfied. "</h1>
                </div>

            </div>
        </div>
        <CareerSection />
        <div class="py-5" style="background-color: var(--bg-forth)">
            <div class="container">
                <div class="text-start mb-5">
                    <p class="text-muted mb-1 text-uppercase">Ariseol</p>
                    <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Employee Benefits</h2>
                </div>
                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                    <div v-for="(data, index) in works" :key="index" class="col">
                        <div class="d-flex align-items-center border my-1 ps-5 ps-md-2">
                            <i :class="data.icon" class="fs-4 p-1"></i>
                            <small class="fw-bold text-capitalize ms-3">{{ data.heading }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-5" v-observe>
            <OurCoreValues />
        </div>

    </div>
</template>

<script>
import SectionTopBanner from "@/components/SectionTopBanner.vue"
import CareerSection from "@/components/CareerSection.vue";
import OurCoreValues from "@/components/OurCoreValues.vue";
export default {
    name: 'CareerPage',
    components: {
        SectionTopBanner,
        CareerSection,
        OurCoreValues
    },
    data() {
        return { 
            works: [
                {
                    icon: 'bi bi-currency-rupee',
                    heading: 'Competitive Salary'
                },
                {
                    icon: 'bi bi-bounding-box',
                    heading: 'Open Office Culture'
                },
                {
                    icon: 'bi bi-graph-up-arrow',
                    heading: 'Fast Growing Startup'
                },
                {
                    icon: 'bi bi-people-fill',
                    heading: 'Equal Opportunities'
                },
                {
                    icon: 'bi bi-emoji-smile',
                    heading: 'Boosting Employee Morale'
                },
                {
                    icon: 'bi bi-heart',
                    heading: 'Improving Well-being'
                },
                {
                    icon: 'bi bi-lightning',
                    heading: 'Increasing Productivity'
                },
                {
                    icon: 'bi bi-check2-circle',
                    heading: 'Fulfilling Legal Requirements'
                }
            ],
            name: '',
            designation: '',
            note: ''
        }
    }, 

}
</script>

<style lang="scss" scoped></style>