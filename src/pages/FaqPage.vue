<template>
    <SectionTopBanner />
    <div class="container my-5">
        <div class="text-start">
            <h2 class="text-muted mb-1 text-uppercase">Exolar Energy</h2>
            <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Faqs</h2>
        </div>
        <ul class="nav nav-pills justify-content-start align-items-center" id="pills-tab" role="tablist">
            <div class="d-flex overflow-x-scroll gap-3 my-3 p-2 px-3 rounded" id="scroll">
                <li class="nav-item border rounded-pill" role="presentation" v-for="(price, index) in faqs" :key="index"
                    style="text-wrap:nowrap">
                    <button class="nav-link text-dark" :class="{ 'active': index === activeTabIndex }"
                        :id="'tab-' + index" data-bs-toggle="pill" :data-bs-target="'#content-' + index" type="button"
                        role="tab" :aria-controls="'content-' + index" :aria-selected="index === activeTabIndex"
                        @click="handleTabClick(index)">{{ price.name }}</button>

                </li>
            </div>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div class="d-flex align-items-center shadow p-2 mb-3">
                <input type="search" placeholder="Search for questions?" v-model="searchTerm"
                    class="form-control border-0" ref="searchInput" @keyup.enter="search">
                <div>
                    <i class="bi bi-search" @click="search"></i>
                </div>
            </div>
            <div class="tab-pane fade" :class="{ 'show active': index === activeTabIndex }"
                v-for="(price, index) in faqs" :key="index" :id="'content-' + index" role="tabpanel"
                :aria-labelledby="'tab-' + index" tabindex="0">
                <div class="row">
                    <div class="col-12" v-for="(faq, index) in filteredFaqs(price.faqs)" :key="index" v-observe>
                        <div class="accordion accordion-flush" style="background-color: var(--bg-primary);"
                            id="accordionFlushExample">
                            <div class="accordion-item my-2 border-0 ">
                                <h2 class="accordion-header border">
                                    <button class="accordion-button text-dark collapsed border-start border-4"
                                        type="button" data-bs-toggle="collapse"
                                        :data-bs-target="'#flush-collapseOne' + index" aria-expanded="false"
                                        :aria-controls="'flush-collapseOne' + index"
                                        style="border-color: var(--bg-third) !important; background-color: #f3f8f3">
                                        <span class="me-2">Q{{ index + 1 }}.</span> {{ faq.question }}
                                    </button>
                                </h2>
                                <div :id="'flush-collapseOne' + index"
                                    class="accordion-collapse collapse border mt-2 rounded"
                                    data-bs-parent="#accordionFlushExample" style="background-color:#f3f8f3 !important">
                                    <div class="accordion-body text-start">{{ faq.answer }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="filteredFaqs(price.faqs).length === 0" class="col-12">
                        <p class="text-center">No results found.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <FaqFormSection />

</template>


<script>
import FaqFormSection from '@/components/FaqFormSection.vue'
import SectionTopBanner from '@/components/SectionTopBanner.vue';
export default {
    name: "FaqPage",
    components: {
        FaqFormSection,
        SectionTopBanner,
    },
    data() {
        return {
            searchTerm: '',
            activeTabIndex: 0
        };
    },
    computed: {
        faqs() {
            return this.$store.getters['faqs/getFaqs']
        }
    },
    methods: {
        filteredFaqs(faqs) {
            if (!this.searchTerm) {
                return faqs;
            }
            const term = this.searchTerm.toLowerCase();
            return faqs.filter(faq =>
                faq.question.toLowerCase().includes(term) || faq.answer.toLowerCase().includes(term)
            );
        },
        handleTabClick(index) {
            this.activeTabIndex = index;

            const tabElement = document.getElementById(`tab-${index}`);
            const scrollContainer = document.getElementById("scroll");

            // Scroll only if the element and container exist
            if (tabElement && scrollContainer) {
                const containerRect = scrollContainer.getBoundingClientRect();
                const tabRect = tabElement.getBoundingClientRect();

                // Calculate horizontal scroll adjustment
                const offset = tabRect.left - containerRect.left;

                // Use scrollTo with smooth behavior
                scrollContainer.scrollTo({
                    left: scrollContainer.scrollLeft + offset - (containerRect.width / 2 - tabRect.width / 2),
                    behavior: "smooth"
                });
            }
        }
    },
    mounted() {
        // this.$refs.searchInput.focus();
    }
};
</script>

<style scoped>
.nav-link {
    transition: background-color 0.3s ease, color 0.3s ease;
}

.form-control {
    box-shadow: none !important;
}

.nav-link.active {
    background-color: var(--bg-primary) !important;
    color: white !important;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    border-radius: 2rem;
    /* transform: scale(1.2); */
}

.accordion-button:not(.collapsed) {
    color: white !important;
    background-color: var(--bg-third) !important;
    border-color: 4px solid var(--bg-primary) !important;
    box-shadow: none !important;
}

.accordion-button:focus {
    z-index: 3;
    outline: 0;
    box-shadow: none !important;
}

.accordion-button::after {
    filter: invert(1) !important
}
</style>
