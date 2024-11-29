<template>
    <div class="" style="padding-top: 60px;">
        <SectionTopBanner />
        <div class="container py-5 mb-5">
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
                        <div class="col" v-for="(post, index) in filteredPosts" :key="index" v-observe>
                            <router-link :to="'/customer-detail/' + post.sid"
                                class="text-decoration-none card h-100 border-0 shadow-sm rounded-4 overflow-hidden text-white"
                                style="background-color: var(--bg-primary)">
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
                                    style="background-color:  var(--bg-primary); margin-top: -40px; z-index: 10;">
                                    <h5 class="card-title text-capitalize fw-bold">{{ post.title }}</h5>
                                    <p class="card-text small">{{ post.description }}</p>
                                </div>
                                <div class="card-footer border-white" style="background-color:var(--bg-primary);">
                                    <div class="d-flex gap-3 justify-content-between align-items-center smaller">
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
    </div>
</template>

<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';

export default {
    name: 'BlogSection',
    components: {
        SectionTopBanner,
    },
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
        },
    }
}
</script>

<style scoped>
.nav-link.active {
    background-color: var(--bg-primary);
    color: white !important;
}

img:hover {
    scale: 1.1;
    transition: scale 1s ease;
}
</style>