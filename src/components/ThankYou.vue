<template>
  <!-- <div class="text-container py-5">
    <h2 :data-text="text" class="">{{ text }}</h2>
  </div> -->
  <!-- <button class="btn btn-warning my-5 fs-3 text-capitalize" data-bs-toggle="modal"
    data-bs-target="#siteVisitModal">Contact Us Today for More Information<i class="bi bi-arrow-right visit"></i></button> -->

  <!-- <router-link to="/contact-us" class="btn btn-success fs-3 text-capitalize">Contact Us Today for More Information<i
      class="bi bi-arrow-right visit"></i></router-link> -->
  <!-- <div class="container-fluid shadow" style="background-color: var(--bg-light ) ;">
    <router-link to="/contact-us" class="text-decoration-none text-dark">
      <div class="row align-items-center py-4">
        <div class="col-md-6">
          <img src="/img/contactFooter.png" alt="subscribe newsletter" style="width: 200px; max-width: 90%;">
        </div>
        <div class="col-md-6 mb-4">
          <p class="display-5 text-uppercase fw-bold">Have some more query</p>
          <p class="text-center text-uppercase fs-3">Kindly<br><span class="fw-bold text-warning display-1"></span></p>
          <button class="btn btn-warning w-50 fs-3">Contact Us <i class="bi bi-arrow-right visit"></i></button>
        </div>
      </div>
    </router-link>
  </div> -->
  <div class="container-fluid py-5" style="background-color: var(--bg-primary);">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-4 display-4 text-white">
        <i class="bi bi-telephone me-2"></i>
        <span class="">Call Today</span>
        <p class="">+911146568831</p>
      </div>
      <div class="col-md-8 ">
        <div class="card border-0 " style="background-color: var(--bg-primary);">
          <div class="card-body">
            <h1 class="text-white text-center mb-4">Enquire Now</h1>
            <form>
              <div class="row">
                <div class="col-md-6 ">
                  <div class=" mb-3">
                    <!-- <label for="Name" class="text-start d-block text-white">Name</label> -->
                    <input type="text" class="form-control bg-transparent text-white custom-placeholder"
                      placeholder="Name" v-model="name" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <!-- <label for="Mobile number" class="text-start d-block text-white">Mobile number</label> -->
                    <input type="tel" class="form-control bg-transparent text-white custom-placeholder"
                      placeholder="Mobile number*" v-model="mobileNumber" required>
                  </div>
                </div>
                <div class="col-md-6 ">
                  <div class="mb-3">
                    <input type="text" class="form-control bg-transparent text-white custom-placeholder"
                      placeholder="pincode*" v-model="pincode" required>
                    <!-- <label for="pincode">Pincode</label> -->
                  </div>
                </div>
                <div class="col-md-6 ">
                  <div class="mb-3">
                    <input type="email" class="form-control bg-transparent text-white custom-placeholder"
                      placeholder="Email*" v-model="email" required>
                    <!-- <label for="Email">Email</label> -->
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <select class="form-select bg-transparent custom-select" v-model="selectedOption">
                    <option value="" class="">I'm looking for</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                </div>
                <div class="col-md-6 ">
                  <div class=" mb-3">
                    <input type="number" class="form-control bg-transparent text-white custom-placeholder"
                      placeholder="Electricity Bill*" v-model="electricityBill" required>
                    <!-- <label for="electricityBill">Electricity Bill</label> -->
                  </div>
                </div>
                <div class="form-check mb-3">
                  <input type="checkbox" class="form-check-input" id="terms" v-model="termsAccepted" required>
                  <p class="text-start">
                    <label class="form-check-label text-white" for="terms">
                      I agree to Exolar Energy
                      <router-link to="/terms-&-conditions" class="text-white text-decoration-none fw-bold">Terms of Service</router-link>
                      <router-link to="/privacy-policy" class="text-white text-decoration-none fw-bold"> & Privacy Policy*</router-link>
                    </label>
                  </p> 
                </div>
              </div>
              <div class="text-center mt-4">
                <button type="submit" class="btn btn-warning">Submit Your Interest</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="wh-60 rounded position-fixed p-2 bg-warning" data-bs-toggle="modal" data-bs-target="#siteVisitModal"
    style="bottom: 20px; right: 5px;z-index: 10;">
    <img src="/img/enquiry.svg" alt="Rooftop solar panel installation in Delhi by Exolar Energy" width="30" height="30">
  </div>
  <FaqFormSection />

</template>

<script>

import FaqFormSection from '@/components/FaqFormSection.vue'
export default {
  name: 'CreativeTextAnimation',
  components: {
    FaqFormSection,
  },
  data() {
    return {
      text: 'Exolar.Energy',
      name: '',
      mobileNumber: '',
      pincode: '',
      email: '',
      selectedOption: '',
      electricityBill: null,
      termsAccepted: false
    };
  },
  methods: {
    submitForm() {
      // Add your form submission logic here
      console.log('Form submitted:', {
        name: this.name,
        mobileNumber: this.mobileNumber,
        pincode: this.pincode,
        email: this.email,
        selectedOption: this.selectedOption,
        electricityBill: this.electricityBill
      });
    }
  }
};
</script>

<style scoped>
.custom-placeholder::placeholder {
  color: rgba(255, 255, 255, 0.7);
  /* Example: Semi-transparent white */
  font-style: italic;
  /* Optional: Styling the placeholder text */
}

.custom-select {
  background-color: rgba(0, 0, 0, 0.5);
  /* Example: Semi-transparent black */
  color: white;
  /* Text color */
  border: 1px solid white;
  /* Optional: Border styling */
}

/* Style for dropdown options */
.custom-select option {
  background-color: black;
  /* Background color for dropdown options */
  color: white;
  /* Text color for options */
}

.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-primary);
  padding: 0 10px;
}

h2 {
  position: relative;
  color: #252839;
  -webkit-text-stroke: 0.3vw var(--bg-secondary);
  text-transform: uppercase;
  font-size: 8vw;
}

/* Adjust font size for larger screens */
@media (min-width: 768px) {
  h2 {
    font-size: 8vw;
  }
}

@media (min-width: 1024px) {
  h2 {
    font-size: 6vw;
  }
}

h2::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  -webkit-text-stroke: 0vw var(--bg-primary);
  border-right: 2px solid var(--bg-primary);
  overflow: hidden;
  animation: animate 6s linear infinite;
}

@keyframes animate {

  0%,
  10%,
  100% {
    width: 0;
  }

  70%,
  90% {
    width: 100%;
  }
}

.bg-orange {
  background-color: #ff9900;
}

.text-primary {
  color: #007bff;
}
</style>