<template>
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
</style>