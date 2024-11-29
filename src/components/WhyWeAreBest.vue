<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-6">
                <div class="text-start"> 
                    <h1 class="display-5 text-uppercase" style="color: var(--bg-primary);">Why We Are The Best</h1>
                </div> 
                <div v-for="(item, index) in highlights" :key="index" class="mb-4">
                    <p class="fw-bold mb-1 text-start">{{ item.title }}</p>
                    <p class="text-muted mb-1 text-start">{{ item.description }}</p>
                </div>
            </div>
            <div class="col-md-6">
                <img src="/img/About_Img.jpg" alt="Rooftop solar panel installation in Delhi by Exolar Energy"
                    class="img-fluid">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhyWeAreBest',
    data() {
        return {
            highlights: [
                {
                    title: "Founded by professionals with extensive experience in solar sector.",
                    description: "We have a culture of competence and excellence."
                },
                {
                    title: "Team of high competence engineers.",
                    description: "Our designs are robust and well thought through."
                },
                {
                    title: "We use the latest software in the field.",
                    description: "Our designs are optimised for efficiency."
                },
                {
                    title: "We suggest multiple options for the customers to benefit from.",
                    description: "You can choose what is best for you."
                },
                {
                    title: "Remote monitoring and data analysis.",
                    description: "Data and information about your plant on your fingertips."
                }
            ]
        };
    }
};
</script>

<style scoped></style>
