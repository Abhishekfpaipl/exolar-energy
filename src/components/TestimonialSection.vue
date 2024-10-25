<template>
    <div class="container my-5 text-dark">
        <div class="text-start mb-5">
            <p class="text-muted mb-1 text-uppercase">Exolar Energy</p>
            <div class="d-md-flex justify-content-between align-items-center">
                <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Why choose us</h2>
                <!-- <router-link to="/testimonial" class="position-absolute end-0 text-decoration-none pe-md-5 pe-1"
                    style="color: var(--bg-primary);">
                    See All <i class="bi bi-arrow-right"></i>
                </router-link> -->
            </div>
        </div>


        <article :class="['wrapper', { 'wrapper--vertical': isVertical }]" class="pb-5">
            <div class="marquee" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group mt-5" :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container bg-light border position-relative rounded p-2 ">
                            <div class="card border-0">
                                <div class="card-header d-flex flex-column justify-content-center align-items-center">
                                    <div class="rounded-circle overflow-hidden border border-white bg-light border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                    <p class="fw-bold smaller mb-0 mt-0 text-ellipsis1">{{ card.title }}</p>
                                </div>
                                <div class="card-body bg-white py-2 px-1" style="max-width: 250px;">
                                    <p class="fw-bold smaller mb-0 mt-0 text-ellipsis1">{{ card.name }}</p>
                                    <p class="text-dark smaller mb-0 text-ellipsis3">{{ card.description }} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group mt-5"
                    :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container bg-light border position-relative rounded p-2 ">
                            <div class="card border-0">
                                <div class="card-header d-flex flex-column justify-content-center align-items-center">
                                    <div class="rounded-circle overflow-hidden border border-white bg-light border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                    <p class="fw-bold smaller mb-0 mt-0 text-ellipsis1">{{ card.title }}</p>
                                </div>
                                <div class="card-body bg-white py-2 px-1" style="max-width: 250px;">
                                    <p class="fw-bold smaller mb-0 mt-0 text-ellipsis1">{{ card.name }}</p>
                                    <p class="text-dark smaller mb-0 text-ellipsis3">{{ card.description }} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="marquee marquee--reverse" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group mt-5" :style="{ 'animation-direction': isReverse ? 'normal' : 'reverse' }">
                    <div class="" v-for="(card, index) in cards2" :key="index">
                        <div class="card-container bg-light border position-relative rounded p-2 ">
                            <div class="card border-0">
                                <div class="card-header d-flex flex-column justify-content-center align-items-center">
                                    <div class="rounded-circle overflow-hidden border border-white bg-light border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                    <p class="fw-bold smaller mb-0 mt-0 text-ellipsis1">{{ card.title }}</p>
                                </div>
                                <div class="card-body bg-white py-2 px-1" style="max-width: 250px;">
                                    <p class="fw-bold smaller mb-0 mt-0 text-ellipsis1">{{ card.name }}</p>
                                    <p class="text-dark smaller mb-0 text-ellipsis3">{{ card.description }} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group mt-5"
                    :style="{ 'animation-direction': isReverse ? 'normal' : 'reverse' }">
                    <div class="" v-for="(card, index) in cards2" :key="index">
                        <div class="card-container bg-light border position-relative rounded p-2 ">
                            <div class="card border-0">
                                <div class="card-header d-flex flex-column justify-content-center align-items-center">
                                    <div class="rounded-circle overflow-hidden border border-white bg-light border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                    <p class="fw-bold smaller mb-0 mt-0 text-ellipsis1">{{ card.title }}</p>
                                </div>
                                <div class="card-body bg-white py-2 px-1" style="max-width: 250px;">
                                    <p class="fw-bold smaller mb-0 mt-0 text-ellipsis1">{{ card.name }}</p>
                                    <p class="text-dark smaller mb-0 text-ellipsis3">{{ card.description }} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="marquee" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group mt-5" :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards3" :key="index">
                        <div class="card-container bg-light border position-relative rounded p-2 ">
                            <div class="card border-0">
                                <div class="card-header d-flex flex-column justify-content-center align-items-center">
                                    <div class="rounded-circle overflow-hidden border border-white bg-light border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                    <p class="fw-bold smaller mb-0 mt-0 text-ellipsis1">{{ card.title }}</p>
                                </div>
                                <div class="card-body bg-white py-2 px-1" style="max-width: 250px;">
                                    <p class="fw-bold smaller mb-0 mt-0 text-ellipsis1">{{ card.name }}</p>
                                    <p class="text-dark smaller mb-0 text-ellipsis3">{{ card.description }} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group mt-5"
                    :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards3" :key="index">
                        <div class="card-container bg-light border position-relative rounded p-2 ">
                            <div class="card border-0">
                                <div class="card-header d-flex flex-column justify-content-center align-items-center">
                                    <div class="rounded-circle overflow-hidden border border-white bg-light border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                    <p class="fw-bold smaller mb-0 mt-0 text-ellipsis1">{{ card.title }}</p>
                                </div>
                                <div class="card-body bg-white py-2 px-1" style="max-width: 250px;">
                                    <p class="fw-bold smaller mb-0 mt-0 text-ellipsis1">{{ card.name }}</p>
                                    <p class="text-dark smaller mb-0 text-ellipsis3">{{ card.description }} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>

export default {
    name: "AutoScrolling",
    props: {
        brandColorOne: {
            type: String,
            default: '#000'
        }
    },
    data() {
        return {
            isVertical: false,
            isReverse: false,
            cards: [
                {
                    "image": "/img/why-choose/credit-card-icon.png",
                    "title": "Credit Card",
                    "description": "Secure and convenient payment options available via credit card."
                },
                {
                    "image": "/img/why-choose/customer-service-icon.png",
                    "title": "Customer Service",
                    "description": "Dedicated customer support to assist you at every step."
                },
                {
                    "image": "/img/why-choose/end-to-end-delivery.png",
                    "title": "End to End Delivery",
                    "description": "Seamless delivery service from start to finish, ensuring timely arrival."
                },
                {
                    "image": "/img/why-choose/quick-install.png",
                    "title": "Quick Install",
                    "description": "Fast and efficient installation for minimal disruption and downtime."
                },
                {
                    "image": "/img/why-choose/survey-icon.png",
                    "title": "Survey",
                    "description": "Comprehensive surveys to ensure accurate planning and execution."
                },
                {
                    "image": "/img/why-choose/trained-technicians.png",
                    "title": "Trained Technicians",
                    "description": "Expert technicians providing professional and reliable services."
                },
            ],
            cards2: [
                {
                    "image": "/img/why-choose/credit-card-icon.png",
                    "title": "Credit Card",
                    "description": "Secure and convenient payment options available via credit card."
                },
                {
                    "image": "/img/why-choose/customer-service-icon.png",
                    "title": "Customer Service",
                    "description": "Dedicated customer support to assist you at every step."
                },
                {
                    "image": "/img/why-choose/end-to-end-delivery.png",
                    "title": "End to End Delivery",
                    "description": "Seamless delivery service from start to finish, ensuring timely arrival."
                },
                {
                    "image": "/img/why-choose/quick-install.png",
                    "title": "Quick Install",
                    "description": "Fast and efficient installation for minimal disruption and downtime."
                },
                {
                    "image": "/img/why-choose/survey-icon.png",
                    "title": "Survey",
                    "description": "Comprehensive surveys to ensure accurate planning and execution."
                },
                {
                    "image": "/img/why-choose/trained-technicians.png",
                    "title": "Trained Technicians",
                    "description": "Expert technicians providing professional and reliable services."
                },
            ],
            cards3: [
                {
                    "image": "/img/why-choose/credit-card-icon.png",
                    "title": "Credit Card",
                    "description": "Secure and convenient payment options available via credit card."
                },
                {
                    "image": "/img/why-choose/customer-service-icon.png",
                    "title": "Customer Service",
                    "description": "Dedicated customer support to assist you at every step."
                },
                {
                    "image": "/img/why-choose/end-to-end-delivery.png",
                    "title": "End to End Delivery",
                    "description": "Seamless delivery service from start to finish, ensuring timely arrival."
                },
                {
                    "image": "/img/why-choose/quick-install.png",
                    "title": "Quick Install",
                    "description": "Fast and efficient installation for minimal disruption and downtime."
                },
                {
                    "image": "/img/why-choose/survey-icon.png",
                    "title": "Survey",
                    "description": "Comprehensive surveys to ensure accurate planning and execution."
                },
                {
                    "image": "/img/why-choose/trained-technicians.png",
                    "title": "Trained Technicians",
                    "description": "Expert technicians providing professional and reliable services."
                },
            ]
        };
    },
    methods: {
        toggleDirection() {
            this.isVertical = !this.isVertical;
            this.isReverse = !this.isReverse;
        },
    },
};
</script>

<style>
:root {
    --color-text: navy;
    --color-bg: papayawhip;
    --color-bg-accent: #ecdcc0;
    --size: clamp(10rem, 1rem + 40vmin, 30rem);
    --gap: calc(var(--size) / 8);
    --duration: 20s;
    --scroll-start: 0;
    --scroll-end: calc(-100% - var(--gap));
}

.marquee {
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: var(--gap);
    mask-image: linear-gradient(var(--mask-direction, to right),
            hsl(0 0% 0% / 0),
            hsl(0 0% 0% / 1) 20%,
            hsl(0 0% 0% / 1) 80%,
            hsl(0 0% 0% / 0));
}

.marquee__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: var(--gap);
    min-width: 100%;
    animation: scroll-x var(--duration) linear infinite;
}

@media (prefers-reduced-motion: reduce) {
    .marquee__group {
        animation-play-state: paused;
    }
}

.marquee--vertical {
    --mask-direction: to bottom;
}

.marquee--vertical,
.marquee--vertical .marquee__group {
    flex-direction: column;
}

.marquee--vertical .marquee__group {
    animation-name: scroll-y;
}

.marquee--reverse .marquee__group {
    animation-direction: reverse;
    animation-delay: -3s;
}

@keyframes scroll-x {
    from {
        transform: translateX(var(--scroll-start));
    }

    to {
        transform: translateX(var(--scroll-end));
    }
}

@keyframes scroll-y {
    from {
        transform: translateY(var(--scroll-start));
    }

    to {
        transform: translateY(var(--scroll-end));
    }
}

/* Parent wrapper */
.wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    margin: auto;
    max-width: 100vw;
}

.wrapper--vertical {
    flex-direction: row;
    height: 100vh;
}


@keyframes fade {
    to {
        opacity: 0;
        visibility: hidden;
    }
}

.card {
    height: 100%
}

.card-header {
    background: linear-gradient(180deg, rgba(35, 122, 191, 1) 0%, rgba(255, 255, 255, 1) 95%);
    padding: 10px;
    text-align: center;
    border-bottom: 0px !important;
}

.card-body {
    padding: 20px;
    text-align: center;
}

.card-container {
    min-width: 15rem !important
}

/* Quotation marks */
.card-container::before {
    content: '“';
    position: absolute;
    font-size: 2em;
    /* color: #4ecdc4; */
    color: white !important;
    font-family: sans-serif;
}

.card-container::after {
    content: '”';
    position: absolute;
    font-size: 2em;
    color: white !important;
    font-family: sans-serif;
}

.card-container::before {
    top: 0;
    left: -5px;
}

.card-container::after {
    bottom: -20px;
    right: -5px;
}
</style>