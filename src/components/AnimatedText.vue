<template>
    <div class="d-flex flex-column align-items-center mb-5">
        <div class="d-flex justify-content-center align-items-center">
            <h2 :data-text="text" class="text-uppercase display-1">{{ text }}</h2>
        </div>
        <svg viewBox="0 0 960 300">
            <symbol id="s-text">
                <text text-anchor="middle" x="50%" y="80%"> Exolar Energy.</text>
                <text text-anchor="middle" x="50%" y="80%"> Exolar Energy.</text>
            </symbol>

            <g class="g-ants">
                <use xlink:href="#s-text" class="text-copy" v-for="n in 5" :key="n"></use>
            </g>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'ExolarTextAnimation',
    data() {
        return {
            text: 'welcome'
        };
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');


svg {
    display: block;
    font: 7em 'Montserrat';
    width: 100%;
    height: 300px !important;
}

@media (max-width: 768px) {
    svg {
        display: block;
        font: 7em 'Montserrat';
        width: 100%;
        height: 100% !important;
    }
}

.text-copy {
    fill: none;
    stroke: white;
    stroke-dasharray: 6% 29%;
    stroke-width: 5px;
    stroke-dashoffset: 0%;
    animation: stroke-offset 5.5s infinite linear;
}

.text-copy:nth-child(1) {
    stroke: var(--bg-third);
    animation-delay: -1s;
}

.text-copy:nth-child(2) {
    stroke: var(--bg-primary);
    animation-delay: -2s;
}

.text-copy:nth-child(3) {
    stroke: #797878;
    animation-delay: -3s;
}

.text-copy:nth-child(4) {
    stroke: #1B9600;
    animation-delay: -4s;
}

.text-copy:nth-child(5) {
    stroke: #797878;
    animation-delay: -5s;
}

@keyframes stroke-offset {
    100% {
        stroke-dashoffset: -35%;
    }
}

h2 {
    position: relative;
    color: var(--bg-primary);
    -webkit-text-stroke: 0.3vw grey;
    text-transform: uppercase;
    /* font-size: 8vw; */
}

/* Adjust font size for larger screens */
@media (min-width: 768px) {
    h2 {
        font-size: 8vw;
    }
}

@media (min-width: 1024px) {
    h2 {
        font-size: 6vw;
    }
}

h2::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: var(--bg-third);
    -webkit-text-stroke: 0vw var(--bg-primary);
    border-right: 2px solid var(--bg-primary);
    overflow: hidden;
    animation: animate 6s linear infinite;
}

@keyframes animate {

    0%,
    10%,
    100% {
        width: 0;
    }

    70%,
    90% {
        width: 100%;
    }
}
</style>