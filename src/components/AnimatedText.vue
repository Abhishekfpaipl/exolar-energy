<template>
    <div class="exolarbg-light d-flex flex-column align-items-center">
        <h1 class="text-center mt-3">Welcome to</h1>
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
    name: 'ExolarTextAnimation'
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
 

svg {
    display: block;
    font: 7em 'Montserrat';
    width: 100%;
    height: 300px;
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
</style>