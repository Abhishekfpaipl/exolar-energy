<!-- <template>
    <div>
        <h1>My Blog Posts</h1>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <h2>{{ post.title }}</h2>
                <p v-html="post.content"></p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
        };
    },
    async created() {
        const apiKey = 'AIzaSyB9GyVaW4PVIwRGWunb7lSx5BgTx-hd2q4';
        const blogId = '6475577164886193723';
        const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.posts = data.items || [];
        } catch (error) {
            console.error('Error fetching blog posts:', error);
        }
    },
};
</script> -->

<template>
    <div class="container py-5">
        <div class="text-start mb-5">
            <h2 class="text-muted mb-1 text-uppercase">Want to know about us</h2>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="display-5  text-uppercase" style="color: var(--bg-primary);">Exolar energy</h2>
                <router-link to="/blogs" class="text-decoration-none d-flex align-items-center"
                    style="color: var(--bg-primary);">
                    <span>SEE ALL</span>
                    <i class="bi bi-arrow-right fs-3 visit ms-2"></i>
                </router-link>
            </div>
        </div>
        <ul class="nav nav-pills mb-4 justify-content-start justify-content-md-center overflow-x-scroll flex-nowrap"
            id="scroll" style="white-space: nowrap;" role="tablist">
            <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
                <button class="nav-link text-muted rounded" :class="{ active: activeTab === tab.id }"
                    @click="activeTab = tab.id">
                    {{ tab.name }}
                </button>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade show active">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div class="col" v-for="(post, index) in filteredPosts.slice(0,6)" :key="index" v-observe>
                        <router-link to=""
                            class="text-decoration-none card h-100 border-0 shadow-sm rounded-4"
                            style="background-color: #F3F8F3;">
                            <img v-if="post.image" :src="post.image" class="card-img-top rounded-top-4"
                                alt="Rooftop solar panel installation in Delhi by Exolar Energy"
                                style="height: 230px; object-fit: cover;">
                            <div v-else class="video-container" style="height: 230px;">
                                <iframe style="width: 100%; height: 100%;" class="rounded-top-4"
                                    :src="`https://www.youtube.com/embed/${post.videoId}`" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                            <div class="card-body text-start rounded-4"
                                style="background-color: #F3F8F3;margin-top: -40px;">
                                <h5 class="card-title text-capitalize fw-bold">{{ post.title }}</h5>
                                <p class="card-text small">{{ post.description }}</p>
                            </div>
                            <div class="card-footer" style="background-color: #F3F8F3;">
                                <div class="d-flex gap-3 justify-content-between align-items-center text-muted smaller">
                                    <span>{{ post.date }}</span>
                                    <p class="mb-0" style="color: var(--primary-color);">Read more <i
                                            class="bi bi-arrow-right visit"></i></p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogSection',
    data() {
        return {
            activeTab: 'all',
            tabs: [
                { id: 'all', name: 'All Posts' },
                { id: 'projects', name: 'Projects' },
                { id: 'testimonial', name: 'Testimonials' },
                { id: 'why choose us', name: 'Why Choose Us' },
            ],
            posts: [
                {
                    id: 1,
                    title: 'system installed 9.8kW',
                    sid: "crm-119",
                    date: '01/10/2024',
                    image: '/img/blogs/blog1.jpg',
                    description: "Vaibhav Chaudhary from Noida sector 105",
                    category: 'projects'
                },
                {
                    id: 2,
                    title: 'system installed 6kW',
                    sid: "rajeev-kakkar",
                    date: '24/09/2024',
                    image: '/img/blogs/blog2.jpg',
                    description: "Rajeev kakkar from Guru Harikrishna Nagar, Delhi",
                    category: 'projects'
                },
                {
                    id: 3,
                    title: 'system installed 5kW',
                    sid: "debunking-the-fear-of-malicious-complaints-under-posh-act",
                    date: '21/09/2024',
                    image: '/img/blogs/blog3.jpg',
                    description: "Suresh Kumar from Ghaziabad",
                    category: 'projects'
                },
                {
                    id: 4,
                    title: 'system installed 30 kW',
                    sid: "the-legal-intrusion-in-posh",
                    date: '27/08/2024',
                    image: '/img/blogs/blog4.jpg',
                    description: 'Lamba Hyundai Showroom in Wazirpur',
                    category: 'projects'
                },
                {
                    id: 5,
                    title: 'Exolar Energy Testimonial Video',
                    sid: "exolar-energy-testimonial-video",
                    date: '27/08/2024', 
                    description: 'Lamba Hyundai Showroom in Wazirpur',
                    category: 'testimonial',
                    videoId: "ZtCsYVnjmn4",
                },
                {
                    id: 6,
                    title: 'Unleashing the Power of the Sun: Exolar Energy - Leading the Solar Revolution',
                    sid: "unleashing-the-power-of-the-sun",
                    date: '27/08/2024', 
                    description: 'Lamba Hyundai Showroom in Wazirpur',
                    category: 'why choose us',
                    videoId: "f-4FWD6wAuk",
                },
                {
                    id: 7,
                    title: 'Empowering Tomorrow: Exolar Energy - Harness the Power of the Sun!',
                    sid: "empowering-tomorrow",
                    date: '27/08/2024', 
                    description: 'Lamba Hyundai Showroom in Wazirpur',
                    category: 'why choose us',
                    videoId: "Y-RWg3xUsAU",
                },
            ],
        }
    },
    computed: {
        filteredPosts() {
            if (this.activeTab === 'all') {
                return this.posts
            }
            return this.posts.filter(post => post.category === this.activeTab)
        }
    }
}
</script>

<style scoped>
.nav-link.active {
    background-color: var(--bg-primary);
    color: white !important;
}

.card {
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}
</style>