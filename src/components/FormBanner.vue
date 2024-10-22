<template>
    <div class="" style="background-color: var(--bg-primary);">
        <div class="container">
            <div class="row d-flex align-items-center justify-content-center p-md-5 p-3 py-5">  
                <h3 class="text-white text-uppercase mb-0 text-center">{{ text }}</h3>
                <div class="text-center rounded">
                    <h1 class="text-white text-uppercase text-wrap mb-0">
                        <span v-if="service">{{ service }}</span>
                        <span v-if="customer">&nbsp;to&nbsp;{{ customer }}</span>
                    </h1> 
                    <p class="text-white text-center text-capitalize fs-5 mb-0">
                        <span v-if="category" class="text-uppercase">&nbsp;from&nbsp;{{ category }}</span>
                        <span v-if="place" class="text-uppercase">&nbsp;in&nbsp;{{ place }}</span>
                    </p>
                </div>
                <div class="col-12 col-md-6 align-items-center text-center text-md-start">
                    <img src="/img/formwelcome.svg" class="mt-3" style="width: 350px;max-width: 80%;" alt="">
                </div>
                <div class="col-12 col-md-6 d-flex flex-column mt-5 mt-md-3">
                    <h3 class="text-white text-capitalize">{{ formTitle }}</h3>
                    <form @submit.prevent="submitQuery()" class="mt-3 row g-3 needs-validation" novalidate>
                        <div class="w-100 form-floating mt-2">
                            <input type="text" class="form-control" placeholder="" v-model="name" required>
                            <label for="floatingInput" class="text-muted ms-2">Your Name</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <input type="tel" class="form-control" placeholder="Mobile" v-model="number" required>
                            <label class="ms-2 text-muted">Mobile No</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                v-model="note"></textarea>
                            <label for="floatingTextarea" class="ms-2 text-muted">Services Required</label>
                        </div>

                        <div class="col-12">
                            <button class="btn btn-warning py-2 fs-5 w-100" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FormBanner', 
    props:{ 
        service:{
            type: String, 
        },
        category:{
            type: String, 
        },
        place:{
            type: String, 
        },
        text:{
            type: String,
        },
        formTitle:{
            type: String,
            default: "Request a demo"
        },
        customer:{
            type: String,
            
        }
    },
    data() {
        return {
            name: "",
            email: "",
            number: "",
            businessName: "",
            note: "",
            title: this.$route.params.name
        }
    }
}
</script>
