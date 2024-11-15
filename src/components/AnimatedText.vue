<template>
    <div id="text-spot">
        <h1 class="text-center display-3" style="font-family: Luckiest Guy;">Welcome to</h1>
        <div id="inner-text" :class="{ 'done-animating': doneAnimating }">
            <span v-for="(letter, index) in wordArray" :key="index" class="letter animate fs-4"
                :style="{ animationDelay: `${300 * index}ms` }" @animationend="onAnimationEnd(index)">
                {{ letter }}
            </span>
        </div>
        <!-- <form id="custom-text-form" @submit.prevent="submitText">
            <input type="text" id="custom-text" placeholder="customize this text" v-model="customText" />
            <input type="submit" value="go!" />
        </form> -->
    </div>
</template>

<script>
export default {
    name: "AnimatedText",
    data() {
        return {
            customText: "",
            wordArray: [],
            doneAnimating: false,
        };
    },
    methods: {
        drawText(word) {
            this.doneAnimating = false;
            this.wordArray = (word || "Exolar.Energy !").split("");
        },
        submitText() {
            this.drawText(this.customText);
        },
        onAnimationEnd(index) {
            if (index === this.wordArray.length - 1) {
                this.doneAnimating = true;
            }
        },
    },
    mounted() {
        this.drawText();
    },
};
</script>

<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap"); */

@keyframes dash {
    0% {
        transform: skew(-30deg, 0deg) translateX(300%) scale(0.8);
        opacity: 1;
    }

    40% {
        transform: skew(10deg, 0deg) translateX(100%) scale(0.9);
    }

    60% {
        transform: skew(10deg, 0deg) translateX(-10px) scale(1.2);
    }

    70% {
        transform: skew(0, 0deg) translateX(0) scale(1.3);
    }

    75% {
        transform: skew(0, 0deg) translateX(0) scale(1.3);
    }

    90% {
        transform: skew(0, 0deg) translateX(0) scale(0.85);
    }

    100% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
}

@keyframes done-animating {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(2);
    }

    100% {
        transform: scale(1);
    }
}

body {
    background: #0b0b25;
}

#inner-text {
    position: relative;
    z-index: 1;
}

#inner-text.done-animating {
    animation: done-animating 300ms ease-in;
}

#text-spot {
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

@media (min-width:768px) {
    .letter {
        display: inline-block;
        font-size: 100px !important;
        color: var(--bg-primary);
        letter-spacing: 10px;
        font-family: "Luckiest Guy";
    }
}

.letter {
    display: inline-block;
    /* font-size: 120px; */
    color: var(--bg-primary);
    letter-spacing: 10px;
    font-family: "Luckiest Guy";
}

.letter.animate {
    animation: dash 500ms ease-in forwards;
    opacity: 0;
}
</style>