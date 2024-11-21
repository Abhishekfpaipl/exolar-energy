<!-- <template>
    <div class="google-reviews">
        <h2>Customer Reviews</h2>
        <div v-if="reviews.length">
            <div v-for="(review, index) in reviews" :key="index" class="review">
                <h3>{{ review.author_name }}</h3>
                <p>Rating: {{ review.rating }}</p>
                <p>{{ review.text }}</p>
                <p><em>— {{ review.relative_time_description }}</em></p>
            </div>
        </div>
        <div v-else>
            <p>Loading reviews...</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'GoogleReviews',
    data() {
        return {
            reviews: []
        };
    },
    created() {
        this.fetchReviews();
    },
    methods: {
        async fetchReviews() {
            // const placeId = 'YOUR_PLACE_ID'; // Replace with your Google Place ID
            const apiKey = 'AIzaSyDIJw8aJPUCKW4q2Kqq-mlYnFZ8Eq4Anis'; // Replace with your Google Places API key
            const placeName = '405, Pearls Best Heights-1, Netaji Subhash Place, Pitampura, Delhi, 110034';
            // const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;
            const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(placeName)}&inputtype=textquery&fields=place_id&key=${apiKey}`;


            axios.get(url)
                .then(response => {
                    const placeId = response.data.candidates[0].place_id;
                    console.log('Place ID:', placeId);
                })
                .catch(error => {
                    console.error('Error fetching Place ID:', error);
                });
            try {
                const response = await axios.get(url);
                if (response.data.result && response.data.result.reviews) {
                    this.reviews = response.data.result.reviews;
                } else {
                    console.error('No reviews found');
                }
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        }
    }
};
</script>

<style scoped>
.google-reviews {
    padding: 1rem;
    max-width: 600px;
    margin: auto;
}

.review {
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;
}
</style> -->
<template>
    <SectionTopBanner />
    <div class="container mt-5">

        <div class="text-start p-md-5 p-3 rounded mb-5" data-bs-toggle="modal" data-bs-target="#writeReview"
            style="background-color:var(--bg-primary)">
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="text-start display-1 text-warning">Click here to give your</h2>
                <i class="bi bi-arrow-right ms-2 fs-1 visit text-warning"></i>
            </div>
            <AutoTypeDeleteText :texts="services" :typingSpeed="150" :deleteSpeed="50" :delay="500" />
        </div>

        <!-- Modal -->
        <div class="modal fade" id="writeReview" tabindex="-1" aria-labelledby="writeReviewLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header d-flex justify-content-between align-items-center"
                        style="background-color:var(--bg-primary)">
                        <h1 class="modal-title text-white fs-5" id="writeReviewLabel">Testimonial</h1>
                        <i class="bi bi-x fs-1 text-white" data-bs-dismiss="modal" aria-label="Close"></i>
                    </div>
                    <div class="modal-body">
                        <iframe id="senja-collector-iframe"
                            src="https://senja.io/p/exolar-energy/r/JGPPsO?mode=embed&nostyle=true"
                            allow="camera;microphone" title="Senja form" frameborder="0" scrolling="no" width="100%"
                            height="1200"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div v-for="(review, index) in reviews" :key="index" class="col-md-6 col-lg-4 mb-4">
                <div class="card h-100" style="background-color: #F3F8F3 !important">
                    <div class="card-body">
                        <!-- <i class="bi bi-google text-primary"></i> -->
                        <div class="d-flex align-items-center mb-2">
                            <i class="bi bi-person-circle me-2" style="font-size: 1.5rem;"></i>
                            <h5 class="card-title m-0">{{ review.authorName }}</h5>
                        </div>
                        <p class="text-start">{{ review.text }}</p>
                        <div class="d-flex align-items-center mb-2">
                            <span class="me-2 text-warning">
                                <i v-for="n in review.rating" :key="n" class="bi bi-star-fill"></i>
                                <i v-for="n in 5 - review.rating" :key="`empty-${n}`" class="bi bi-star"></i>
                            </span>
                            <span class="text-muted">{{ review.date }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';
import AutoTypeDeleteText from "@/components/AutoTypeDeleteText.vue"

export default {
    components: {
        SectionTopBanner,
        AutoTypeDeleteText,
    },
    data() {
        return {
            reviews: [
                {
                    authorName: 'Ravi',
                    rating: 5,
                    date: 'July, 2024',
                    text: 'I had an amazing experience with Exolar Emergy. The service was outstanding and exceeded my expectations. The team was professional, and they ensured everything was handled smoothly. From the consultation to the installation process, they kept me informed at every stage. I\'m extremely happy with the results. I highly recommend their services for anyone looking to install a solar system.',
                },
                {
                    authorName: 'Ashi Singh',
                    rating: 5,
                    date: 'April , 2024',
                    text: 'Exolar Emergy provided the best solar installation service I could have asked for in Delhi. They were thorough in their approach and guided me step-by-step through the entire process. Their team was incredibly skilled and professional, and the solar panels are working flawlessly. It\'s been a game-changer for my energy bills. I\'m so happy I chose them, and I would highly recommend their services to anyone in Delhi looking for reliable solar solutions.',
                },
                {
                    authorName: 'Vicky Kumar',
                    rating: 5,
                    date: 'July , 2024',
                    text: 'Exolar Emergy provided the best service I’ve ever had! The whole process from start to finish was efficient, and the team was very professional. They took care of all the technical details, and the installation was flawless. I’ve already noticed a significant reduction in my electricity costs, and the system has been working perfectly. This is the best decision I\'ve made for my home’s energy needs.',
                },
                {
                    authorName: 'Ankit Pokhriyal',
                    rating: 5,
                    date: 'July , 2024',
                    text: 'I’ve been working with Exolar Emergy for over two months now, and I couldn\'t be happier. Their team was with me every step of the way—from the documentation phase to the installation of the solar panels. I would like to give a special mention to Girish ji and his hardworking team, who put in a lot of effort to ensure everything was done right. I would also like to thank Saurabh and Altaf for their dedication and support throughout the project. The service was exceptional, and I highly recommend Exolar Emergy to anyone looking for a reliable solar energy provider.',
                },
                {
                    authorName: 'Abhishek Rai',
                    rating: 5,
                    date: 'July , 2024',
                    text: 'My experience with Exolar Emergy has been fantastic. From the start, the team was incredibly professional, and the entire process of installing my solar system was smooth. The team was very knowledgeable and efficient, and they explained everything clearly. I have already noticed a significant reduction in my energy bills, which is a huge win for me. I’ve already recommended Exolar Emergy to a few friends, and I would highly recommend them to anyone who is considering solar power for their home.',
                },
                {
                    authorName: 'Amit Tulsan',
                    rating: 5,
                    date: 'July , 2024',
                    text: 'Exolar Emergy did an outstanding job with my solar installation. From the initial quotation to the final commissioning, everything was handled professionally. The quality of their work is top-notch, and they took great care to ensure all wiring was hidden, maintaining the aesthetics of my property. The team, especially Girish ji, was very honest and transparent about the costs and procedures, which I greatly appreciated. The project was completed on time, and I would wholeheartedly recommend their services to anyone considering installing solar panels.',
                },
                {
                    authorName: 'Deepak Bansal',
                    rating: 5,
                    date: 'July , 2024',
                    text: 'I am extremely satisfied with the service provided by Exolar Emergy. From the initial structure setup to the final installation, everything was done exceptionally well. The team handled all the approvals and documentation smoothly, and the entire process was completed on time, just as promised. The solar system has been working perfectly, and I’ve already noticed the positive impact on my energy savings. I would highly recommend Exolar Emergy to anyone looking to switch to solar power.',
                },
                {
                    authorName: 'Pavan Varma',
                    rating: 5,
                    date: 'July , 2024',
                    text: 'I was thoroughly impressed with the way Exolar Emergy handled my solar installation. Their team was polite, professional, and well-trained. What stood out the most was their communication—everything was done remotely, from quotations to project follow-up, which made the process incredibly convenient. I didn\'t even need to meet anyone in person except for the installers. The system has been running perfectly, and I’m already seeing the savings. I’m so happy with their work that I’m planning to get another system installed with them in the future.',
                },
                {
                    authorName: 'Saqlain Khan',
                    rating: 5,
                    date: 'July , 2024',
                    text: 'The service from Exolar Emergy was good, though not as exceptional as I had hoped. The installation process was smooth, and the system is working fine, but there were a few minor issues that I had to follow up on. However, overall, the team was professional, and they were quick to address any concerns. The solar panels are performing well, and I’m generally satisfied with my decision to go with Exolar Emergy.',
                },
                {
                    authorName: 'Amit Sharma',
                    rating: 5,
                    date: 'June, 2024',
                    text: 'The experience with Exolar Emergy was fantastic! Their team was extremely professional, and the process was seamless from start to finish. They installed the system within the promised time frame, and I’m already seeing significant savings on my electricity bills. I would highly recommend them to anyone interested in solar energy.',
                },
                {
                    authorName: 'Rohit Kapoor',
                    rating: 5,
                    date: 'May, 2024',
                    text: 'Exolar Emergy has been a great partner in helping me reduce my energy costs. The installation was done on time, and the system has been working flawlessly. Their customer service team was also very responsive to all of my queries. A big thanks to the entire team for their hard work.',
                },
                {
                    authorName: 'Priya Mehra',
                    rating: 5,
                    date: 'June, 2024',
                    text: 'I am extremely satisfied with Exolar Emergy’s solar installation service. The team was thorough, knowledgeable, and friendly. They walked me through the entire process and answered all my questions. Since the installation, my electricity costs have drastically reduced. I highly recommend them.',
                },
                {
                    authorName: 'Sandeep Verma',
                    rating: 5,
                    date: 'June, 2024',
                    text: 'Exolar Emergy did an excellent job from start to finish. The installation was done quickly and professionally. The team was very experienced and made sure everything was working as expected. I’ve already noticed the difference in my energy bills, and I would definitely recommend them to anyone looking for a reliable solar provider.',
                },
                {
                    authorName: 'Neha Gupta',
                    rating: 5,
                    date: 'June, 2024',
                    text: 'The entire process with Exolar Emergy was smooth and hassle-free. From the initial consultation to the final installation, everything was well-managed. The team was punctual, and the solar system has been performing great. I’m very happy with their service and would highly recommend them.',
                },
                {
                    authorName: 'Vikram Singh',
                    rating: 5,
                    date: 'June, 2024',
                    text: 'It was a pleasure working with Exolar Emergy. Their team was very professional and efficient. The installation was completed on schedule, and the solar panels have been working perfectly. I’ve already seen a drop in my electricity bills, and I am very pleased with my decision to go solar with them.',
                },
                {
                    authorName: 'Nisha Rani',
                    rating: 5,
                    date: 'May, 2024',
                    text: 'Exolar Emergy provided me with an excellent experience. The installation was done efficiently, and the team was very professional. They answered all my questions and made sure I was fully informed throughout the process. I am very happy with the system and the savings on my energy bill.',
                },
                {
                    authorName: 'Sumit Verma',
                    rating: 5,
                    date: 'May, 2024',
                    text: 'I am thoroughly impressed with the service provided by Exolar Emergy. The team was highly professional, and the installation process was done seamlessly. The solar system has been working well, and I’ve noticed a significant reduction in my energy consumption. Highly recommended!',
                },
                {
                    authorName: 'Divya Sharma',
                    rating: 5,
                    date: 'May, 2024',
                    text: 'Exolar Emergy made the entire solar installation process easy and stress-free. Their team was knowledgeable, and they made sure everything was installed correctly. I’ve already seen a decrease in my energy bills, and I couldn’t be happier with the outcome. I highly recommend them.',
                },
                {
                    authorName: 'Anil Yadav',
                    rating: 5,
                    date: 'April, 2024',
                    text: 'Working with Exolar Emergy was a smooth experience. The installation process was quick, and the team was very skilled. They explained the whole system clearly and made sure everything was in place. I’ve seen a marked decrease in my energy costs. I highly recommend their service.',
                },
                {
                    authorName: 'Shivani Kumari',
                    rating: 5,
                    date: 'April, 2024',
                    text: 'I had an excellent experience with Exolar Emergy. They are a very professional and reliable company. The team did an excellent job installing the solar panels, and the system has been working perfectly. I’ve already started to see savings on my electricity bills. Would definitely recommend them.',
                },
                {
                    authorName: 'Kiran Joshi',
                    rating: 5,
                    date: 'April, 2024',
                    text: 'Exolar Emergy provided me with exceptional service. From the initial consultation to the final installation, everything went smoothly. The team was courteous, professional, and very knowledgeable. I am already seeing a reduction in my electricity bills, and I’m very pleased with the results.',
                },
                {
                    authorName: 'Rajeev Kumar',
                    rating: 5,
                    date: 'March, 2024',
                    text: 'Exolar Emergy’s team did an outstanding job. The solar system has been working efficiently, and I’ve noticed significant savings on my electricity bills. The installation process was quick and the staff was very professional. I would highly recommend their services to anyone interested in solar energy.',
                },
                {
                    authorName: 'Madhuri Patel',
                    rating: 5,
                    date: 'March, 2024',
                    text: 'I had a great experience with Exolar Emergy. Their team was professional, punctual, and efficient. The installation process was smooth, and they made sure everything was set up correctly. I’m very happy with my solar system and would definitely recommend them to others.',
                },
                {
                    authorName: 'Suresh Jain',
                    rating: 5,
                    date: 'March, 2024',
                    text: 'I am very impressed with Exolar Emergy’s service. From start to finish, the team was professional and very efficient. The solar installation was completed without any issues, and the system is running perfectly. I’ve seen a significant drop in my energy bills, and I would highly recommend their services.',
                },
                {
                    authorName: 'Aarav Gupta',
                    rating: 5,
                    date: 'February, 2024',
                    text: 'Exolar Emergy did an excellent job installing my solar system. The entire process was very smooth, and the team was very helpful in explaining the details. I’ve already started noticing significant savings on my electricity bills. I’m very satisfied with their work and would recommend them without hesitation.',
                },
                {
                    authorName: 'Simran Kaur',
                    rating: 5,
                    date: 'February, 2024',
                    text: 'I had a wonderful experience with Exolar Emergy. The team was efficient, and the installation was completed on time. The solar panels are working great, and I’ve noticed a decrease in my energy usage. I’m so glad I made the decision to go solar with them.',
                },
                {
                    authorName: 'Harish Chandra',
                    rating: 5,
                    date: 'February, 2024',
                    text: 'I highly recommend Exolar Emergy for anyone considering solar. Their team was professional and made the whole process easy. The system has been working efficiently, and I’ve already seen a reduction in my electricity bills. The service was excellent from start to finish.',
                },
                {
                    authorName: 'Pooja Thakur',
                    rating: 5,
                    date: 'January, 2024',
                    text: 'Exolar Emergy provided me with top-notch service. The team was knowledgeable, and they installed the system quickly and efficiently. The solar system is performing well, and I’m very pleased with the results. My electricity costs have significantly reduced since installation. I would highly recommend them.',
                }
            ],
            services: [
                'Review'
            ],
        };
    },
};
</script>

<style scoped>
.card-title {
    font-size: 1.1rem;
}
</style>