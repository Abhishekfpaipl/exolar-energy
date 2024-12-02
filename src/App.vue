<template>
  <DashboardNav />
  <router-view />
  <ThankYou />
  <FooterBar />
</template>
<script>
import DashboardNav from "@/components/TopNav.vue";
import FooterBar from "@/components/FooterBar.vue";
import ThankYou from "@/components/ThankYou.vue";
export default {
  name: "App",
  components: {
    DashboardNav,
    FooterBar,
    ThankYou
  },
  computed: {
    // hide() {
    //   const hiddenPages = [
    //     'LoginPage', 'RegistrationPage', 'EmailVerificationPage', 'ForgotPasswordPage', 'ResetPasswordPage',  
    //   ]
    //   return hiddenPages.includes(this.$route.name)
    // }, 
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


:root {
  --bg-background:#f3f8f3 !important;
  --bg-secondary: #274185 !important;
  --bg-primary: #1C75BC !important;
  --bg-third: #1C8452 !important;
  --bg-forth: #FEC111 !important;
  --bg-light: #ABE1FA !important;
  --bg-grey: #546670 !important;
  --bg-lightgrey: #BACAD3 !important;
  // --bg-third: #1B9600 !important;
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

.text-ellipsis3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-ellipsis2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text-ellipsis12 {
  display: -webkit-box;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-ellipsis4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-ellipsis5 {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.smaller {
  font-size: 12px;
}

.primary-text {
  background: linear-gradient(90deg, rgba(254, 242, 159, 1) 0%, rgba(210, 163, 73, 1) 50%, rgba(254, 242, 159, 1) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#scroll::-webkit-scrollbar {
  display: none;
}

@keyframes slideRight {

  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(5px);
  }
}

.visit {
  display: inline-block;
  animation: slideRight 1.5s ease-in-out infinite;
}

.carousel-control-prev-icon {
  filter: invert(1);
}

.carousel-control-next-icon {
  filter: invert(1);
}
.form-control{
  box-shadow:none !important;
}
</style>
