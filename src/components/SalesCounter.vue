<template>
    <div>
        <div class="p-5 d-md-flex justify-content-between align-items-center" >
            <div class="d-flex justify-content-center align-items-center">
                <img src="/img/smile.svg" style="width: 450px; max-width: 80%" alt="smile">
            </div>
            <div class="row mt-4">
                <div class="d-flex flex-column justify-content-center mb-4">
                    <h1 class=" text-center text-uppercase">our happy customers</h1>
                </div>
                <div class="col">
                    <div class="text-center">
                        <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                            <AutoCounter :data="serviceCount"> </AutoCounter>&nbsp;+
                        </p>
                        <p class="mt-0 text-capitalize">{{ service }}</p>
                    </div>
                </div>
                <div class="col">
                    <div class="text-center">
                        <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                            <AutoCounter :data="categoryCount"> </AutoCounter>&nbsp;+
                        </p>
                        <p class="mt-0 text-capitalize">{{ category }}</p>
                    </div>
                </div>
                <div class="col">
                    <div class="text-center">
                        <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                            <AutoCounter :data="placeCount"> </AutoCounter>&nbsp;+
                        </p>
                        <p class="mt-0 text-capitalize">{{ place }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AutoCounter from '@/components/AutoCounter.vue'
export default {
    name: 'SalesCounter',
    props: ['service', 'category', 'place', 'serviceCount', 'placeCount', 'categoryCount',],
    components: {
        AutoCounter
    },
}
</script>
<style lang="">

</style>