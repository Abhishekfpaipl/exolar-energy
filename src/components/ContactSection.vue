<template>
    <div class="container my-5">
        <div class="mb-5 text-start">
            <p class="text-muted text-uppercase mb-1">CONTACT</p>
            <p class="display-5 text-uppercase" style="color: var(--bg-primary);">CHECK OUR CONTACT</p>
        </div>

        <div class="row" v-observe>
            <div class="col-md-4 mb-4">
                <div class="d-flex gap-3 align-items-start mb-4" v-for="(link, index) in links" :key="index">
                    <i class="col-6 bi text-white rounded-circle d-flex justify-content-center align-items-center"
                        :class="link.icon" style="width: 44px; height: 44px;background-color: var(--bg-primary);"></i>
                    <div class="text-start">
                        <h5 class="text-danger">{{ link.title }}</h5>
                        <p>{{ link.description }}</p>
                    </div>
                </div>
            </div>

            <div class="col-md-8">
                <form @submit.prevent="submitForm">
                    <div class="row g-3">
                        <div class="col-md-6 form-floating">
                            <input type="text" class="form-control" id="Name" placeholder="Your Name"
                                v-model="form.name" required>
                            <label for="Name" class="ms-2 text-muted">Your Name</label>
                        </div>
                        <div class="col-md-6 form-floating">
                            <input type="email" class="form-control" id="Email" placeholder="Your Email"
                                v-model="form.email" required>
                            <label for="Email" class="ms-2 text-muted">Your Email</label>
                        </div>
                        <div class="col-md-12 form-floating">
                            <input type="number" class="form-control" id="Number" placeholder="Your Number"
                                v-model="form.number" required>
                            <label for="Number" class="ms-2 text-muted">Your Number</label>
                        </div>
                        <div class="col-12 form-floating">
                            <input type="email" class="form-control" id="Subject" placeholder="Subject"
                                v-model="form.subject" required>
                            <label for="Subject" class="ms-2 text-muted">Subject</label>
                        </div>
                        <div class="col-12">
                            <textarea v-model="form.message" class="form-control" rows="5" placeholder="Message"
                                required></textarea>
                        </div>
                        <div class="col-12 text-end">
                            <button type="submit" class="btn text-white rounded-pill px-4 py-2" style="background-color: var(--bg-primary);">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactSection',
    data() {
        return {
            form: {
                name: '',
                email: '',
                subject: '',
                message: '',
                number:'',
            },
            links: [
                {
                    title: 'Address',
                    icon: 'bi-geo-alt',
                    description: 'HD-723, WeWork Enam Sambhav, C - 20, G Block Rd, G-Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra - 400051'
                },
                // {
                //     title: 'Call Us',
                //     icon: 'bi-telephone',
                //     description: '+91 8860012001'
                // },
                {
                    title: 'Email Us',
                    icon: 'bi-envelope',
                    description: 'info@clgoilindia.com'
                },
            ]
        }
    },
    methods: {
        submitForm() {
            // Handle form submission here
            console.log('Form submitted:', this.form);
            // You would typically send this data to a server here
        }
    }
}
</script>

<style scoped>
.before-enter {
    opacity: 0;
    transform: translateY(80px);
    transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}

.enter {
    opacity: 1;
    transform: translateY(0);
}
</style>