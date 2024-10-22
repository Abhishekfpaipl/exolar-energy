import { createStore } from "vuex";
import about from "./about";
import states from "./states";

export default createStore({
  state: {
    autoScrolling: [
      {
        id: 1,
        name: 'Amazon',
        image: '/img/amazon.png'
      },
      {
        id: 2,
        name: 'Apple',
        image: "/img/apple.png"
      },
      {
        id: 3,
        name: 'Aws',
        image: "/img/aws.png"
      },
      {
        id: 4,
        name: 'Facebook',
        image: "/img/fb.png"
      },
      {
        id: 5,
        name: 'Google',
        image: "/img/google.png"
      },
      {
        id: 6,
        name: 'Meta',
        image: "/img/meta.png"
      },
      {
        id: 7,
        name: 'Microsoft',
        image: "/img/microsoft.png"
      },
      {
        id: 11,
        name: 'Vodafone',
        image: "/img/vodafone.png"
      },
    ],
    countries: [
      {
        id: 1,
        name: 'UK',
        image: 'https://thewebtycoons.com/img/uk.png'
      },
      {
        id: 2,
        name: 'Canada',
        image: "https://thewebtycoons.com/img/canada.png"
      },
      {
        id: 3,
        name: 'Dubai',
        image: "https://thewebtycoons.com/img/dubai.png"
      },
      {
        id: 4,
        name: 'Singapore',
        image: "https://thewebtycoons.com/img/singapore.png"
      },
      {
        id: 5,
        name: 'USA',
        image: "https://thewebtycoons.com/img/usa.png"
      },
    ],
    customers: [
      {
        id: 1,
        show: false,
        imgr: '/img/customers/1.jpeg',
        name: 'Kusum',
        service: 'Digital Marketing',
        company: 'Stellar Pvt Ltd',
        rating: '5',
        text: "Covisor transformed our online presence. Their SEO strategies improved our search engine rankings significantly, and their social media campaigns have driven unprecedented traffic to our website. The team is knowledgeable, responsive, and a pleasure to work with. Highly recommend their services!"
      },
      {
        id: 2,
        show: false,
        imgr: '/img/customers/2.jpeg',
        name: 'Payal',
        service: 'Digital Marketing',
        company: 'BrightSpark  Pvt Ltd',
        rating: '4.5',
        text: "Covisor provided us with effective PPC campaigns and valuable insights into our audience's behavior. Their email marketing strategies also helped us retain customers and increase sales. There was a slight delay in the initial setup, but their results made it worth the wait."
      },
      {
        id: 3,
        show: false,
        imgr: '/img/customers/3.jpeg',
        name: 'Sumit',
        service: 'Digital Marketing',
        company: 'Elite Solutions Pvt Ltd',
        rating: '5',
        text: "Covisor offered a comprehensive digital marketing plan, including content marketing and influencer partnerships. While the strategies were innovative, the execution was sometimes inconsistent. Customer support was responsive, but project management could be improved."
      },
      {
        id: 4,
        show: false,
        imgr: '/img/customers/4.jpeg',
        name: 'Abhishek',
        service: 'Software Development',
        company: 'DevMasters Pvt Ltd',
        rating: '5',
        text: "Covisor delivered a robust and scalable software solution tailored to our business needs. Their agile development process kept us involved at every stage, and the final product exceeded our expectations. The team’s expertise and attention to detail were exceptional."
      },
      {
        id: 5,
        show: false,
        imgr: '/img/customers/5.jpeg',
        name: 'Rajat',
        service: 'Software Development',
        company: 'CodeCraft  Pvt Ltd',
        rating: '4',
        text: "We collaborated with Covisor for a custom application development project. Their technical skills are top-notch, and they implemented features that enhanced our operational efficiency. However, there were occasional communication lapses that delayed progress. Overall, a solid choice for software development."
      },
      {
        id: 6,
        show: false,
        imgr: '/img/customers/6.jpeg',
        name: 'Jayshree',
        service: 'Software Development',
        company: 'SoftWave Pvt Ltd',
        rating: '4.5',
        text: "Covisor developed our company's internal software. While the final product met our requirements, the development process faced several delays. The team was knowledgeable but could improve on meeting deadlines and providing clearer updates. The end result was satisfactory."
      },
      {
        id: 7,
        show: false,
        imgr: '/img/customers/7.jpeg',
        name: 'Lokesh',
        service: 'Website Development',
        company: 'PixelPerfect  Pvt Ltd',
        rating: '4',
        text: "Covisor created a stunning and user-friendly website for our business. Their design aesthetics are impeccable, and the site performs flawlessly across all devices. They were receptive to our ideas and made the entire process smooth and enjoyable. Highly recommend!"
      },
      {
        id: 8,
        show: false,
        imgr: '/img/customers/8.jpeg',
        name: 'Bhasker',
        service: 'Website Development',
        company: 'WebInnovators Pvt Ltd',
        rating: '3.5',
        text: "Covisor revamped our outdated website, giving it a modern look and improved functionality. The team was professional and skilled, delivering a site that aligns with our brand. There were minor hiccups during the integration phase, but they were resolved promptly. Overall, a positive experience."
      },
      {
        id: 9,
        show: false,
        imgr: '/img/customers/9.jpeg',
        name: 'Vivek',
        service: 'Website Development',
        company: 'NexGen Pvt Ltd',
        rating: '5',
        text: "Covisor Web Solutions built our new e-commerce site. The design and user interface are excellent, but the project took longer than expected to complete. Communication could have been better, with more frequent updates. Despite the delays, the final website is performing well and attracting more customers."
      },
    ], 
    whatMakesUsDifferent: [
      {
        icon: 'bi-shield-check',
        title: "Integrity properties",
        description: "Demonstrating transparency and honesty in all our commitments and actions, ensuring trust and reliability in every interaction.",
      },
      {
        icon: 'bi-star',
        title: "Excellence",
        description: "Going beyond expectations by understanding your needs deeply and meticulously crafting solutions that surpass ordinary standards.",
      },
      {
        icon: 'bi-people',
        title: "Teamwork",
        description: "Leveraging collective strengths to provide you with adaptable and superior solutions, fostering a collaborative environment where every voice contributes meaningfully."
      },
      {
        icon: 'bi-shield-lock',
        title: "Privacy and safety",
        description: "Create powerful digital safety solutions for your workforce,increasing employee engagement with important processes and procedures effiiciently whilst ensuring the highest levels of compliance.",
      },
      {
        icon: 'bi-graph-up',
        title: "Quality services",
        description: "Crafting bespoke web designs that drive impactful user experiences and convey a distinct brand message, led by experienced designers from concept to execution.",
      },
      {
        icon: 'bi-palette',
        title: "Creativity",
        description: "Solving challenges innovatively, refusing to settle for ordinary solutions, and creating bespoke strategies that not only solve problems but also distinguish your business.",
      },
      {
        icon: 'bi-calendar-check ',
        title: "Dependability",
        description: "Consistently delivering on promises, meeting deadlines with proactive communication, and treating your business's success as our own commitment.",
      },
      {
        icon: 'bi-emoji-laughing',
        title: "Fun",
        description: "Cultivating a positive and enjoyable workplace environment, fostering creativity, exceptional client service, and the well-being of our team members through humor and camaraderie.",
      },
      {
        icon: 'bi-hand-thumbs-up ',
        title: "Helping Hand",
        description: "Fostering a supportive and positive workplace environment."
      },
      {
        icon: 'bi-gem',
        title: "World Class Quality",
        description: "Delivering exceptional quality in all our services."
      },
      {
        icon: 'bi-tags',
        title: "Competitive Pricing",
        description: "Offering the best prices without compromising on quality."
      },
      {
        icon: 'bi-lightning ',
        title: "Incredibly Fast Delivery",
        description: "Ensuring quick and efficient delivery for our clients."
      }
    ],
  },
  getters: {
    getAutoScrolling: state => state.autoScrolling,
    getCountries: state => state.countries,
    getFeaturedIn: state => state.featuredIn,
    getCustomers: state => state.customers,
    getFaqs: state => state.faqs,
    getWhatMakesUsDifferent: state => state.whatMakesUsDifferent,
  },
  mutations: {},
  actions: {},
  modules: {
    about: about,
    states: states
  },
});
