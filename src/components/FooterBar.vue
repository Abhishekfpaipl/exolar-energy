<template>
    <div class="container-fluid pt-3 border-top border-bottom bg-white">
        <div class="row">
            <div class="col-12 col-md-4 mb-3 d-flex flex-column align-items-center justify-content-center">
                <router-link to="/" class="text-decoration-none text-dark d-flex flex-column align-items-center">
                    <img :src="img" style="width: 200px;object-fit: contain; ">
                </router-link>

            </div>

            <div class=" col-12 col-md-4 mb-3 text-center">
                <p class="mb-2 fw-bold">Contact Us</p>
                <p class="mb-2">Email : contact.exolarenergy@gmail.com</p>
                <p class="mb-2">Address : 310, Pearl Best Height-1, <br>
                    Netaji Subhash Place, Delhi-34</p>
                <div class="d-flex gap-2 justify-content-center">
                    <p class="fw-bold">Follow Us :</p>
                    <i class="bi bi-twitter-x"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-instagram"></i>
                </div>
            </div>
            <div class="col-12 col-md-4 d-flex justify-content-around">
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Company</p>
                    <div class="d-flex flex-column">
                        <router-link :to="link.link" class="text-decoration-none my-1 text-dark"
                            v-for="(link, index) in company" :key="index">{{ link.name }}</router-link>
                    </div>
                </div>
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Resources</p>
                    <div class="d-flex flex-column">
                        <router-link :to="link.link" class="text-decoration-none my-1 text-dark"
                            v-for="(link, index) in links" :key="index">{{ link.name }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-bg-dark py-2 d-flex justify-content-between px-md-4">
        <p class="mb-0">All rights reserved</p>
        <a href="https://www.covisor.in" class="text-white text-decoration-none">Copyright &copy; Covisor Infotech Pvt
            Ltd</a>
        <!-- <p>Copyright &copy; Covisor.in</p> -->
    </div>
    <!-- <FameFoot /> -->
</template>

<script>
// import FameFoot from '@/components/FameFoot.vue'
export default {
    name: 'FooterBar',
    components: {
        // FameFoot,
    },
    data() {
        return {
            img: '/img/logo.png',
            company: [
                {
                    id: 4,
                    name: 'Contact Us',
                    link: '/contact-us'
                },
                {
                    id: 42,
                    name: 'About Us',
                    link: '/about-us'
                },
                {
                    id: 3,
                    name: 'Refund Policy',
                    link: '/refund-policy'
                },
                {
                    id: 3,
                    name: 'Business',
                    link: '/business'
                },
                // {
                //     id: 23,
                //     name: 'Career',
                //     link: '/career'
                // },
                // {
                //     id: 23,
                //     name: 'Benefit',
                //     link: '/benefit'
                // },
                // {
                //     id: 3,
                //     name: 'Check Dealership',
                //     link: '/check-dealership'
                // },

            ],
            links: [
                {
                    id: 13,
                    name: 'Gallery',
                    link: '/gallery'
                },
                {
                    id: 1,
                    name: 'Privacy Policy',
                    link: '/privacy-policy'
                },
                {
                    id: 12,
                    name: 'Terms & Conditions',
                    link: '/term-of-use'
                },
                // {
                //     id: 23,
                //     name: 'Facility',
                //     link: '/facility'
                // },
                // {
                //     id: 23,
                //     name: 'Reports',
                //     link: '/report'
                // },
            ],
        }
    },
}
</script>

<style></style>
