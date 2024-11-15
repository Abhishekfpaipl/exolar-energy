<template>
    <div>
        <div class="container">

            <div class="row align-items-center ">
                <div class="col-md-6">
                    <div class="text-start mb-5">
                        <p class="text-muted mb-1 text-uppercase">Exolar Energy</p>
                        <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Why choose us</h2>
                    </div>
                    <div id="carouselExampleAutoplaying" class="carousel slide mb-4" data-bs-ride="carousel"
                        data-bs-interval="5000">
                        <div class="carousel-inner">
                            <div v-for="(image, index) in images" :key="index"
                                :class="['carousel-item', { active: index === 0 }]">
                                <div class="d-md-flex justify-content-center align-items-center d-none">
                                    <img :src="image" class="d-block" alt="Carousel Image" style="width: 50%;" />
                                </div>
                                <img :src="image" class="d-block d-md-none" alt="Carousel Image" style="width: 100%;" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="/img/why-choose.jpg" class="w-75" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                "/img/why-choose/1.png",
                "/img/why-choose/2.png",
                "/img/why-choose/3.png",
                "/img/why-choose/4.png",
                "/img/why-choose/5.png",
                "/img/why-choose/6.png",
            ],
        };
    },
};
</script>