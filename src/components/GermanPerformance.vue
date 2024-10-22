<template>
    <div class="container my-5">
        <div class="text-start mb-5">
            <p class="text-muted mb-1 text-uppercase">About Our Global Business</p>
            <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Unparalleled Performance in Bulk
                Manufacturing</h2>
        </div>
        <!-- <h2 class="text-center mb-5">About Our Global Business: Unparalleled Performance in Wholesale Manufacturing</h2> -->
        <div class="row">
            <div class="col-md-4 mb-4" v-for="(item, index) in businessFeatures" :key="index">
                <div class="card h-100 border-0 shadow rounded-0" style="background-color: var(--bg-primary);">
                    <div class="card-body text-center">
                        <div class="mb-4">
                            <i :class="item.icon" class="text-warning fs-1"></i>
                        </div>
                        <h3 class="card-title h5 mb-3 text-white">{{ item.title }}</h3>
                        <p class="card-text text-white">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GermanPerformance',
    data() {
        return {
            businessFeatures: [
                {
                    icon: 'bi bi-award',
                    title: 'German Engineering Excellence',
                    description: 'You want more info about V8 products? They are manufactured according to a German formula, which makes them unparalleled around the world of performance.'
                },
                {
                    icon: 'bi bi-droplet-half',
                    title: 'Specialized Product Range',
                    description: 'From high-performance motor oils for vehicles to industrial lubricants designed to withstand extreme conditions.'
                },
                {
                    icon: 'bi bi-globe',
                    title: 'Environmental Responsibility',
                    description: 'V8 lubricants are not only designed for exceptional performance but also engineered to minimize global environmental impact.'
                }
            ]
        }
    }
}
</script>

<style scoped>
.card {
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
}
</style>