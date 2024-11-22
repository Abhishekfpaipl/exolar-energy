<template>
    <div class="container">
        <div class="text-start mb-5">
            <p class="text-muted mb-1 text-uppercase">Our</p>
            <h1 class="display-5 text-uppercase" style="color: var(--bg-primary);"> Success Story</h1>
        </div>
        <div class="row mt-5">
            <div class="col-12 position-relative  d-flex align-items-center justify-content-center pt-5">
                <div class="card rounded-3">
                    <div class="image rounded-3">
                        <img href="#" :src="image" class="rounded-3" alt="Card image">
                    </div>
                    <div class="content">
                        <h1 class="mt-4 pt-2 fs-3">{{ title }}</h1>
                        <p v-if="post" class="text-ellipsis2">{{ post }}</p>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-5 text-start">
                Exolar Energy is a new age company that provides the combination of efficient economics and
                sustainability through use of solar energy.
                Our vision is to enable the world maximise the use of distributed solar energy. Our mission is to have
                every potential roof solar systems installed.
                Rooftop solar is most financially beneficial now and we, at Exolar, are at the forefront of the solar
                revolution throughdistributed solar.
                We bring together our expertise and experience inend to end EPC services, to electricity consumers of
                all categories. Our clients have benefited from the following.
                <ul class="text-start my-4">
                    <li class="" v-for="(point, index) in points" :key="index">{{ point }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tests: Array
    },
    data() {
        return {
            image: 'img/logo.png',
            title: "Exolar Energy",
            post: "Owner",
            points: [
                "Optimal combination of cost, technology and benefits",
                "Plant designs of global standard using latest software",
                "Best in class components that are suggested based on our experience and associations",
                "Most effective and efficient execution",
                "O & M support and warranty administration assistance",
            ]
        }
    }

};
</script>

<style scoped>
.card {
    position: relative;
    max-width: 300px;
    height: 215px;
    background-color: #fff;
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
}

.card:hover {
    height: 265px;
}

.image {
    position: relative;
    width: 230px;
    min-height: 230px;
    top: -40%;
    left: 0px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.image img {
    max-width: 100%;
    border-radius: 15px;
}

.content {
    position: relative;
    top: -140px;
    padding: 10px 15px;
    color: #111;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
}

.card:hover .content {
    margin-top: 30px;
    visibility: visible;
    opacity: 1;
    transition-delay: 0.2s;
}
</style>