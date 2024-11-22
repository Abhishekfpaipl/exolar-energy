<template>
    <div style="padding-top: 60px;">
        <SectionTopBanner />
        <div class="container mt-4">
            <h2 class="text-start mb-4">Latest Videos</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 my-5">
                <div v-for="(video, index) in videos" :key="index" class="col">
                    <div class="h-100 shadow-sm rounded-4" style="background-color:#626B7A !important ;">
                        <!-- Video Section -->
                        <div class="video-container" style="height: 250px;">
                            <iframe style="width: 100%; height: 100%;" class="rounded-top-4"
                                :src="`https://www.youtube.com/embed/${video.videoId}`" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        <div class="rounded-4 border pt-3" style="background-color:#f3f8f3 !important">
                            <div class="smaller text-muted text-start px-2 text-ellipsis2 mb-3" style="min-height:36px">
                                " {{ video.title }}
                            </div>
                            <div class="d-flex justify-content-between align-items-center p-2 pb-4">
                                <div class="small">
                                    <i class="bi bi-star-fill text-warning"></i>
                                    <i class="bi bi-star-fill text-warning"></i>
                                    <i class="bi bi-star-fill text-warning"></i>
                                    <i class="bi bi-star-fill text-warning"></i>
                                    <i class="bi bi-star-fill text-warning"></i>
                                </div>
                                <div class="views-counter text-muted smaller">
                                    <i class="bi bi-eye me-1 "></i>
                                    {{ video.viewCount }} views
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import SectionTopBanner from '@/components/SectionTopBanner.vue'

export default {
    components: {
        SectionTopBanner
    },
    data() {
        return {
            videos: [],
        };
    },
    created() {
        this.fetchAllVideos();
    },
    methods: {
        async fetchAllVideos() {
            // const apiKey = "AIzaSyB78gC2yfrEe7GzdQXJVG-ZmQESLWAwRnM";
            const apiKey = "AIzaSyDIJw8aJPUCKW4q2Kqq-mlYnFZ8Eq4Anis";
            // const channelId = "UCIgE6BvgzK3nSnesZPJy2wQ";
            const channelId = "UC9Z3-5kyCd5ng_ghfuare4w";
            const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&type=video&key=${apiKey}`;

            try {
                const response = await axios.get(url);
                const data = response.data;

                // Check if videos are returned
                if (data.items && data.items.length > 0) {
                    this.videos = data.items.map(async (item) => {
                        // Fetch video details for view count
                        const videoDetailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${item.id.videoId}&key=${apiKey}`;
                        const videoDetailsResponse = await axios.get(videoDetailsUrl);
                        const viewCount = videoDetailsResponse.data.items[0].statistics.viewCount;

                        return {
                            videoId: item.id.videoId,
                            thumbnailUrl: item.snippet.thumbnails.high.url,
                            title: item.snippet.title,
                            viewCount: this.formatViewCount(viewCount),
                        };
                    });
                    this.videos = await Promise.all(this.videos);
                }
            } catch (error) {
                console.error("Error fetching YouTube data:", error);
            }
        },
        formatViewCount(count) {
            if (count >= 1000000) {
                return (count / 1000000).toFixed(1) + 'M';
            }
            if (count >= 1000) {
                return (count / 1000).toFixed(1) + 'K';
            }
            return count;
        },
    },
}; 
</script>
<style>
.short-thumbnail {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 12px;
}

.testimonial-text {
    color: #6c757d;
    font-size: 0.9rem;
    line-height: 1.5;
    position: relative;
    padding-left: 1rem;
}


.views-counter {
    font-size: 0.8rem;
}
</style>