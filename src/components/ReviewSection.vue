<template>
    <div class="" style="background-color:var(--bg-primary)">
        <div class="container py-5">
            <div class="text-start">
                <h2 class="text-start display-1 text-warning">Click here for</h2>
                <router-link to="/write-testimonial"
                    class="d-flex justify-content-between align-items-center text-decoration-none text-white">
                    <AutoTypeDeleteText :texts="services" :typingSpeed="150" :deleteSpeed="50" :delay="500" />
                    <i class="bi bi-arrow-right ms-2 fs-1 visit"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import AutoTypeDeleteText from "@/components/AutoTypeDeleteText.vue"
export default {
    name: 'ReviewSection',
    components: {
        AutoTypeDeleteText,
    },
    data() {
        return {
            services: [
                'Testimonial'
            ],
        }
    }
}
</script>
<style lang="">

</style>