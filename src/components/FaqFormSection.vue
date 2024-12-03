<template>
    <div class="modal fade" id="siteVisitModal" tabindex="-1" aria-labelledby="siteVisitModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header border-bottom" style="background-color: var(--bg-light);border-color: var(--bg-secondary) !important;">
                    <h1 class="modal-title fs-5" id="siteVisitModalLabel">Get A Free Site Visit Today!</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="background-color: var(--bg-light);">
                    <div class="mt-4">
                        <form @submit.prevent="submitForm" class="">
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <div class="form-floating mb-3 border rounded-2"
                                        style="border-color: var(--bg-secondary) !important;">
                                        <input type="text" class="form-control" id="firstName" placeholder=""
                                            v-model="formData.firstName" :class="{ 'is-invalid': errors.firstName }"
                                            required>
                                        <div class="invalid-feedback">{{ errors.firstName }}</div>
                                        <label for="firstName">First Name*</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating mb-3 border rounded-2"
                                        style="border-color: var(--bg-secondary) !important;">
                                        <input type="text" class="form-control" id="lastName" placeholder=""
                                            v-model="formData.lastName" :class="{ 'is-invalid': errors.lastName }"
                                            required>
                                        <div class="invalid-feedback">{{ errors.lastName }}</div>
                                        <label for="lastName">Last Name*</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <div class="form-floating mb-3 border rounded-2"
                                        style="border-color: var(--bg-secondary) !important;">
                                        <input type="text" class="form-control" id="postalCode" placeholder=""
                                            v-model="formData.postalCode" :class="{ 'is-invalid': errors.postalCode }"
                                            required>
                                        <div class="invalid-feedback">{{ errors.postalCode }}</div>
                                        <label for="postalCode">Postal Code*</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating mb-3 border rounded-2"
                                        style="border-color: var(--bg-secondary) !important;">
                                        <input type="text" class="form-control" id="city" placeholder=""
                                            v-model="formData.city" :class="{ 'is-invalid': errors.city }" required>
                                        <div class="invalid-feedback">{{ errors.city }}</div>
                                        <label for="city">City*</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <div class="form-floating mb-3 border rounded-2"
                                        style="border-color: var(--bg-secondary) !important;">
                                        <input type="text" class="form-control" id="state" placeholder=""
                                            v-model="formData.state" :class="{ 'is-invalid': errors.state }" required>
                                        <div class="invalid-feedback">{{ errors.state }}</div>
                                        <label for="state">State*</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating mb-3 border rounded-2"
                                        style="border-color: var(--bg-secondary) !important;">
                                        <input type="tel" class="form-control" id="phoneNumber" placeholder=""
                                            v-model="formData.phoneNumber" :class="{ 'is-invalid': errors.phoneNumber }"
                                            required>
                                        <div class="invalid-feedback">{{ errors.phoneNumber }}</div>
                                        <label for="phoneNumber">Phone Number*</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-floating mb-3 border rounded-2"
                                style="border-color: var(--bg-secondary) !important;">
                                <input type="email" class="form-control" id="email" placeholder=""
                                    v-model="formData.email" :class="{ 'is-invalid': errors.email }" required>
                                <div class="invalid-feedback">{{ errors.email }}</div>
                                <label for="email">Email*</label>
                            </div>

                            <div class="form-floating mb-3 border rounded-2"
                                style="border-color: var(--bg-secondary) !important;">
                                <select class="form-control" id="electricityBill" v-model="formData.electricityBill"
                                    :class="{ 'is-invalid': errors.electricityBill }" required>
                                    <option value="">Select your average bill</option>
                                    <option v-for="range in billRanges" :key="range" :value="range">
                                        {{ range }}
                                    </option>
                                </select>
                                <div class="invalid-feedback">{{ errors.electricityBill }}</div>
                                <label for="electricityBill">What is your Average Electricity Bill (INR)*</label>
                            </div>

                            <div class="form-group mb-3">
                                <p class="text-start">
                                    <label>Property Type*</label>
                                </p>
                                <div class="d-flex gap-4">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="residential"
                                            value="Residential" v-model="formData.propertyType">
                                        <label class="form-check-label" for="residential">Residential</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="commercial"
                                            value="Commercial" v-model="formData.propertyType">
                                        <label class="form-check-label" for="commercial">Commercial</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="Industrial"
                                            value="Industrial" v-model="formData.propertyType">
                                        <label class="form-check-label" for="Industrial">Industrial</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-check mb-3">
                                <input type="checkbox" class="form-check-input" id="terms"
                                    v-model="formData.termsAccepted" :class="{ 'is-invalid': errors.termsAccepted }"
                                    required>
                                <p class="text-start">
                                    <label class="form-check-label " for="terms">
                                        I agree to Exolar Energy
                                        <router-link to="/terms-&-conditions">Terms of Service</router-link>
                                        <router-link to="/privacy-policy"> & Privacy Policy*</router-link>
                                    </label>
                                </p>
                                <div class="invalid-feedback">{{ errors.termsAccepted }}</div>
                            </div>

                            <button type="submit" class="btn w-100 text-white"
                                style="background-color: var(--bg-primary)">REQUEST A
                                CALL
                                BACK</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'SolarConsultationForm',
    data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                postalCode: '',
                city: '',
                state: '',
                phoneNumber: '',
                email: '',
                electricityBill: '',
                propertyType: [],
                termsAccepted: false
            },
            errors: {},
            billRanges: [
                '₹1,000 - ₹3,000',
                '₹3,001 - ₹5,000',
                '₹5,001 - ₹10,000',
                '₹10,001 - ₹15,000',
                '₹15,001+'
            ],

        }
    },
    methods: {
        validateForm() {
            this.errors = {}

            if (!this.formData.firstName) {
                this.errors.firstName = 'First name is required'
            }

            if (!this.formData.lastName) {
                this.errors.lastName = 'Last name is required'
            }

            if (!this.formData.postalCode) {
                this.errors.postalCode = 'Postal code is required'
            }

            if (!this.formData.city) {
                this.errors.city = 'City is required'
            }

            if (!this.formData.state) {
                this.errors.state = 'State is required'
            }

            if (!this.formData.phoneNumber) {
                this.errors.phoneNumber = 'Phone number is required'
            } else if (!/^\d{10}$/.test(this.formData.phoneNumber)) {
                this.errors.phoneNumber = 'Please enter a valid 10-digit phone number'
            }

            if (!this.formData.email) {
                this.errors.email = 'Email is required'
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)) {
                this.errors.email = 'Please enter a valid email address'
            }

            if (!this.formData.electricityBill) {
                this.errors.electricityBill = 'Please select your average electricity bill'
            }

            if (!this.formData.propertyType) {
                this.errors.propertyType = 'Please select a property type'
            }

            if (!this.formData.termsAccepted) {
                this.errors.termsAccepted = 'You must accept the terms and conditions'
            }

            return Object.keys(this.errors).length === 0
        },

        submitForm() {
            if (this.validateForm()) {
                const phoneNumber = '918860012001'; // Replace with your WhatsApp number
                const message = `Hello, my name is ${this.formData.firstName} ${this.formData.lastName}. These are my details:- City: ${this.formData.city}, State: ${this.formData.state}, Phone Number: ${this.formData.phoneNumber}, Email: ${this.formData.email}, Electricity Bill: ${this.formData.electricityBill}, Property Type: ${this.formData.propertyType}.`;
                const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                this.formData.firstName = '',
                    this.formData.lastName = '',
                    this.formData.postalCode = '',
                    this.formData.city = '',
                    this.formData.state = '',
                    this.formData.phoneNumber = '',
                    this.formData.email = '',
                    this.formData.electricityBill = '',
                    this.formData.propertyType = [],
                    this.formData.termsAccepted = false,
                    // Handle form submission here
                    console.log('Form submitted:', this.formData)
            }
        },
    }
}
</script>

<style scoped>
.form-check-input:checked {
    background-color: #0d6efd;
    border-color: #0d6efd;
}

.btn-primary {
    background-color: #f4844a;
    border-color: #f4844a;
}

.btn-primary:hover {
    background-color: #f37333;
    border-color: #f37333;
}
</style>