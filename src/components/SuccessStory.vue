<template>
    <div class="container py-5">
        <div class="row align-items-center justify-content-center">
            <div class="col-md-4 mb-4 mb-md-0">
                <div class="card border-0 shadow position-relative success-card">
                    <div class="card-img-top bg-light d-flex justify-content-center align-items-center p-4">
                        <img :src="image" alt="Exolar Energy Logo" class="img-fluid rounded-3 max-h-300">
                    </div>
                </div>
            </div>

            <div class="col-12 mt-5">
                <div class="mb-4">
                    <p class="lead text-secondary">
                        Exolar Energy is a new age company that provides the combination of efficient economics
                        and sustainability through use of solar energy. Our vision is to enable the world to
                        maximize the use of distributed solar energy. <br>
                        Our mission is to have every potential roof solar systems installed. Rooftop solar is
                        most financially beneficial now, and we, at Exolar, are at the forefront of the solar
                        revolution through distributed solar.
                    </p>
                    <p class="text-secondary">

                    </p>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SuccessStory',
    data() {
        return {
            image: '/img/logo.png',
            title: 'Exolar Energy',

        }
    }
}
</script>

<style scoped>
.max-h-300 {
    max-height: 300px;
    object-fit: contain;
}

.list-group-item {
    background-color: transparent;
}
</style>