<template>
    <div style="padding-top: 60px;">
        <SectionTopBanner />
        <div class="container mb-5 pb-5" style="margin-top:-40px" v-observe>
            <div class="text-white p-4" style="background-color:var(--bg-primary);">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <select v-model="selectedState" @change="updateCities" class="form-select">
                            <option value="" disabled selected>State</option>
                            <option v-for="state in states" :key="state.name" :value="state.name">{{ state.name }}
                            </option>
                        </select>
                    </div>
                    <div class="col-md-4 mb-3">
                        <select v-model="selectedCity" @change="updatePincodes" class="form-select">
                            <option value="" disabled selected>City</option>
                            <option v-for="city in filteredCities" :key="city.name" :value="city.name">{{ city.name }}
                            </option>
                        </select>
                    </div>
                    <div class="col-md-3 mb-3">
                        <select v-model="selectedPincode" class="form-select">
                            <option value="" disabled selected>Pincode</option>
                            <option v-for="pincode in pincodes" :key="pincode" :value="pincode">{{ pincode }}</option>
                        </select>
                    </div>
                    <div class="col-md-1 mb-3">
                        <button @click="locateDealers" :disabled="!isButtonEnabled" class="btn btn-dark">Check</button>
                    </div>
                </div>
            </div>
        </div>
        <p v-if="!showDealers" class="mb-5 pb-5 fs-5">
            Please enter your state, city and pincode to check the availability of the dealership in your area.
        </p>
        <div v-if="showDealers" class="my-5 pb-5">
            <div class="d-flex justify-content-center align-items-center">
                <img src="/img/congrats.png" class=" d-md-block d-none" style="width: 500px" alt="Rooftop solar panel installation in Delhi by Exolar Energy">
                <img src="/img/congrats.png" class=" d-md-none d-flex justify-content-center align-items-center"
                    style="width: 100%;" alt="Rooftop solar panel installation in Delhi by Exolar Energy">
            </div>
            <p class="display-5 fw-bold" style="color:black !important">Dealership in your area is available, kindly
                fill the form for dealership. </p>
            <router-link to="/dealership" class="btn text-white fs-4 text-capitalize mt-3"
                style="background-color:var(--bg-primary)">Click here for
                dealership</router-link>
        </div>
        <router-link to="/contact-us" class="text-muted ">
            <p class="mb-5 pb-5">
                Kindly contact us for any other kind of query .
            </p>
        </router-link>


    </div>
</template>

<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';

export default {
    name: 'CheckDealer',
    components: {
        SectionTopBanner
    },
    data() {
        return {
            selectedState: '',
            selectedCity: '',
            selectedPincode: '',
            cities: [],
            pincodes: [],
            filteredCities: [],
            email: '',
            captcha: '',
            showDealers: false, // Added data property to control visibility
            title: '',
        }
    },
    computed: {
        states() {
            return this.$store.getters['states/getStates']
        },
        isButtonEnabled() {
            return this.selectedState && this.selectedCity && this.selectedPincode;
        },
    },
    methods: {
        updateCities() {
            const selectedState = this.states.find(state => state.name === this.selectedState);
            this.filteredCities = selectedState ? selectedState.cities : [];
            this.selectedCity = '';
            this.selectedPincode = '';
            this.pincodes = [];
        },
        updatePincodes() {
            const selectedState = this.states.find(state => state.name === this.selectedState);
            const selectedCity = selectedState ? selectedState.cities.find(city => city.name === this.selectedCity) : null;
            this.pincodes = selectedCity ? selectedCity.pincodes : [];
            this.selectedPincode = '';
        },
        locateDealers() {
            // Implement dealer location logic here
            console.log('Locating dealers with:', {
                state: this.selectedState,
                city: this.selectedCity,
                pincode: this.selectedPincode
            });
            // Set showDealers to true to display the dealers section
            this.showDealers = true;
            // You would typically make an API call here with the selected values
        },
    }
}
</script>
