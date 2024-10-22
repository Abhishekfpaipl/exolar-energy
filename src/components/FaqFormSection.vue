<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container mt-4">
                        <form @submit.prevent="submitForm" class="card p-4">
                            <h2 class="text-center mb-4">Schedule a Free Site Visit Today!</h2>

                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="firstName">First Name*</label>
                                        <input type="text" class="form-control" id="firstName"
                                            v-model="formData.firstName" :class="{ 'is-invalid': errors.firstName }"
                                            required>
                                        <div class="invalid-feedback">{{ errors.firstName }}</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="lastName">Last Name*</label>
                                        <input type="text" class="form-control" id="lastName"
                                            v-model="formData.lastName" :class="{ 'is-invalid': errors.lastName }"
                                            required>
                                        <div class="invalid-feedback">{{ errors.lastName }}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="postalCode">Postal Code*</label>
                                        <input type="text" class="form-control" id="postalCode"
                                            v-model="formData.postalCode" :class="{ 'is-invalid': errors.postalCode }"
                                            required>
                                        <div class="invalid-feedback">{{ errors.postalCode }}</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="city">City*</label>
                                        <input type="text" class="form-control" id="city" v-model="formData.city"
                                            :class="{ 'is-invalid': errors.city }" required>
                                        <div class="invalid-feedback">{{ errors.city }}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="state">State*</label>
                                        <input type="text" class="form-control" id="state" v-model="formData.state"
                                            :class="{ 'is-invalid': errors.state }" required>
                                        <div class="invalid-feedback">{{ errors.state }}</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="phoneNumber">Phone Number*</label>
                                        <input type="tel" class="form-control" id="phoneNumber"
                                            v-model="formData.phoneNumber" :class="{ 'is-invalid': errors.phoneNumber }"
                                            required>
                                        <div class="invalid-feedback">{{ errors.phoneNumber }}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="email">Email*</label>
                                <input type="email" class="form-control" id="email" v-model="formData.email"
                                    :class="{ 'is-invalid': errors.email }" required>
                                <div class="invalid-feedback">{{ errors.email }}</div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="electricityBill">What is your Average Electricity Bill (INR)*</label>
                                <select class="form-control" id="electricityBill" v-model="formData.electricityBill"
                                    :class="{ 'is-invalid': errors.electricityBill }" required>
                                    <option value="">Select your average bill</option>
                                    <option v-for="range in billRanges" :key="range" :value="range">
                                        {{ range }}
                                    </option>
                                </select>
                                <div class="invalid-feedback">{{ errors.electricityBill }}</div>
                            </div>

                            <div class="form-group mb-3">
                                <label>Property Type*</label>
                                <div class="d-flex gap-4">
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="independent"
                                            value="Independent Villa" v-model="formData.propertyType" required>
                                        <label class="form-check-label" for="independent">Independent Villa</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="apartment" value="Apartment"
                                            v-model="formData.propertyType">
                                        <label class="form-check-label" for="apartment">Apartment</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="commercial"
                                            value="Commercial Establishment" v-model="formData.propertyType">
                                        <label class="form-check-label" for="commercial">Commercial
                                            Establishment</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-check mb-3">
                                <input type="checkbox" class="form-check-input" id="terms"
                                    v-model="formData.termsAccepted" :class="{ 'is-invalid': errors.termsAccepted }"
                                    required>
                                <label class="form-check-label" for="terms">
                                    I agree to HomeScape Solar
                                    <a href="#" class="text-decoration-none">Terms of Service & Privacy Policy*</a>
                                </label>
                                <div class="invalid-feedback">{{ errors.termsAccepted }}</div>
                            </div>

                            <button type="submit" class="btn btn-primary w-100">REQUEST A CALL BACK</button>
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
                propertyType: '',
                termsAccepted: false
            },
            errors: {},
            billRanges: [
                '₹1,000 - ₹3,000',
                '₹3,001 - ₹5,000',
                '₹5,001 - ₹10,000',
                '₹10,001 - ₹15,000',
                '₹15,001+'
            ]
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
                // Handle form submission here
                console.log('Form submitted:', this.formData)
                // You can emit an event or call an API here
                this.$emit('form-submitted', this.formData)
            }
        }
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