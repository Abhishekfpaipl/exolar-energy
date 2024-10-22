<template>
    <div class="text-dark border-top" style="background-color: var(--brand-color) !important;">
        <div class="container py-5">
            <h2 class="text-center text-uppercase mb-3">Looking for a best</h2>
            <p class="mb-3 fs-1"><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i></p>
            <h1 class="text-center text-uppercase mb-3" style="font-size: 45px">{{ title }} Services</h1>
            <h3 class="text-center text-uppercase mb-3">you are at the right place</h3>
            <div class="row align-items-center">
                <div class="col-12">
                    <router-link :to="routePath" class="text-capitalize text-decoration-none text-dark fs-4">
                        click here to Know More
                        <i class="bi bi-arrow-right mx-2 fs-4"></i>
                    </router-link>
                </div>
                <div class="col-12 text-center mt-5">
                    <button class="btn btn-hover w-100 fs-4" @click="openDialer"><i class="bi bi-whatsapp"></i>
                        Enquiry</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }, 
    },
    computed: {
        routePath() {
            switch (this.title) {
                case 'digital marketing':
                    return '/digital-marketing';
                case 'software development':
                    return '/software-development';
                case 'website development':
                    return '/website-development';
                default:
                    return '/';
            }
        }
    },
    methods: {
        openDialer() {
            const phoneNumber = '+918860012001';
            window.location.href = `tel:${phoneNumber}`;
        },
    }
}
</script>

<style scoped>
.btn-hover{
    background-color: #ffc107 !important;
    color: black !important;
}
.btn-hover:hover{
    background-color: black !important;
    color: #ffc107 !important;
    border: 1px solid #000 !important;
}
</style>
