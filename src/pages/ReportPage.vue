<template>
    <div style="padding-top:60px;">
        <SectionTopBanner />
        <ProductTableSection :table="table" />
    </div>
</template>
<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';
import ProductTableSection from "@/components/ProductTableSection.vue"

export default {
    components: {
        SectionTopBanner,
        ProductTableSection
    },
    data() {
        return {
            table: {
                tableHead: ["#", "Appearance", "Smooth and Homogeneous"],
                tableData: [
                    { head: 'NLGI Grade', body: '1', },
                    { head: 'Base Oil Type', body: 'Mineral', },
                    { head: 'Base Oil Viscosity ', body: 'Not specified', },
                    { head: 'Thickener Type', body: 'Calcium', },
                    { head: 'Dropping Point', body: '90 min', },
                    { head: 'EP Properties', body: 'No', },
                    { head: 'Operating Temperature', body: '-10 to 60C', },
                ],
            },
        }
    }
}
</script>
<style lang="">

</style>