<template>
    <div class="container my-5">
        <div class="row" v-for="(day, index) in test" :key="index">
            <div class="col-12 mb-4">
                <div class="card">
                    <div class="p-2 fw-bold text-bg-light text-capitalize">
                        {{ day.type }}
                    </div>
                    <div class="card-body">
                        <p class="card-title">{{ day.subTitle }}</p>
                        <p class="card-text">{{ day.description }}</p>
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
            test: [
                {
                    type: "Intermediate Bulk Containers ( IBC )",
                    subTitle: 'Typically 1,000 liters (264 gallons), but can range from 500 to 1,250 liters',
                    description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                    image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                },
                {
                    type: "Drums",
                    subTitle: 'The standard drum in the petroleum industry holds 200 liters (also referred to as a 55-gallon drum in the U.S.)',
                    description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 liters* (26 gallons) and smaller sizes like *30 liters*',
                    image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                },
                {
                    type: "Pails",
                    subTitle: 'Typically 18-20 liters (around 5 gallons)',
                    description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                    image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                },
                {
                    type: "Medium / Small sized containers",
                    subTitle: 'These containers can range from 1 to 50 liters',
                    description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                    image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                },

            ]
        }
    }
}
</script>
<style lang="">

</style>