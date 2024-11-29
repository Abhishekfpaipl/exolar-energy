<template>
    <div container style="padding-top: 60px;">
        <SectionTopBanner />
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
}
</script>