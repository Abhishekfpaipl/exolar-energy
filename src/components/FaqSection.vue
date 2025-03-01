<template>
    <div class="container-fluid bg-light">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <img src="/img/faq.png" alt="Rooftop solar panel installation in Delhi by Exolar Energy"
                        class="img-fluid" style="height: 250px; width: auto;">
                </div>
                <div class="col-md-6 mt-5 mt-md-0">
                    <router-link to="/faqs" class="text-decoration-none text-start mb-5"> 
                        <h1 class="display-5 text-capitalize" style="color: var(--bg-primary);">Frequently Asked Questions
                            <!-- <i class="bi bi-arrow-right visit ms-2"></i> -->
                            <button class="btn btn-outline-primary py-2 rounded-0"><i class="bi bi-search"></i></button>
                        </h1>
                    </router-link>
                    <!-- <router-link to="/faqs" class="btn btn-success fs-5">
                        Explore Frequently Asked Questions About Exolar Energy
                    </router-link> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FaqSection",
}
</script>

<style lang="">
</style>
