<template>
    <div class="" style="padding-top: 60px; background-color: var(--bg-background);">
        <div class="container p-2 mb-5 pb-5">
            <div v-if="post.images" id="customerDetailImages" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item" v-for="(banner, index) in post.images" :key="index"
                        :class="{ 'active': index === 0 }" data-bs-interval="1500">
                        <img :src="banner" class="d-block w-100"
                            alt="Rooftop solar panel installation in Delhi by Exolar Energy" height="auto" width="100%">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#customerDetailImages"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#customerDetailImages"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <img v-else-if="post.image" :src="post.image" class="img-fluid"
                alt="Rooftop solar panel installation in Delhi by Exolar Energy" width="100%" height="auto">
            <div v-else class="video-container" style="height: 400px;">
                <iframe style="width: 100%; height: 100%;" class=""
                    :src="`https://www.youtube.com/embed/${post.videoId}`" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <div class="text-start my-5">
                <!-- <h2 class="text-muted mb-1 text-uppercase">Customer</h2> -->
                <h2 class="display-5  text-uppercase" style="color: var(--bg-primary);">{{ post.title }}</h2>
            </div>
            <div class="text-start mt-5">
                <p class="card-text fs-5 mt-3">{{ post.description }}</p>
            </div>
            <p class="text-start mt-5">{{ post.date }}</p>

        </div>
        <div class="" style="border-top:2px solid var(--bg-third)">
            <BlogSection />
        </div>
    </div>
</template>

<script>
import BlogSection from "@/components/BlogSection.vue";
export default {
    name: 'CustomerDetailPage',
    components: {
        BlogSection,
    },
    data() {
        return {
            activeTab: 'all',
        }
    },
    computed: {
        post() {
            let postId = this.$route.params.postId
            return this.$store.getters.getPost(postId)
        },
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