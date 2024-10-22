<template>
    <div class="container mt-4">
        <div class="text-start mb-5">
            <p class="text-muted mb-1 text-uppercase">Industry</p>
            <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Industries we provide our services
            </h2>
        </div>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div v-for="(item, index) in links" :key="index" class="col">
                <div class="card h-100 border rounded-0" v-observe>
                    <div class="card-body d-flex align-items-center">
                        <img :src="item.image" :alt="item.name" style="height: 50px; width: 50px; object-fit: contain;">
                        <span class="ms-3 fw-bold">{{ item.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { id: 1, name: 'Steel', image: "/img/industry/steel.png", },
                { id: 2, name: 'Aluminium Cable', image: "/img/industry/aluminium-cable.png", },
                { id: 3, name: 'Biodegradable', image: "/img/industry/bio.png", },
                { id: 4, name: 'Cement', image: "/img/industry/cement.png", },
                { id: 5, name: 'Crusher', image: "/img/industry/crusher.png", },
                { id: 6, name: 'Engineering', image: "/img/industry/engineering.png", },
                { id: 7, name: 'Mining', image: "/img/industry/mining.png", },
                { id: 8, name: 'Paper', image: "/img/industry/paper.png", },
                { id: 9, name: 'Pharma', image: "/img/industry/pharma.png", },
                { id: 10, name: 'Sugar', image: "/img/industry/sugar.png", },
                { id: 11, name: 'Wind Mill', image: "/img/industry/wind-mill.png", },

            ]
        };
    }
};
</script>

<style scoped>
.card-body i {
    font-size: 1.5rem;
}
</style>