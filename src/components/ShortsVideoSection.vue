<template>
    <div>
        <div class="container">
            <div class="text-start">
                <p class="text-muted mb-1 text-uppercase">Exolar Energy</p>
                <div class="d-flex justify-content-between align-items-center">
                    <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Testimonial Video</h2>
                    <router-link to="/testimonial" style="color: var(--bg-primary);"
                        class="text-decoration-none text-uppercase">see more <i
                            class="bi bi-arrow-right"></i></router-link>
                </div>
            </div>
            <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-3 my-5">
                <div v-for="(video, index) in videos" :key="index" class="col">
                    <div class="h-100 shadow-sm rounded-4" style="background-color:#626B7A !important ;">
                        <div class="video-container" style="height: 250px;">
                            <iframe style="width: 100%; height: 100%;" class="rounded-top-4"
                                :src="`https://www.youtube.com/embed/${video.videoId}`" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        <div class="rounded-4 border pt-3" style="background-color:#f3f8f3 !important">
                            <div class="smaller text-muted text-start px-2 text-ellipsis2 mb-3" style="min-height:36px">
                                {{ video.title }}
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
                                    <i class="bi bi-eye me-1"></i>
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
export default {
    data() {
        return {
            videos: [
                {
                    videoId: "ZtCsYVnjmn4",
                    title: "Exolar Energy Testimonial video",
                    viewCount: 26,
                },
                {
                    videoId: "f-4FWD6wAuk",
                    title: "Unleashing the Power of the Sun: Exolar Energy - Leading the Solar Revolution",
                    viewCount: 26,
                },
                {
                    videoId: "Y-RWg3xUsAU",
                    title: "Empowering Tomorrow: Exolar Energy - Harness the Power of the Sun!",
                    viewCount: 26,
                },
                {
                    videoId: "ZtCsYVnjmn4",
                    title: "Exolar Energy Testimonial video",
                    viewCount: 26,
                },
                {
                    videoId: "f-4FWD6wAuk",
                    title: "Unleashing the Power of the Sun: Exolar Energy - Leading the Solar Revolution",
                    viewCount: 26,
                },
                {
                    videoId: "Y-RWg3xUsAU",
                    title: "Empowering Tomorrow: Exolar Energy - Harness the Power of the Sun!",
                    viewCount: 26,
                },
            ],
        };
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
