<template>
    <div class="brandText">
        <div class="container">
            <h1 class="text-center text-capitalize mb-4">How it works</h1>
            <div class="d-flex flex-column m-auto align-items-center" style="max-width: 500px;">
                <div v-for="(lead, index) in values" :key="index" class="funnel-step"
                    :style="{ width: calculateWidth(index) }">
                    <div class="card py-3 d-flex flex-column" :style="{ backgroundColor: lead.color }">
                        <div class="image text-center">
                            <p class="ms-2 mb-0 fw-bold">{{ lead.title }}</p>
                        </div>
                        <div class="content">
                            <p class="mb-0">{{ lead.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SalesFunnel",
    data() {
        return {
            values: [
                {
                    id: 1,
                    icon: 'bi-funnel fs-4',
                    title: "Start With High-Quality Traffic from Everywhere",
                    color: '#e76365',
                    description: "Buy targeted advertising on Facebook and Instagram or Google and start driving high- quality traffic to your Saleswik landing pages.",
                },
                {
                    id: 2,
                    icon: 'bi-diagram-3 fs-4',
                    title: "Send the traffic to your Sales Funnel ",
                    color: "#f5925e",
                    description: "Select a high-converting Saleswik landing page which is more optimized for your business goals. ",
                },
                {
                    id: 3,
                    icon: 'bi-hand-thumbs-up fs-4',
                    title: "Conversion of the traffic into Leads",
                    color: "#f8a42a",
                    description: "Get more conversions by capturing the contact details of the visitors, visiting your Saleswik landing page.",
                },
                {
                    id: 4,
                    icon: 'bi-megaphone fs-4',
                    title: "Nurture leads with follow-ups",
                    color: "#f8d452",
                    description: "Set up campaigns to nurture your leads and build relationships and turn your expertise into a commodity",
                },
                {
                    id: 5,
                    icon: 'bi-telephone fs-4',
                    title: "Start selling your products",
                    color: "#fbd453",
                    description: "From your sales page and order form templates in seconds to sell your products and services online.",
                },
                {
                    id: 6,
                    icon: 'bi-whatsapp fs-4',
                    title: "Upsell with offers",
                    color: "#c9d825",
                    description: "Increase your revenue and promote limited-time offers immediately after a customer's purchase.",
                },
                {
                    id: 7,
                    icon: 'bi-clipboard-data fs-4',
                    title: "Get paid",
                    color: "#5ccd5f",
                    description: "Connect to Payment Gateway without leaving the app. Sell your products and services right on your Saleswik landing page.",
                },
            ],
        }
    },
    methods: {
        calculateWidth(index) {
            const totalSteps = this.values.length;
            const maxWidth = 100;
            const minWidth = 60;
            const stepWidth = (maxWidth - minWidth) / (totalSteps - 1);
            return `${maxWidth - (stepWidth * index)}%`;
        }
    }
}
</script>

<style scoped>
.funnel-step {
    margin-bottom: 20px;
    transition: width 0.3s ease-in-out;
}

.card {
    transition: 0.3s ease-in-out;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
}

.content {
    color: #111;
    text-align: center;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
    opacity: 0;
}

.card:hover .content {
    max-height: 300px;
    opacity: 1;
}

.image {
    transition: 0.3s ease-in-out;
}

.card:hover .image {
    transform: translateY(-10px);
}
</style>