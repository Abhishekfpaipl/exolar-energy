import { createStore } from "vuex";
import about from "./about";
import states from "./states";
import faqs from "./faqs";

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
    tabs: [
      { id: 'projects', name: 'Projects' },
      { id: 'residentail', name: 'Residential' },
      { id: 'industrial', name: 'Industrial' },
      { id: 'commercial', name: 'Commercial' },
      { id: 'reviews', name: 'Reviews' },
      { id: 'testimonial', name: 'Testimonials' },
    ],
    posts: [
      {
        id: 1,
        title: 'system installed 9.8kW',
        sid: "system-installed-9-8kw",
        date: '01/10/2024',
        image: '/img/blogs/blog1.jpg',
        images: ['/img/blogs/blog1.jpg', '/img/blogs/blog1.jpg', '/img/blogs/blog1.jpg'],
        description: "Vaibhav Chaudhary from Noida sector 105",
        category: 'projects'
      },
      {
        id: 2,
        title: 'system installed 6kW',
        sid: "system-installed-6kw",
        date: '24/09/2024',
        image: '/img/blogs/blog2.jpg',
        images: ['/img/blogs/blog2.jpg', '/img/blogs/blog2.jpg', '/img/blogs/blog2.jpg'],
        description: "Rajeev kakkar from Guru Harikrishna Nagar, Delhi",
        category: 'projects'
      },
      {
        id: 3,
        title: 'system installed 5kW',
        sid: "system-installed-5kw",
        date: '21/09/2024',
        image: '/img/blogs/blog3.jpg',
        images: ['/img/blogs/blog3.jpg', '/img/blogs/blog3.jpg', '/img/blogs/blog3.jpg'],
        description: "Suresh Kumar from Ghaziabad",
        category: 'projects'
      },
      {
        id: 4,
        title: 'system installed 30 kW',
        sid: "system-installed-30kw",
        date: '27/08/2024',
        image: '/img/blogs/blog4.jpg',
        images: ['/img/blogs/blog4.jpg', '/img/blogs/blog4.jpg', '/img/blogs/blog4.jpg'],
        description: 'Lamba Hyundai Showroom in Wazirpur',
        category: 'commercial'
      },
      {
        id: 6,
        title: 'system installed 9.8kW',
        sid: "system-installed-9-8kw-2",
        date: '27/08/2024',
        image: '/img/blogs/blog5.jpg',
        images: ['/img/blogs/blog5.jpg', '/img/blogs/blog5.jpg', '/img/blogs/blog5.jpg'],
        description: 'Suresh Khandelwal from Sarai Rohilla Delhi',
        category: 'residentail'
      },
      {
        id: 7,
        title: 'system installed 19.62kW',
        sid: "system-installed-19-62kw",
        date: '27/08/2024',
        image: '/img/blogs/blog6.jpg',
        images: ['/img/blogs/blog6.jpg', '/img/blogs/blog6.jpg', '/img/blogs/blog6.jpg'],
        description: 'Kunal from DLF Phase 1 Gurugram',
        category: 'commercial'
      },
      {
        id: 8,
        title: 'system installed 8kW',
        sid: "system-installed-8kw",
        date: '27/08/2024',
        image: '/img/blogs/blog7.jpg',
        images: ['/img/blogs/blog7.jpg', '/img/blogs/blog7.jpg', '/img/blogs/blog7.jpg'],
        description: 'Sunita Goyal from Chandni Chowk Delhi ',
        category: 'residentail'
      },
      {
        id: 9,
        title: 'system installed 10kW',
        sid: "system-installed-10kw",
        date: '27/08/2024',
        image: '/img/blogs/blog8.jpg',
        images: ['/img/blogs/blog8.jpg', '/img/blogs/blog8.jpg', '/img/blogs/blog8.jpg'],
        description: 'Satya Sai Filling Station in Bhilwara Rajasthan',
        category: 'commercial'
      },
      {
        id: 10,
        title: 'system installed 15kW',
        sid: "system-installed-15kw",
        date: '27/08/2024',
        image: '/img/blogs/blog9.jpg',
        images: ['/img/blogs/blog9.jpg', '/img/blogs/blog9.jpg', '/img/blogs/blog9.jpg'],
        description: 'Nitin Hospital in Mangolpuri ',
        category: 'commercial'
      },
      {
        id: 11,
        title: 'system installed 5kW',
        sid: "system-installed-5kw-2",
        date: '27/08/2024',
        image: '/img/blogs/blog10.jpg',
        images: ['/img/blogs/blog10.jpg', '/img/blogs/blog10.jpg', '/img/blogs/blog10.jpg'],
        description: 'Satish from Sikhohpur',
        category: 'residentail'
      },
      {
        id: 12,
        title: 'system installed 5.45kW',
        sid: "system-installed-5-45kw",
        date: '27/08/2024',
        image: '/img/blogs/blog11.jpg',
        images: ['/img/blogs/blog11.jpg', '/img/blogs/blog11.jpg', '/img/blogs/blog11.jpg'],
        description: 'Praveen Saluja from Subhash Nagar',
        category: 'residentail'
      },
      {
        id: 13,
        title: 'system installed 4.36kW',
        sid: "system-installed-4-36kw",
        date: '27/08/2024',
        image: '/img/blogs/blog12.jpg',
        images: ['/img/blogs/blog12.jpg', '/img/blogs/blog12.jpg', '/img/blogs/blog12.jpg'],
        description: 'Vandana Tiwari from Paschim Vihar',
        category: 'residentail'
      },
      {
        id: 14,
        title: 'system installed 5.9kW',
        sid: "system-installed-5-9kw",
        date: '27/08/2024',
        image: '/img/blogs/blog13.jpg',
        images: ['/img/blogs/blog13.jpg', '/img/blogs/blog13.jpg', '/img/blogs/blog13.jpg'],
        description: 'Kanta Devi from Rohini Sector-22 Delhi',
        category: 'residentail'
      },
      {
        id: 15,
        title: 'system installed 250kW',
        sid: "system-installed-250kw",
        date: '27/08/2024',
        image: '/img/blogs/blog14.jpg',
        images: ['/img/blogs/blog14.jpg', '/img/blogs/blog14.jpg', '/img/blogs/blog14.jpg'],
        description: 'IILM Universirty in Greater Noida',
        category: 'industrial'
      },
      {
        id: 16,
        title: 'system installed 3.9kW',
        sid: "system-installed-3-9kw",
        date: '27/08/2024',
        image: '/img/blogs/blog15.jpg',
        images: ['/img/blogs/blog15.jpg', '/img/blogs/blog15.jpg', '/img/blogs/blog15.jpg'],
        description: 'Ashwinder Pal Singh from Hari Nagar',
        category: 'residentail'
      },
      {
        id: 17,
        title: 'system installed 3.27kW',
        sid: "system-installed-3-27kw",
        date: '27/08/2024',
        image: '/img/blogs/blog16.jpg',
        images: ['/img/blogs/blog16.jpg', '/img/blogs/blog16.jpg', '/img/blogs/blog16.jpg'],
        description: 'Prem Lata Sharma from Rohini Sector 7',
        category: 'residentail'
      },
      {
        id: 18,
        title: 'system installed 6.96kW',
        sid: "system-installed-6-96kw",
        date: '27/08/2024',
        image: '/img/blogs/blog17.jpg',
        images: ['/img/blogs/blog17.jpg', '/img/blogs/blog17.jpg', '/img/blogs/blog17.jpg'],
        description: 'Mohit Sharma from Sector 20 Rohini, Delhi',
        category: 'residentail'
      },
      {
        id: 19,
        title: 'system installed 4.9kW',
        sid: "system-installed-4-9kw",
        date: '27/08/2024',
        image: '/img/blogs/blog18.jpg',
        images: ['/img/blogs/blog18.jpg', '/img/blogs/blog18.jpg', '/img/blogs/blog18.jpg'],
        description: 'Akansha Goel from Lohia Nagar, Ghaziabad, UP',
        category: 'residentail'
      },
      {
        id: 20,
        title: 'system installed 12.3kW',
        sid: "system-installed-12-3kw",
        date: '27/08/2024',
        image: '/img/blogs/blog19.jpg',
        images: ['/img/blogs/blog19.jpg', '/img/blogs/blog19.jpg', '/img/blogs/blog19.jpg'],
        description: 'Deepak Bansal from Sector 26, Noida UP',
        category: 'residentail'
      },
      {
        id: 21,
        title: 'system installed 3.27kW',
        sid: "system-installed-3-27kw-2",
        date: '27/08/2024',
        image: '/img/blogs/blog20.jpg',
        images: ['/img/blogs/blog20.jpg', '/img/blogs/blog20.jpg', '/img/blogs/blog20.jpg'],
        description: 'A Saxena from Sarita Vihar',
        category: 'residentail'
      },
      {
        id: 22,
        title: 'system installed 3.3kW',
        sid: "system-installed-3-3kw",
        date: '27/08/2024',
        image: '/img/blogs/blog21.jpg',
        images: ['/img/blogs/blog21.jpg', '/img/blogs/blog21.jpg', '/img/blogs/blog21.jpg'],
        description: 'Sangita from Malviya Nagar',
        category: 'residentail'
      },
      {
        id: 23,
        title: 'system installed 17.92kW',
        sid: "system-installed-17-92kw",
        date: '27/08/2024',
        image: '/img/blogs/blog22.jpg',
        images: ['/img/blogs/blog22.jpg', '/img/blogs/blog22.jpg', '/img/blogs/blog22.jpg'],
        description: 'Najaf Husain from Sector 41 Noida, UP',
        category: 'residentail'
      },
      {
        id: 24,
        title: 'system installed 5.6kW',
        sid: "system-installed-5-6kw",
        date: '27/08/2024',
        image: '/img/blogs/blog23.jpg',
        images: ['/img/blogs/blog23.jpg', '/img/blogs/blog23.jpg', '/img/blogs/blog23.jpg'],
        description: 'Pushpa Sharma from Sector 43 Faridabad',
        category: 'residentail'
      },
      {
        id: 25,
        title: 'system installed 6.78kW',
        sid: "system-installed-6-78kw",
        date: '27/08/2024',
        image: '/img/blogs/blog24.jpg',
        images: ['/img/blogs/blog24.jpg', '/img/blogs/blog24.jpg', '/img/blogs/blog24.jpg'],
        description: 'Priyanka Sharma from Kaushambi',
        category: 'residentail'
      },
      {
        id: 26,
        title: 'system installed 5.4kW',
        sid: "system-installed-5-4kw",
        date: '27/08/2024',
        image: '/img/blogs/blog25.jpg',
        images: ['/img/blogs/blog25.jpg', '/img/blogs/blog25.jpg', '/img/blogs/blog25.jpg'],
        description: 'PK Tulsan from Noida Sector 12',
        category: 'residentail'
      },
      {
        id: 27,
        title: 'system installed 16.35kW',
        sid: "system-installed-16-35kw",
        date: '27/08/2024',
        image: '/img/blogs/blog26.jpg',
        images: ['/img/blogs/blog26.jpg', '/img/blogs/blog26.jpg', '/img/blogs/blog26.jpg'],
        description: 'Rupesh Aggarwal from Bawana A Block',
        category: 'commercial'
      },
      {
        id: 28,
        title: 'Unleashing the Power of the Sun: Exolar Energy',
        sid: "unleashing-the-power-of-the-sun",
        date: '27/08/2024',
        description: ' Leading the Solar Revolution',
        category: 'testimonial',
        videoId: "f-4FWD6wAuk",
      },
      {
        id: 29,
        title: 'Empowering Tomorrow: Exolar Energy - ',
        sid: "empowering-tomorrow",
        date: '27/08/2024',
        description: 'Harness the Power of the Sun! ',
        category: 'testimonial',
        videoId: "Y-RWg3xUsAU",
      },
      {
        id: 5,
        title: 'Exolar Energy Testimonial Video',
        sid: "exolar-energy-testimonial-video",
        date: '27/08/2024',
        description: 'Testimonial Video',
        category: 'testimonial',
        videoId: "ZtCsYVnjmn4",
        images: []
      },
    ],
  },
  getters: {
    getAutoScrolling: state => state.autoScrolling,
    getCountries: state => state.countries,
    getFeaturedIn: state => state.featuredIn,
    getCustomers: state => state.customers,
    getFaqs: state => state.faqs,
    getWhatMakesUsDifferent: state => state.whatMakesUsDifferent,
    getPosts: state => state.posts,
    getPost: (state) => (postId) => {
      let index = state.posts.findIndex(post => post.sid === postId);
      return state.posts[index]
    },
    getTabs: state => state.tabs,
  },
  mutations: {},
  actions: {},
  modules: {
    about: about,
    states: states,
    faqs: faqs,
  },
});
