<template>
    <div class="bg-light py-4">
        <div class="container" v-observe>
            <div class="row row-cols-2 row-cols-sm-2 row-cols-lg-4 g-4">
                <div class="col">
                    <div class="card border-0 bg-white shadow-sm">
                        <div class="card-body text-center">
                            <i class="bi bi-emoji-smile text-success fs-4 mb-2"></i>
                            <h2 class="card-title mb-0">232</h2>
                            <p class="card-text text-muted">Happy Clients</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 bg-white shadow-sm">
                        <div class="card-body text-center">
                            <i class="bi bi-list-check text-success fs-4 mb-2"></i>
                            <h2 class="card-title mb-0">521</h2>
                            <p class="card-text text-muted">Projects</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 bg-white shadow-sm">
                        <div class="card-body text-center">
                            <i class="bi bi-headset text-success fs-4 mb-2"></i>
                            <h2 class="card-title mb-0">1463</h2>
                            <p class="card-text text-muted">Hours Of Support</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 bg-white shadow-sm">
                        <div class="card-body text-center">
                            <i class="bi bi-people text-success fs-4 mb-2"></i>
                            <h2 class="card-title mb-0">15</h2>
                            <p class="card-text text-muted">Hard Workers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CounterSection'
}
</script> 