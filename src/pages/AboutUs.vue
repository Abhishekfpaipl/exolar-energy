<template>
    <div container style="padding-top: 60px;">
        <SectionTopBanner mobileImage="/img/aboutMobile.jpg" desktopImg="/img/aboutDesktop.jpg" />
        <div class="my-5" v-observe>
            <SuccessStory :tests="tests" />
        </div>
        <div class="my-5" v-observe>
            <WhyWeAreBest :tests="tests" />
        </div>
        <div class="my-5" v-observe>
            <OurMissionVision />
        </div>
        <div class="my-5" v-observe>
            <OurCoreValues />
        </div>
        <div class="container mb-5">
            <h4 class="mb-3 text-dark fw-bold">Our Clients Have Benefited From:</h4>
            <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6">

                    <ul class="list-group list-group-flush text-start">
                        <li v-for="(point, index) in points" :key="index"
                            class="list-group-item d-flex align-items-center px-0">
                            <i class="bi bi-check-circle text-success me-3"></i>
                            <span>{{ point }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import SuccessStory from "@/components/SuccessStory.vue";
import WhyWeAreBest from "@/components/WhyWeAreBest.vue";
import OurCoreValues from "@/components/OurCoreValues.vue";
import OurMissionVision from "@/components/OurMissionVision.vue";
import SectionTopBanner from "@/components/SectionTopBanner.vue";
export default {
    name: "AboutUs",
    components: {
        OurCoreValues,
        WhyWeAreBest,
        SuccessStory,
        OurMissionVision,
        SectionTopBanner,
    },
    data() {
        return {
            points: [
                'Optimal combination of cost, technology and benefits',
                'Plant designs of global standard using latest software',
                'Best in class components that are suggested based on our experience and associations',
                'Most effective and efficient execution',
                'O & M support and warranty administration assistance'
            ]
        }
    }
}
</script>