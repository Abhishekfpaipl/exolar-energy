<template>
    <div class="" style="background-color:var(--bg-primary)">
        <div class="container py-5">
            <div class="text-start">
                <router-link to="/write-testimonial"
                    class="d-flex justify-content-between align-items-center text-decoration-none text-white">
                    <AutoTypeDeleteText :texts="services" :typingSpeed="150" :deleteSpeed="50" :delay="500" />
                    <!-- <h2 class="display-5 text-uppercase">Write Testimonial here</h2> -->
                    <i class="bi bi-arrow-right ms-2 fs-1"></i>
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
                'Write Testimonial Here'
            ],
        }
    }
}
</script>
<style lang="">

</style>