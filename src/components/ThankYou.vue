<template>
  <div class="text-container justify-content-around py-5">
    <h2 :data-text="text" class="">{{ text }}</h2>
    <button class="btn btn-warning py-4 fs-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Know More</button>
  </div>
</template>

<script>
export default {
  name: 'CreativeTextAnimation',
  data() {
    return {
      text: 'Exolar...Energy'
    };
  }
};
</script>

<style scoped>
.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-primary);
  padding: 0 10px;
}

h2 {
  position: relative;
  color: #252839;
  -webkit-text-stroke: 0.3vw var(--bg-secondary);
  text-transform: uppercase;
  font-size: 8vw;
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
  color: white;
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