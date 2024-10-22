import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/HomeView.vue"),
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("@/pages/AboutUs.vue"),
  },
  {
    path: "/testimonial",
    name: "TestimonialPage",
    component: () => import("@/pages/TestimonialPage.vue"),
  },
  {
    path: "/faqs",
    name: "FaqPage",
    component: () => import("@/pages/FaqPage.vue"),
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("@/pages/ContactUs.vue"),
  },
  {
    path: "/dealership",
    name: "DealershipPage",
    component: () => import("@/pages/DealershipPage.vue"),
  },
  {
    path: "/career",
    name: "CareerPage",
    component: () => import("@/pages/CareerPage.vue"),
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("@/pages/PrivacyPolicy.vue"),
  },
  {
    path: "/refund-policy",
    name: "RefundPolicy",
    component: () => import("@/pages/RefundPolicy.vue"),
  },
  {
    path: "/term-of-use",
    name: "TermOfUse",
    component: () => import("@/pages/TermOfUse.vue"),
  },
  {
    path: "/gallery",
    name: "GalleryPage",
    component: () => import("@/pages/GalleryPage.vue"),
  },
  {
    path: "/check-dealership",
    name: "CheckDealership",
    component: () => import("@/pages/CheckDealership.vue"),
  },
  {
    path: "/report",
    name: "ReportPage",
    component: () => import("@/pages/ReportPage.vue"),
  },
  {
    path: "/benefit",
    name: "BenefitPage",
    component: () => import("@/pages/BenefitPage.vue"),
  },
  {
    path: "/facility",
    name: "FacilityPage",
    component: () => import("@/pages/FacilityPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
