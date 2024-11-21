import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/HomeView.vue"),
    meta: {
      title: "Best Rooftop Solar Panel Installation Company in Delhi | Exolar Energy",
      metaTags: [
        {
          name: "description",
          content: "Looking for the best rooftop solar panel installation in Delhi? Exolar Energy provides affordable, efficient solar solutions. Get a free consultation today!",
        },
        {
          name: "keywords",
          content: "solar panels, rooftop solar, solar installation, Residential rooftop solar panels Delhi, Commercial solar installation Delhi, Affordable solar panel installation Delhi, Top solar panel installers Delhi, Rooftop solar installation Delhi NCR, Delhi, Exolar Energy, Rooftop Solar Panel Installation in Delhi,Why Choose Exolar Energy for Rooftop Solar Installation in Delhi,How Rooftop Solar Panels Can Save You Money in Delhi",
        },
        {
          property: "og:title",
          content: "Best Rooftop Solar Panel Installation Company in Delhi",
        },
        {
          property: "og:description",
          content: "Exolar Energy offers affordable and efficient solar solutions in Delhi. Book your consultation now!",
        },
      ],
    },
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("@/pages/AboutUs.vue"),
    meta: {
      title: 'Best Rooftop Solar Panel Installation Company in Delhi | Exolar Energy',
      description: 'Learn more about Exolar Energy on this page',
    },
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
  {
    path: "/business",
    name: "BusinessPage",
    component: () => import("@/pages/BusinessPage.vue"),
  },
  {
    path: "/category-sentence/:id",
    name: "CategorySentence",
    component: () => import("@/pages/CategorySentence.vue")
  },
  {
    path: "/customer-sentence/:id",
    name: "CustomerSentence",
    component: () => import("@/pages/CustomerSentence.vue")
  },
  {
    path: "/place-sentence/:id",
    name: "PlaceSentence",
    component: () => import("@/pages/PlaceSentence.vue")
  },
  {
    path: "/service-sentence/:id",
    name: "ServiceSentence",
    component: () => import("@/pages/ServiceSentence.vue")
  },
  {
    path: "/service/:slug",
    name: "ServicePage",
    component: () => import("@/pages/ServicePage.vue")
  }, 
  {
    path: "/reviews",
    name: "ReviewPage",
    component: () => import("@/pages/ReviewPage.vue")
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
router.beforeEach((to, from, next) => {
  // Set the document title
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  // Remove any existing meta tags
  const existingMetaTags = document.querySelectorAll("meta[name], meta[property]");
  existingMetaTags.forEach((tag) => tag.parentNode.removeChild(tag));

  // Add new meta tags
  if (to.meta.metaTags) {
    to.meta.metaTags.forEach((metaTag) => {
      const tag = document.createElement("meta");
      Object.keys(metaTag).forEach((key) => {
        tag.setAttribute(key, metaTag[key]);
      });
      document.head.appendChild(tag);
    });
  }

  next();
});


export default router;
