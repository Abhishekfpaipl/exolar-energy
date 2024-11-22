<template>
    <div style="padding-top: 60px;">
        <SectionTopBanner />
        <div class="container my-5" v-observe>
            <div class="row">
                <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <img src="/img/partnership.svg" style="width: 350px; max-width: 80%" alt="">
                </div>
                <div class="col-12 col-md-6 text-center mt-4 mt-md-0">
                    <form @submit.prevent="submitForm">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input v-model="form.applicantName" type="text" class="form-control bg-light"
                                        id="applicantName" placeholder="Applicant Name" required>
                                    <label for="applicantName">Applicant Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input v-model="form.mobileNo" type="number" class="form-control bg-light"
                                        id="mobileNo" placeholder="Mobile No" required>
                                    <label for="mobileNo">Mobile No</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input v-model="form.alternateNo" type="number" class="form-control bg-light"
                                        id="alternateNo" placeholder="Alternate No">
                                    <label for="alternateNo">Alternate No</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input v-model="form.emailId" type="email" class="form-control bg-light"
                                        id="emailId" placeholder="Email ID" required>
                                    <label for="emailId">Email ID</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <select v-model="form.howDidYouHearAboutUs" class="form-select bg-light"
                                        id="howDidYouHearAboutUs" required>
                                        <option value="" disabled selected>How did you Hear About us?</option>
                                        <option value="website">Website</option>
                                        <option value="socialMedia">Social Media</option>
                                        <option value="referral">Referral</option>
                                    </select>
                                    <label for="howDidYouHearAboutUs">How did you Hear About Us?</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input v-model="form.totalYearsOfExperience" type="number"
                                        class="form-control bg-light" id="totalYearsOfExperience"
                                        placeholder="Total Years of Experience" required>
                                    <label for="totalYearsOfExperience">Total Years of Experience</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-danger w-100">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        <div class="my-5" style="background-color: var(--bg-forth)">
            <OurCoreValues />
        </div>
        <div class="container my-5">
            <div class="text-start my-5">
                <p class="text-muted mb-1 text-uppercase">Ariseol</p>
                <h2 class="display-5  text-uppercase" style="color: var(--bg-primary);">Check Dealership</h2>
            </div>
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6 mb-3" v-observe>
                    <div class="card text-white rounded-0  card-hover" style="background-color: #F78C17 !important;">
                        <div class="background-image p-3" style="background-image: url('/img/map.png');">
                            <div class="overlay"></div>
                            <div class="row no-gutters py-5">
                                <div class="col-md-6 d-flex flex-column justify-content-end" style="height: 290px;">
                                    <div class="text-white position-relative">
                                        <h5 class="text-start">Dealership Availability</h5>
                                        <p class="text-start">
                                            CLG has an extensive dealer network across India.
                                        </p>
                                        <div class="d-flex justify-content-start">
                                            <router-link to="/check-dealership" class="btn rounded-0"
                                                style="background-color: var(--bg-secondary)">Check </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container py-5">
            <div class="text-start my-5">
                <p class="text-muted mb-1 text-uppercase">Ariseol</p>
                <h2 class="display-5  text-uppercase" style="color: var(--bg-primary);">Our Partnership Benefits</h2>
            </div>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                <div v-for="(benefit, index) in benefits" :key="index" class="col">
                    <div class="card h-100 mb-3"
                        style="background-color:rgba(255, 0, 0, 0.2); border:1px solid rgba(255, 0, 0, 1) !important;">
                        <div class="card-header"
                            style="background-color:var(--bg-primary);border-bottom:1px solid rgba(255, 0, 0, 1) !important;">
                            <p class="fw-bold text-capitalize ms-3 mb-0 text-ellipsis2" style="min-height: 48px;">{{
                                benefit.title }}</p>
                        </div>
                        <div class="card-body">
                            <small class="text-capitalize ms-3">{{ benefit.description }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-3 py-3 text-center">
            <div class="container p-md-5 p-3">
                <div class="text-start my-5">
                    <p class="text-muted mb-1 text-uppercase">Ariseol</p>
                    <h2 class="display-5  text-uppercase" style="color: var(--bg-primary);">Frequently asked questions
                    </h2>
                    <p class="text-start small">Take advantage of curated questions and answers frequently asked by the
                        visitors &
                        business.</p>
                </div>
                <div class="row row-cols-1 row-cols-md-2 g-2 mt-5">
                    <div class="col" v-for="(question, index) in questions" :key="index">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed border-bottom fw-bold" type="button"
                                        data-bs-toggle="collapse" :data-bs-target="'#collapseTwo' + index"
                                        aria-expanded="false" :aria-controls="'collapseTwo' + index">
                                        {{ question.question }}
                                    </button>
                                </h2>
                                <div :id="'collapseTwo' + index" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body text-start">{{ question.answer }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid text-white py-5" style="background-color: var(--bg-primary);">
            <div class="row">
                <div class="col-12 col-md-6">
                    <img src="/img/reseller-program.svg" style="width: 250px;max-width: 80%;" alt="">
                </div>
                <div class="col-12 col-md-6 mt-5 mt-md-0 d-flex justify-content-center align-items-center">
                    <p class="fs-1 fw-bold">"It's your own business <br> Let it shine"</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import OurCoreValues from "@/components/OurCoreValues.vue";
import SectionTopBanner from "@/components/SectionTopBanner.vue";
export default {
    name: 'DealershipPage',
    components: {
        OurCoreValues,
        SectionTopBanner
    },
    data() {
        return { 
            benefits: [
                {
                    "id": 1,
                    "title": "Access to High-Quality Products",
                    "description": "Distributors gain access to a range of premium grease and oil products that are formulated for superior performance and reliability, catering to various industrial and automotive needs."
                },
                {
                    "id": 2,
                    "title": "Exclusive Distribution Rights",
                    "description": "Enjoy exclusive rights to distribute certain brands or product lines within your region. This exclusivity can help you build a strong market presence and differentiate yourself from competitors."
                },
                {
                    "id": 3,
                    "title": "Attractive Margins",
                    "description": "Benefit from competitive wholesale pricing, which allows you to set retail prices that offer attractive margins. This can lead to significant profitability and a solid return on investment."
                },
                {
                    "id": 4,
                    "title": "Comprehensive Training",
                    "description": "Receive thorough training on product features, benefits, and applications. This knowledge equips you with the expertise needed to effectively market and sell the products, providing added value to your customers."
                },
                {
                    "id": 5,
                    "title": "Marketing and Promotional Support",
                    "description": "Access marketing materials, promotional campaigns, and advertising support to help you effectively promote the products. This support includes brochures, banners, and digital marketing resources."
                },
                {
                    "id": 6,
                    "title": "Customized Business Solutions",
                    "description": "Enjoy flexibility in customizing your business approach, including pricing strategies, promotional offers, and customer service practices tailored to your target market."
                },
                {
                    "id": 7,
                    "title": "Strong Supplier Relationships",
                    "description": "Build strong relationships with manufacturers and suppliers. These relationships can lead to better terms, early access to new products, and support for scaling your business."
                },
                {
                    "id": 8,
                    "title": "Dedicated Customer Service",
                    "description": "Leverage dedicated customer service teams for support, including technical assistance and order management. This ensures you and your clients receive timely and effective help."
                },
                {
                    "id": 9,
                    "title": "Scalable Business Model",
                    "description": "Grow your distributorship at your own pace. Start with a manageable scale and expand your reach as your business grows, including increasing your product offerings and market coverage."
                },
                {
                    "id": 10,
                    "title": "Networking Opportunities",
                    "description": "Connect with other distributors, industry professionals, and potential clients. Networking opportunities can lead to business growth, partnerships, and valuable industry insights."
                },
                {
                    "id": 11,
                    "title": "Market Insights",
                    "description": "Gain access to industry trends, market data, and customer preferences. This information helps you make informed business decisions and stay competitive in the market."
                },
                {
                    "id": 12,
                    "title": "Flexible Operations",
                    "description": "Operate your distributorship with flexibility in terms of location, scale, and business model. This adaptability allows you to respond to market changes and customer needs effectively."
                },
                {
                    "id": 13,
                    "title": "Financial Incentives",
                    "description": "Enjoy various financial incentives, such as performance-based bonuses, volume discounts, and rebates, which can enhance your profitability and reward your success."
                },
                {
                    "id": 14,
                    "title": "Support for Business Growth",
                    "description": "Receive ongoing support and resources to help you grow your distributorship. This includes access to new product lines, business development tools, and strategic guidance."
                }
            ],
            questions: [
                {
                    id: 1,
                    question: "What additional benefits come with a distributor plan?",
                    answer: "With our distributor plan, you receive several benefits including: * Exclusive access to premium grease and oil products * Marketing support including promotional materials * Training on product features and sales techniques * Access to our distributor portal for easy ordering and tracking."
                },
                {
                    id: 2,
                    question: "What if I'm not satisfied with the distributor program?",
                    answer: "We offer a satisfaction guarantee. If you’re not satisfied with the distributor program, you can contact us within the first 30 days for a refund or to discuss other solutions."
                },
                {
                    id: 3,
                    question: "Who sets the pricing on my distributor storefront?",
                    answer: "You have control over the pricing on your distributor storefront. You can set individual prices for different products, offer special promotions, and apply discounts as needed. There is also an option for bulk pricing to simplify pricing adjustments for all products at once."
                },
                {
                    id: 4,
                    question: "What is the commission payment process?",
                    answer: "We provide various payout options for your commissions, including bank transfers, PayPal, and checks. Commissions earned in a given month are typically paid at the end of the following month. For instance, commissions earned in January will be paid at the end of February."
                },
                {
                    id: 5,
                    question: "What does it mean to be a white-label distributor?",
                    answer: "As a white-label distributor, you sell products under your own brand name. The products will carry your branding, and your customers will see only your company name. However, for certain products like bulk chemicals, the original manufacturer's name may appear in specific legal or compliance documentation."
                },
                {
                    id: 6,
                    question: "Can I customize my distributor storefront?",
                    answer: "Yes, you can customize your storefront to align with your brand. You have control over your site’s domain, logo, color scheme, and page layout. Additionally, if you are familiar with website development, you can use our API to create a fully customized storefront."
                },
                {
                    id: 7,
                    question: "Who provides customer support to my clients?",
                    answer: "We offer 24/7 customer support for your clients via phone and email. Our support team can handle inquiries, provide technical assistance, and offer product advice, all while representing your brand."
                },
                {
                    id: 8,
                    question: "What should I do if I need help?",
                    answer: "Our support team is available 24/7 to assist you with any issues. Whether you need help setting up your distributor account, troubleshooting technical problems, or require sales advice, our team is here to support you."
                },
                {
                    id: 9,
                    question: "Are there other ways to partner with us?",
                    answer: "Yes, besides becoming a distributor, you can explore our Affiliate Program for earning commissions through referrals, or our Strategic Partner Program for deeper collaboration and exclusive benefits."
                },
                {
                    id: 11,
                    question: "Who processes payments from my customers?",
                    answer: "Customers will purchase products through your branded storefront, but payments are processed through our secure payment gateway. You receive the net commission from each sale after the payment has been processed and settled."
                },
                {
                    id: 10,
                    question: "What is the difference between the Distributor Program and the Strategic Partner Program?",
                    answer: "The Distributor Program allows you to purchase and sell our products under your own brand with set pricing. The Strategic Partner Program, on the other hand, offers additional benefits such as joint marketing initiatives, product development collaboration, and higher commission rates for larger partnerships."
                },
            ],

            form: {
                applicantName: '',
                mobileNo: '',
                alternateNo: '',
                emailId: '',
                dateOfBirth: '',
                howDidYouHearAboutUs: '',
                totalYearsOfExperience: '',
            }
        }
    },
    methods: {

        submitForm() {
            // const phoneNumber = '919711256073';
            // const message = `Name: ${this.form.applicantName},%0A  
            // Number: ${this.form.mobileNo},%0A
            // AltNumber: ${this.form.alternateNo},%0A
            // Email: ${this.form.emailId},%0A
            // DOB: ${this.form.dateOfBirth},%0A
            // How did you hear about us: ${this.form.howDidYouHearAboutUs},%0A
            // Exp: ${this.form.totalYearsOfExperience}%0A `;

            // const url = `https://wa.me/${phoneNumber}?text=${message}`;
            // window.open(url, '_blank');
            console.log('send')
        }
    }

}
</script>

<style scoped>
.card-hover {
    position: relative;
    overflow: hidden;
}

.background-image {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    height: 100%;
    width: 100%;
}

.overlay {
    background: var(--bg-primary);
    opacity: 60%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>