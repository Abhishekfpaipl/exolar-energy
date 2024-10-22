<template>
    <div class=" container">
        <div class="py-2 mb-4">
            <h1 class="text-center text-capitalize">{{ title }}</h1> 
            <p class="text-center text-capitalize fs-4">{{ subtitle }}</p>
        </div>
        <div class="row row-cols-1 row-cols-md-1 row-cols-lg-4 g-3">
            <div class="col" v-for="(lead, index) in values" :key="index">
                <div class="position-relative w-100 d-flex justify-content-center align-items-center flex-fill">
                    <div class="card position-relative w-100 p-2 d-flex flex-column bg-dark text-dark">
                        <div class="image text-center">
                            <img :src="lead.image"
                                  width="300" style="object-fit: cover;" class="w-100" alt=""> 
                            <p class="text-capitalize text-ellipsis2 fs-1">{{ lead.title }}</p>
                        </div>
                        <div class="content small text-ellipsis4">
                            <h1 class="text-center">{{ lead.title }}</h1>
                            <h5 class="text-center">{{ lead.description }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LeadManagement",
    props: {
        values: {
            type: Array,
        },
        title: {
            type: String,
        },
        subtitle: {
            type: String,
        },
    },
}
</script>

<style scoped>
.card:hover {
    background-color:white !important;
    color: var(--brand-color) !important;
    transition: 0.3s ease-in-out;
}

.card {
    max-width: 500px;
    min-height: 400px;
    height: 400px;
    transition: 0.3s ease-in-out;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color:white !important;
}

.container .card .image {
    position: relative;
    width: 100%;
    max-width: 260px;
    margin: 0 auto;
    z-index: 1;
    transition: 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.container .card .image i {
    font-size: 2rem;
}

.container .card .content {
    position: relative;
    color: #000;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    transition: visibility 0s, opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
    overflow: hidden;
}

.container .card:hover .content {
    visibility: visible;
    opacity: 1;
    max-height: 400px;
    /* Adjust as needed */
    transition-delay: 0.2s;
}

.container .card:hover .image {
    transform: translateY(-10px);
    display: none;
}

.container .card:hover .image i {
    display: none;

}
</style>
