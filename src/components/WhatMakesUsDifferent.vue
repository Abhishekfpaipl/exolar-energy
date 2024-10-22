<template>
    <div class="container">
        <div class="py-2 mb-4">
            <h3 class="text-center text-capitalize">{{ title }}</h3>
            <h1 class="text-center">{{ subTitle }}</h1>
         </div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
            <div class="col" v-for="(lead, index) in values" :key="index">
                <div class="position-relative w-100 d-flex justify-content-center align-items-center flex-fill">
                    <div class="card position-relative w-100 p-3 d-flex flex-column bg-light">
                        <div class="image text-center">
                            <i class="bi fs-4" :class="lead.icon"></i>
                            <p class="text-capitalize text-ellipsis2">{{ lead.title }}</p>
                        </div>
                        <div class="content small text-ellipsis4">
                            <small>{{ lead.description }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WhatMakesUsDifferent",
    props: {
        values: {
            type: Array,
        },
        title: {
            type: String,
        },
        subTitle: {
            type: String,
        },
    },
}
</script>

<style scoped>
.card:hover {
    background-color: var(--brand-color) !important;
    color: white !important;
}

.card {
    max-width: 300px;
    min-height: 120px;
    height: 120px; 
    transition: 0.3s ease-in-out;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    max-height: 100px;
    /* Adjust as needed */
    transition-delay: 0.2s;
}

.container .card:hover .image {
    transform: translateY(-10px);
    display: none;
}
.container .card:hover .image i{
    display: none;

}
</style>
