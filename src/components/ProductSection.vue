<template>
    <div class="container">
        <div class="text-start mb-5">
            <p class="text-muted mb-1 text-uppercase">Products</p>
            <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Check Our Products</h2>
        </div>
        <div class="row">
            <div v-for="(product, index) in products" :key="index" class="col-md-4 mb-4" v-observe>
                <!-- <div class="card product-card h-100" @mouseenter="expandCard(index)" @mouseleave="collapseCard(index)"> -->
                <div class="card product-card h-100 rounded-0 shadow p-3 px-4">
                    <p class="text-start fw-bold ">{{ product.title }}</p>
                    <img :src="product.image" class="img-fluid" style="height: 300px;object-fit: cover;"
                        :alt="product.title">
                    <div class="card-body d-flex flex-column px-0">
                        <div class="d-flex justify-content-between align-items-center gap-2">
                            <button class="rounded-0 btn w-50" style="background-color: var(--bg-primary);">Buy
                                Now</button>
                            <button class="rounded-0 btn w-50" style="background-color: var(--bg-primary);">Buy
                                Now</button>
                        </div>
                        <p class="card-text mt-2">{{ product.description }}</p>
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
            products: [
                {
                    title: 'For the rush to finish faster',
                    image: 'https://clgoilindia.com/demo/assets/images/service/Grease-01.jpg',
                    // description: 'We are engaged in offering a wide range of good Quality to our clients.',
                    expanded: false
                },
                {
                    title: 'For long rides where the road never ends',
                    image: 'https://clgoilindia.com/demo/assets/images/service/Grease-02.jpg',
                    // description: 'High-quality lubricants for all types of vehicles.',
                    expanded: false
                },
                {
                    title: 'For the sneaky zips in the city',
                    image: 'https://clgoilindia.com/demo/assets/images/service/Grease-03.jpg',
                    // description: 'Specialized lubricants for industrial machinery and equipment.',
                    expanded: false
                }
            ]
        }
    },
    methods: {
        expandCard(index) {
            this.products[index].expanded = true;
        },
        collapseCard(index) {
            this.products[index].expanded = false;
        }
    }
}
</script>

<style scoped>
.product-card {
    transition: all 0.3s ease;
    overflow: hidden;
}

.product-card:hover {
    border: 1px solid var(--bg-primary);
    transform: translateY(-10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.before-enter {
    opacity: 0;
    transform: translateY(80px);
    transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}

.enter {
    opacity: 1;
    transform: translateY(0);
}
</style>