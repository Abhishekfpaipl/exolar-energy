<template>
    <div class="container my-5 pb-4">
        <div class="text-start mb-5">
            <p class="text-muted text-uppercase mb-1">ariseol</p>
            <h2 class="display-5 text-uppercase " style="color: var(--bg-primary);">CHECK OUR TEAM</h2>
        </div>

        <!-- <div class="row">
            <div class="col-md-4 mb-4" v-for="member in teamMembers" :key="member.id">
                <div class="card border-0 shadow-sm">
                    <img :src="member.image" class="card-img-top" :alt="member.name">
                    <div class="card-body text-center">
                        <h5 class="card-title text-primary">{{ member.name }}</h5>
                        <p class="card-text text-muted">{{ member.position }}</p>
                        <div class="mt-3">
                            <a href="#" class="text-muted me-2"><i class="bi bi-twitter"></i></a>
                            <a href="#" class="text-muted me-2"><i class="bi bi-facebook"></i></a>
                            <a href="#" class="text-muted me-2"><i class="bi bi-instagram"></i></a>
                            <a href="#" class="text-muted"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="row gy-5" v-observe>
            <div class="col-lg-4 col-md-6 mb-5" v-for="member in teamMembers" :key="member.id">
                <div class="position-relative">
                    <div class="pic"><img :src="member.image" class="img-fluid" alt=""></div>
                    <div class="member-info bg-light">
                        <h4 class="text-start mb-1">{{ member.name }}</h4>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="text-start mb-0">{{ member.position }}</p>
                            <!-- <div class="mt-3">
                                <a href="#" class="text-muted me-2"><i class="bi bi-twitter"></i></a>
                                <a href="#" class="text-muted me-2"><i class="bi bi-facebook"></i></a>
                                <a href="#" class="text-muted me-2"><i class="bi bi-instagram"></i></a>
                                <a href="#" class="text-muted"><i class="bi bi-linkedin"></i></a>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeamSection',
    data() {
        return {
            teamMembers: [
                {
                    id: 1,
                    name: 'Walter White',
                    position: 'Founder & Owner',
                    image: '/img/founder.jpg'
                },
                {
                    id: 2,
                    name: 'John Brown',
                    position: 'Chief Executive Officer',
                    image: '/img/ceo.jpg'
                },
                {
                    id: 3,
                    name: 'William Anderson',
                    position: 'Chief Marketing Officer',
                    image: '/img/cmo.jpg'
                }
            ]
        }
    }
}
</script>

<style scoped>
.card {
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
}

.member-info {
    background-color: var(--surface-color);
    color:
        color-mix(in srgb, var(--default-color), transparent 20%);
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: -50px;
    left: 20px;
    right: 20px;
    padding: 20px 15px;
    overflow: hidden;
    transition: 0.5s;
}

.before-enter {
    opacity: 0;
    transform: translateY(80px);
    transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}

.enter {
    opacity: 1;
    transform: translateY(0);
}
</style>