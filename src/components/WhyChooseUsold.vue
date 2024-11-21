<template>
    <div class="">
        <div class="container px-3 px-md-0">
            <h1 class="text-center text-capitalize">Lots of exciting features</h1>
            <h4 class="text-center text-capitalize">to manage your network</h4>
           
        </div>
    </div>
</template>
<script>
export default {
    name: "OurService",
    data() {
        return {
            "servicesLeft": [
                {
                    "id": 1,
                    "title": "Contact Details",
                    "icon": "bi-headset",
                    "description": "Providing seamless communication channels to ensure you're always connected with us."
                },
                {
                    "id": 2,
                    "title": "Social Profiles",
                    "icon": "bi-person-square",
                    "description": "Showcasing our professional presence and updates across all major social platforms."
                },
                {
                    "id": 3,
                    "title": "Skillset",
                    "icon": "bi-pie-chart",
                    "description": "Highlighting our diverse and specialized skills to meet your business needs."
                },
                {
                    "id": 4,
                    "title": "Timeline",
                    "icon": "bi-clock-history",
                    "description": "A detailed view of our project timelines and key milestones achieved."
                },
                {
                    "id": 5,
                    "title": "Share",
                    "icon": "bi-share",
                    "description": "Easily share our content and updates with your network to spread the word."
                }
            ],
            "servicesRight": [
                {
                    "id": 1,
                    "title": "Qr Code",
                    "icon": "bi-qr-code",
                    "description": "Quick access to information through our QR codes for efficient engagement."
                },
                {
                    "id": 2,
                    "title": "Website Widget",
                    "icon": "bi-window-plus",
                    "description": "Integrate our services seamlessly into your website for enhanced user experience."
                },
                {
                    "id": 3,
                    "title": "Fun Facts",
                    "icon": "bi-123",
                    "description": "Interesting insights and trivia about our company and industry."
                },
                {
                    "id": 4,
                    "title": "Attributes",
                    "icon": "bi-stars",
                    "description": "Highlighting the unique features and qualities that set us apart."
                },
                {
                    "id": 5,
                    "title": "Payment",
                    "icon": "bi-bank",
                    "description": "Flexible payment options to suit your convenience and preferences."
                }
            ]

        }
    }
}
</script>
<style lang="">

</style>