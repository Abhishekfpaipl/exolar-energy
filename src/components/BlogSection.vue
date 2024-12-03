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
    <div class="container-fluid bg-light">
        <div class="container py-5">
            <div class="text-center mb-5">
                <h2 class="text-muted mb-1 text-uppercase">Innovation | Trust | Sustainability | Community</h2>
                <h2 class="display-5  text-uppercase" style="color: var(--bg-primary);">Our Happy Customers</h2>
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
                        <div class="col" v-for="(post, index) in filteredPosts.slice(0, 3)" :key="index" v-observe>
                            <router-link :to="'/customer-detail/' + post.sid"
                                class="text-decoration-none card h-100 border-0 shadow-sm rounded-4 overflow-hidden text-dark"
                                style="background-color: var(--bg-light)">
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
                                    style="background-color:  var(--bg-light); margin-top: -40px; z-index: 10;">
                                    <h5 class="card-title text-capitalize fw-bold">{{ post.title }}</h5>
                                    <p class="card-text small">{{ post.description }}</p>
                                </div>
                                <div class="card-footer border-white" style="background-color:var(--bg-light);">
                                    <div
                                        class="d-flex gap-3 justify-content-between align-items-center smaller">
                                        <span>{{ post.date }}</span>
                                        <p class="mb-0" style="color: var(--primary-color);">Read more <i
                                                class="bi bi-arrow-right visit"></i></p>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <!-- <div class="btn d-flex justify-content-center my-5 align-items-center"
                        style="background-color: var(--bg-primary);"> -->
                    <router-link to="/customers" style="background-color: var(--bg-secondary);"
                        class="btn d-flex justify-content-center my-5 align-items-center text-white">
                        <span>SEE ALL</span>
                        <i class="bi bi-arrow-right fs-3 visit ms-2"></i>
                    </router-link>
                    <!-- </div> -->
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
            activeTab: 'projects', 
        }
    },
    computed: {
        tabs() {
            return this.$store.getters.getTabs
        },
        posts() {
            return this.$store.getters.getPosts
        },
        filteredPosts() {
            if (this.activeTab === 'projects') {
                return this.posts
            }
            return this.posts.filter(post => post.category === this.activeTab)
        }
    }
}
</script>

<style scoped>
.nav-link.active {
    background-color: var(--bg-secondary);
    color: white !important;
}


img:hover {
    scale: 1.1;
    transition: scale 1s ease;
}
</style>