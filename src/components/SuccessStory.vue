<template>
    <div class="container py-5">
        <!-- <div class="text-center mb-5">
            <p class="text-muted text-uppercase mb-2">Our</p>
            <h1 class="display-5 text-primary text-uppercase">Success Story</h1>
        </div> -->
        <div class="text-center mb-5">
            <h2 class="display-5 text-uppercase fw-bold" style="color: var(--bg-primary)">
                Success Story
            </h2>
        </div>
        <div class="row align-items-center justify-content-center">
            <div class="col-md-4 mb-4 mb-md-0">
                <div class="card border-0 shadow position-relative success-card">
                    <div class="card-img-top bg-light d-flex justify-content-center align-items-center p-4">
                        <img :src="image" alt="Exolar Energy Logo" class="img-fluid rounded-3 max-h-300">
                    </div>
                    <!-- <div class="card-body text-center">
              <h3 class="card-title text-primary">{{ title }}</h3>
              <p class="card-text text-muted">Sustainable Solar Solutions</p>
            </div> -->
                </div>
            </div>

            <div class="col-12 mt-5">
                <div class="mb-4">
                    <p class="lead text-secondary">
                        Exolar Energy is a new age company that provides the combination of efficient economics
                        and sustainability through use of solar energy. Our vision is to enable the world to
                        maximize the use of distributed solar energy.
                    </p>
                    <p class="text-secondary">
                        Our mission is to have every potential roof solar systems installed. Rooftop solar is
                        most financially beneficial now, and we, at Exolar, are at the forefront of the solar
                        revolution through distributed solar.
                    </p>
                </div>

                <h4 class="mb-3 text-dark fw-bold">Our Clients Have Benefited From:</h4>
                <ul class="list-group list-group-flush">
                    <li v-for="(point, index) in points" :key="index"
                        class="list-group-item d-flex align-items-center px-0">
                        <i class="bi bi-check-circle text-success me-3"></i>
                        <span>{{ point }}</span>
                    </li>
                </ul>
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
            points: [
                'Optimal combination of cost, technology and benefits',
                'Plant designs of global standard using latest software',
                'Best in class components that are suggested based on our experience and associations',
                'Most effective and efficient execution',
                'O & M support and warranty administration assistance'
            ]
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