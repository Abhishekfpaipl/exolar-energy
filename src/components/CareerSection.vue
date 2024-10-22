<template>
    <div class="container p-0">
        <div class="text-start mb-5">
            <p class="text-muted text-uppercase mb-1">Career</p>
            <h2 class="display-5 text-uppercase " style="color: var(--bg-primary);">HELP US TO MOULD INNOVATION A LOT
                BETTER</h2>
        </div>
        <!-- Application Form Section -->
        <div class="my-5">
            <p class="mb-4"> We constantly endeavour to create an environment in which our
                resources can take the liberty to perform well. We believe that our success as a company is the result
                of every team member's personal achievement. Come join us and explore a challenging career with perfect
                work culture.</p>

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
                            <input v-model="form.mobileNo" type="tel" class="form-control bg-light" id="mobileNo"
                                placeholder="Mobile No" required>
                            <label for="mobileNo">Mobile No</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input v-model="form.alternateNo" type="tel" class="form-control bg-light" id="alternateNo"
                                placeholder="Alternate No">
                            <label for="alternateNo">Alternate No</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input v-model="form.emailId" type="email" class="form-control bg-light" id="emailId"
                                placeholder="Email ID" required>
                            <label for="emailId">Email ID</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input v-model="form.dateOfBirth" type="date" class="form-control bg-light" id="dateOfBirth"
                                placeholder="Date of Birth" required>
                            <label for="dateOfBirth">Date of Birth</label>
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
                            <input v-model="form.academicQualifications" type="text" class="form-control bg-light"
                                id="academicQualifications" placeholder="Academic Qualifications" required>
                            <label for="academicQualifications">Academic Qualifications</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input v-model="form.totalYearsOfExperience" type="number" class="form-control bg-light"
                                id="totalYearsOfExperience" placeholder="Total Years of Experience" required>
                            <label for="totalYearsOfExperience">Total Years of Experience</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input v-model="form.currentSalary" type="number" class="form-control bg-light"
                                id="currentSalary" placeholder="Current Salary" required>
                            <label for="currentSalary">Current Salary</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input v-model="form.expectedSalaryPackage" type="number" class="form-control bg-light"
                                id="expectedSalaryPackage" placeholder="Expected Salary Package" required>
                            <label for="expectedSalaryPackage">Expected Salary Package</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input v-model="form.joiningBy" type="date" class="form-control bg-light" id="joiningBy"
                                placeholder="Joining By" required>
                            <label for="joiningBy">Joining By</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <select v-model="form.noticePeriod" class="form-select bg-light" id="noticePeriod" required>
                                <option value="" disabled selected>Notice Period</option>
                                <option value="immediate">Immediate</option>
                                <option value="15days">15 Days</option>
                                <option value="30days">30 Days</option>
                            </select>
                            <label for="noticePeriod">Notice Period</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating">
                            <input v-model="form.presentCompanyAndDesignation" type="text" class="form-control bg-light"
                                id="presentCompanyAndDesignation" placeholder="Present Company and Designation"
                                required>
                            <label for="presentCompanyAndDesignation">Present Company and Designation</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating">
                            <input @change="handleFileUpload" type="file" class="form-control bg-light"
                                id="resumeUpload" accept=".doc,.docx" placeholder="Present Company and Designation"
                                required>
                            <label for="resumeUpload">Upload Your Resume/CV</label>
                        </div>

                    </div>
                    <!-- <div class="col-12">
                        <button type="submit" class="btn btn-danger w-100">Submit asda</button>
                    </div> -->
                </div>
            </form>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                applicantName: '',
                mobileNo: '',
                alternateNo: '',
                emailId: '',
                dateOfBirth: '',
                howDidYouHearAboutUs: '',
                academicQualifications: '',
                totalYearsOfExperience: '',
                currentSalary: '',
                expectedSalaryPackage: '',
                joiningBy: '',
                noticePeriod: '',
                presentCompanyAndDesignation: '',
                resume: null
            }
        }
    },
    methods: {
        handleFileUpload(event) {
            this.form.resume = event.target.files[0]
        },
        submitForm() {
            //         const phoneNumber = '919711256073';
            //         const message = `Name: ${this.form.applicantName}%0A
            // Mobile: ${this.form.mobileNo}%0A
            // Alternate Mobile: ${this.form.alternateNo}%0A
            // Email: ${this.form.emailId}%0A
            // Date of Birth: ${this.form.dateOfBirth}%0A
            // How you heard about us: ${this.form.howDidYouHearAboutUs}%0A
            // Qualification: ${this.form.academicQualifications}%0A
            // Total Years of Experience: ${this.form.totalYearsOfExperience}%0A
            // Current Salary: ${this.form.currentSalary}%0A
            // Expected Salary: ${this.form.expectedSalaryPackage}%0A
            // Joining By: ${this.form.joiningBy}%0A
            // Notice Period: ${this.form.noticePeriod}%0A
            // Present Company and Designation: ${this.form.presentCompanyAndDesignation}`;

            //         const url = `https://wa.me/${phoneNumber}?text=${message}`;
            //         window.open(url, '_blank');
            console.log('send')
        }

    }
}
</script>