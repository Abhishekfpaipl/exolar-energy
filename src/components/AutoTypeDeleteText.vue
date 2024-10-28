<template>
    <div class="p-2 rounded text-typing-deleting fw-bold overflow-hidden d-inline-block text-white">
        <span v-if="showText" class="typed-text display-1"> {{ currentText }}<span v-if="!currentText"
                class="blinking-cursor">|</span></span>
    </div>
</template>

<script>
export default {
    props: {
        texts: {
            type: Array,
            required: true,
        },
        typingSpeed: {
            type: Number,
        },
        deleteSpeed: {
            type: Number,
        },
        delay: {
            type: Number,
        },
    },
    data() {
        return {
            showText: true,
            currentIndex: 0,
            currentText: '',
        };
    },
    mounted() {
        this.animateText();
    },
    methods: {
        animateText() {
            const text = this.texts[this.currentIndex];
            this.typeAndDeleteText(text)
                .then(() => {
                    this.currentIndex = (this.currentIndex + 1) % this.texts.length;
                    setTimeout(() => {
                        this.animateText();
                    }, this.delay);
                });
        },
        typeAndDeleteText(text) {
            return new Promise((resolve) => {
                this.typeText(text)
                    .then(() => this.deleteText(text))
                    .then(resolve);
            });
        },
        typeText(text) {
            return new Promise((resolve) => {
                let currentIndex = 0;
                const typingInterval = setInterval(() => {
                    this.currentText += text[currentIndex];
                    currentIndex++;
                    if (currentIndex === text.length) {
                        clearInterval(typingInterval);
                        resolve();
                    }
                }, this.typingSpeed);
            });
        },
        deleteText() {
            return new Promise((resolve) => {
                const deletingInterval = setInterval(() => {
                    if (this.currentText.length > 0) {
                        this.currentText = this.currentText.slice(0, -1);
                    } else {
                        clearInterval(deletingInterval);
                        resolve();
                    }
                }, this.deleteSpeed);
            });
        },
    },
};
</script>

<style scoped>
.typed-text {
    animation: blink-caret 0.75s step-end infinite;
}

.blinking-cursor {
    animation: blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {

    from,
    to {
        border-color: transparent;
    }

    50% {
        border-color: black;
    }
}
</style>
