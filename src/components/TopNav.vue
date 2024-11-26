<template>
    <div class="position-fixed w-100 d-flex justify-content-between  align-items-center p-2 top-0 bg-white border-bottom"
        style="z-index: 10; height: 60px;">
        <router-link to="/" class="text-decoration-none text-dark d-flex align-items-center">
            <img src="/img/logo.png" alt="Rooftop solar panel installation in Delhi by Exolar Energy" height="40px" width="auto">
        </router-link>
        <div class="d-none d-md-flex align-items-center gap-3">
            <router-link :to="link.route" class="text-decoration-none text-dark "
                :class="{ 'border-class': $route.path === link.route }" v-for="(link, index) in links" :key="index">{{
                    link.name }}</router-link>
            <button class="btn text-white" data-bs-toggle="modal" data-bs-target="#solarCalculator"
                style="background-color: var(--bg-third)">Calculator</button>
        </div>
        <div class="d-flex d-md-none gap-3 align-items-center">
            <i class="bi bi-calculator fs-4 p-1 px-2 btn text-white" data-bs-toggle="modal"
                data-bs-target="#solarCalculator" style="background-color: var(--bg-third)"></i>
            <i class="bi bi-list fs-1 text-dark" data-bs-toggle="offcanvas" data-bs-target="#MobileMenu"
                aria-controls="MobileMenu"></i>
        </div>
    </div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="MobileMenu" aria-labelledby="MobileMenuLabel">
        <div class="offcanvas-header border-bottom d-flex justify-content-between align-items-center">
            <img src="img/logo.png" alt="Rooftop solar panel installation in Delhi by Exolar Energy" style="height: 40px;">
            <i class="bi bi-x fs-1 text-dark" data-bs-dismiss="offcanvas" aria-label="Close"></i>
        </div>
        <div class="offcanvas-body px-0" style="background-color: var(--bg-primary);">
            <div class="d-flex flex-column align-items-start gap-3 ">
                <router-link :to="link.route"
                    class="text-decoration-none text-white border-white w-100 border-bottom px-3 pb-2"
                    v-for="(link, index) in links" :key="index">
                    <p data-bs-dismiss="offcanvas" class="text-start fw-bold mb-0">
                        <i class="bi bi-arrow-right visit me-3"></i>
                        {{ link.name }}
                    </p>
                </router-link>
            </div>
        </div>
        <div class="offcanvas-footer w-100 text-white" style="background-color: var(--bg-primary);">
            <p class="text-center fs-4 my-4">Reach Us</p>
            <div class="d-flex justify-content-evenly fs-2 w-100 gap-3 mb-5">
                <a :href="link.url" v-for="(link, index) in follows" :key="index" class="text-white"
                    aria-label="Facebook" style="background-color: var(--primary-color);">
                    <i :class="link.icon"></i>
                </a>
            </div>
        </div>
    </div>
    <TestSection />
</template>
<script>
import TestSection from '@/components/TestSection.vue';

export default {
    name: "TopNav",
    components: {
        TestSection,
    },
    data() {
        return {
            links: [
                { name: 'Home', route: '/' },
                { name: 'About Us', route: '/about-us' },
                { name: 'Contact Us', route: '/contact-us' },
                // { name: 'Career', route: '/career' },
                // { name: 'Benefit', route: '/benefit' },
                // { name: 'Dealership', route: '/dealership' },
                { name: 'Customers', route: '/customers' },
            ],
            follows: [
                { name: "Twitter", icon: "bi bi-twitter", url: "https://x.com/exolar_energy" },
                { name: "Instagram", icon: "bi bi-instagram", url: "https://www.instagram.com/exolarenergy/" },
                { name: "Youtube", icon: "bi bi-youtube", url: "https://www.youtube.com/@ExolarEnergyPvtLtd" },
                { name: "LinedIn", icon: "bi bi-linkedin", url: "https://www.linkedin.com/company/exolar-energy-private-limited/?originalSubdomain=in" },
                { name: "Facebook", icon: "bi bi-facebook", url: "https://www.facebook.com/Exolarenergy/" },
                { name: "Google", icon: "bi bi-google", url: "https://www.google.com/maps/place/Exolar+Energy+Private+Limited/@28.6927558,77.1516954,17z/data=!3m1!4b1!4m6!3m5!1s0x390d0187cc8cabcd:0x894510dda97c6adc!8m2!3d28.6927558!4d77.1516954!16s%2Fg%2F11pkfdys1v?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D" },
            ],
            selectedMenu: null,
        }
    },
    methods: {
        selectMenu(index) {
            this.selectedMenu = index;
        },
    },
}
</script>
<style scoped>
.border-class {
    border-bottom: 2px solid var(--bg-third) !important;
    color: var(--bg-primary) !important;
    font-weight: 600;
}
</style>