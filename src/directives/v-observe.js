// src/directives/v-observe.js
export default {
  beforeMount(el) {
      el.classList.add('before-enter');
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  el.classList.add('enter');
                  observer.unobserve(el);
              }
          });
      });
      observer.observe(el);
  },
};
