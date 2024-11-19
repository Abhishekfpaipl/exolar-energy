<template>
    <div class="container">
        <div class="text-start">
            <p class="text-muted mb-1 text-uppercase">Exolar Energy</p>
            <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Faqs</h2>
        </div>
        <ul class="nav nav-pills justify-content-start align-items-center" id="pills-tab" role="tablist">
            <div class="d-flex overflow-x-scroll gap-3 my-3 p-2 px-3 rounded" id="scroll">
                <li class="nav-item border rounded-pill" role="presentation" v-for="(price, index) in pricing"
                    :key="index">
                    <button class="nav-link text-dark" :class="{ 'active': index === activeTabIndex }"
                        :id="'tab-' + index" data-bs-toggle="pill" :data-bs-target="'#content-' + index" type="button"
                        role="tab" :aria-controls="'content-' + index" :aria-selected="index === activeTabIndex"
                        @click="activeTabIndex = index">{{ price.name
                        }}</button>
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
                v-for="(price, index) in pricing" :key="index" :id="'content-' + index" role="tabpanel"
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
                                <div :id="'flush-collapseOne' + index" class="accordion-collapse collapse border mt-2 rounded"
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
export default {
    name: "FaqPage",
    components: {
        FaqFormSection,
    },
    data() {
        return {
            pricing: [
                {
                    name: "All",
                    faqs: [
                        {
                            "question": "What are the benefits of installing solar panels?",
                            "answer": "Solar panels help reduce electricity bills, decrease carbon footprint, and provide a renewable source of energy. In India, solar power also allows users to take advantage of government subsidies and incentives."
                        },
                        {
                            "question": "How much can I save on electricity bills with solar panels?",
                            "answer": "By installing solar panels, you can save up to 70-90% on your electricity bills, depending on the size of your solar system and energy consumption."
                        },
                        {
                            "question": "Does the government offer any subsidies for solar panel installations?",
                            "answer": "Yes, the Indian government offers subsidies for residential solar panel installations under various state and national schemes to encourage solar energy adoption."
                        },
                        {
                            "question": "How long do solar panels last?",
                            "answer": "Solar panels typically last between 25 to 30 years with minimal maintenance, providing reliable energy over their lifespan."
                        },
                        {
                            "question": "Can solar panels work during cloudy or rainy days?",
                            "answer": "Yes, solar panels can still generate power on cloudy or rainy days, though the efficiency may be reduced compared to sunny days."
                        },
                        {
                            "question": "Do I need a battery for my solar panel system?",
                            "answer": "A battery is not necessary but can be useful for storing excess energy generated by your solar panels, allowing you to use solar power during the night or during power outages."
                        },
                        {
                            "question": "What maintenance is required for solar panels?",
                            "answer": "Solar panels require minimal maintenance. Regular cleaning to remove dust and debris and occasional system checks are recommended to ensure optimal performance."
                        },
                        {
                            "question": "How long does it take to install solar panels?",
                            "answer": "The installation of solar panels typically takes 1 to 3 days, depending on the size of the system and the complexity of the installation."
                        }
                    ],
                },
            ],
            searchTerm: '',
            activeTabIndex: 0
        };
    },
    methods: {
        filteredFaqs(plans) {
            if (!this.searchTerm) {
                return plans;
            }
            const term = this.searchTerm.toLowerCase();
            return plans.filter(faq =>
                faq.question.toLowerCase().includes(term) || faq.answer.toLowerCase().includes(term)
            );
        },
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
