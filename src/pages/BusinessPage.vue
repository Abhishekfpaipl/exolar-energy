<template>
    <div class="bg-light" style="padding-top: 50px;">
        <div class="">
            <FormBanner />
        </div>
        <div class="">
            <BusinessCard />
        </div>
    </div>
</template>
<script>
import FormBanner from "@/components/FormBanner.vue";
import BusinessCard from "@/components/BusinessCard.vue";
export default {
    name: "BusinessPage",
    components: {
        FormBanner,
        BusinessCard,
    }
}
</script>
<style lang="">

</style>