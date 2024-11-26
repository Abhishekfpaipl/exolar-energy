<template>
    <div class="text-bg-light">
        <div class="container py-5">
            <h1 class="my-4 text-center text-capitalize">We are offering softwares</h1>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
                <div class="col" v-for="(service, index) in services" :key="index">
                    <router-link :to="'/service-sentence/' + service.name" class="card text-decoration-none text-dark">
                        <div class="d-flex justify-content-center align-items-center py-2 border-bottom">
                            <div class="border rounded-circle p-3 px-4">{{ index + 1 }}</div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title text-center text-capitalize">{{ service.name }}</h5>
                            <p class="card-text text-center text-ellipsis">{{ service.description }}</p>
                            <a href="#" class="btn w-100 text-dark btn-warning">More</a>
                        </div>
                    </router-link>
                </div>
            </div>
            <h1 class="my-4 text-center text-capitalize">we are loved by peoples</h1>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                <div class="col" v-for="(customer, index) in customers" :key="index">
                    <router-link :to="'/customer-sentence/' + customer.name" class="card text-decoration-none p-2"
                        :style="{ backgroundColor: customer.color }">
                        <p class="text-center border-bottom py-2 border-dark fs-4"><i class="bi bi-globe"></i></p>
                        <div class="card-body text-center pt-0 ">
                            <p class="card-text text-capitalize my-1 fw-bold">{{ customer.name }}</p>
                            <p class="card-text text-capitalize">Lorem ipsum, dolor sit amet consectetur adipisicing
                                elit.
                                Alias, cupiditate.</p>
                        </div>
                    </router-link>
                </div>
            </div>

            <h1 class="my-4 text-center text-capitalize">We are working for Categories</h1>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                <div class="col" v-for="(category, index) in categories" :key="index">
                    <router-link :to="'/category-sentence/' + category.name" class="card text-decoration-none">
                        <p class="text-center card-header fs-4">
                            <img v-if="category.img" :src="category.img" style="width: 30px;" alt="Rooftop solar panel installation in Delhi by Exolar Energy">
                            <i v-else class="bi bi-globe"></i>
                        </p>
                        <div class="card-body text-center">
                            <p class="card-text text-capitalize my-1 fw-bold">{{ category.name }}</p>
                            <p class="card-text text-capitalize my-1">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Alias, quae!</p>
                        </div>
                    </router-link>
                </div>
            </div>
            <h1 class="my-4 text-center text-capitalize">our working area</h1>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
                <div class="col" v-for="(place, index) in places" :key="index">
                    <router-link :to="'/place-sentence/' + place.name" class="card text-decoration-none">
                        <p class="text-center card-header text-capitalize border-0">{{ place.name }}</p>
                    </router-link>
                </div>
            </div>
            <img :src="ass" alt="Rooftop solar panel installation in Delhi by Exolar Energy">
        </div>
    </div>
</template>
<script>
export default {
    name: "BusinessCard",
    data() {
        return {
            services: [
                { id: 1, name: "Solar Panel", image: '/img/template1.png', description: "Track and manage leads throughout the sales pipeline efficiently." },
            ],
            customers: [
                { id: 1, name: "Residential", color: "#c6def1" },
                { id: 2, name: "Commercial", color: "#f2c6de" },
            ],
            categories: [
                { id: 1, img: '/img/categories/Assembly.svg', name: "Assembly" },
                { id: 2, img: '/img/categories/Automobiles.svg', name: "Automobiles" },
                { id: 3, img: '/img/categories/Boostore.svg', name: "Boostore" },
                { id: 4, img: '/img/categories/Business.svg', name: "Business" },
                { id: 5, img: '/img/categories/Distribution.svg', name: "Distribution" },
                { id: 6, img: '/img/categories/Education.svg', name: "Education" },
                { id: 7, img: '/img/categories/Electronics.svg', name: "Electronics" },
                { id: 8, img: '/img/categories/FMCG.svg', name: "FMCG" },
                { id: 9, img: '/img/categories/Footwear.svg', name: "Footwear" },
                { id: 10, img: '/img/categories/Garments.svg', name: "Garments" },
                { id: 11, img: '/img/categories/Import n Export.svg', name: "Import n Export" },
                { id: 12, img: '/img/categories/Manufacturing.svg', name: "Manufacturing" },
                { id: 13, img: '/img/categories/Pharmaceuticals.svg', name: "Pharmaceuticals" },
                { id: 14, img: '/img/categories/Restaurants.svg', name: "Restaurants" },
                { id: 15, img: '/img/categories/Retail Shop.svg', name: "Retail Shop" },
                { id: 16, img: '/img/categories/Retail.svg', name: "Retail" },
                { id: 17, img: '/img/categories/Salon.svg', name: "Salon" },
                { id: 18, img: '/img/categories/Services.svg', name: "Services" },
                { id: 19, img: '/img/categories/Subscription.svg', name: "Subscription" },
                { id: 20, img: '/img/categories/Supermart.svg', name: "Supermart" },
                { id: 21, img: '/img/categories/Supply Chain.svg', name: "Supply Chain" },
                { id: 22, img: '/img/categories/Textiles.svg', name: "Textiles" },
                { id: 23, img: '/img/categories/Warehouse.svg', name: "Warehouse" },
                { id: 24, img: '', name: "Body Massage Centres" },
                { id: 25, img: '', name: "Cinema Halls" },
                { id: 26, img: '', name: "Schools" },
                { id: 27, img: '', name: "Beauty Spas" },
                { id: 28, img: '', name: "Dermatologists" },
                { id: 29, img: '', name: "Hospitals" },
                { id: 30, img: '', name: "Malls" },
                { id: 31, img: '', name: "Gyms" },
                { id: 32, img: '', name: "Beauty Parlours" },
                { id: 33, img: '', name: "Estate Agents" },
                { id: 34, img: '', name: "Banquet Halls" },
                { id: 35, img: '', name: "ENT Doctors" },
                { id: 36, img: '', name: "Book Shops" },
                { id: 37, img: '', name: "Bike On Rent" },
                { id: 38, img: '', name: "Sexologist Doctors" },
                { id: 39, img: '', name: "Neurologists" },
                { id: 40, img: '', name: "Gynaecologist & Obstetrician Doctors" },
                { id: 41, img: '', name: "Train Ticket Booking Agents" },
                { id: 42, img: '', name: "Travel Agents" },
                { id: 43, img: '', name: "Paying Guest Accommodations" },
                { id: 44, img: '', name: "General Physician Doctors" },
                { id: 45, img: '', name: "Dentists" },
                { id: 46, img: '', name: "Orthopaedic Doctors" },
                { id: 47, img: '', name: "Chemists" },
                { id: 48, img: '', name: "Motor Training Schools" },
                { id: 49, img: '', name: "Gastroenterologists" },
                { id: 50, img: '', name: "Car Rental" },
                { id: 51, img: '', name: "Salons" },
                { id: 52, img: '', name: "Courier Services" },
                { id: 53, img: '', name: "Dance Classes" },
                { id: 54, img: '', name: "Pathology Labs" },
                { id: 55, img: '', name: "Taxi Services" },
                { id: 56, img: '', name: "Cake Shops" },
                { id: 57, img: '', name: "AC Repair & Services" },
                { id: 58, img: '', name: "Mobile Phone Dealers" },
                { id: 59, img: '', name: "Pet Shops" },
                { id: 60, img: '', name: "Dmart" },
                { id: 61, img: '', name: "Packers And Movers" },
                { id: 62, img: '', name: "Psychiatrists" },
                { id: 63, img: '', name: "Dharamshalas" },
                { id: 64, img: '', name: "Urologist Doctors" },
                { id: 65, img: '', name: "Bakeries" },
                { id: 66, img: '', name: "Bicycle Dealers" },
                { id: 67, img: '', name: "Coffee Shops" },
                { id: 68, img: '', name: "Paediatricians" },
                { id: 69, img: '', name: "Sonography Centres" },
                { id: 70, img: '', name: "Yoga Classes" },
                { id: 71, img: '', name: "Hostels" },
                { id: 72, img: '', name: "Cardiologists" },
                { id: 73, img: '', name: "Electrical Shops" },
                { id: 74, img: '', name: "Skin Care Clinics" },
                { id: 75, img: '', name: "Diagnostic Centres" },
                { id: 76, img: '', name: "Homeopathic Doctors" },
                { id: 77, img: '', name: "Physiotherapists" },
                { id: 78, img: '', name: "Photo Studios" },
                { id: 79, img: '', name: "Plumbers" },
                { id: 80, img: '', name: "Music Classes" },
                { id: 81, img: '', name: "Electricians" },
                { id: 82, img: '', name: "Sports Goods Dealers" },
                { id: 83, img: '', name: "Shoe Dealers" },
                { id: 84, img: '', name: "Hair Stylists" },
                { id: 85, img: '', name: "Gift Shops" },
                { id: 86, img: '', name: "Ophthalmologists" },
                { id: 87, img: '', name: "Car Repair & Services" },
                { id: 88, img: '', name: "Ayurvedic Doctors" },
                { id: 89, img: '', name: "Eye Clinics" },
                { id: 90, img: '', name: "Restaurants" },
                { id: 91, img: '', name: "Carpenters" },
                { id: 92, img: '', name: "Jewellery Showrooms" },
                { id: 93, img: '', name: "Cooks On Hire" },
                { id: 94, img: '', name: "Stationery Shops" },
                { id: 95, img: '', name: "Nephrologists" },
                { id: 96, img: '', name: "Caterers" },
                { id: 97, img: '', name: "Interior Designers" },
                { id: 98, img: '', name: "Rehabilitation Center" },
                { id: 99, img: '', name: "Grocery Stores" },
                { id: 100, img: '', name: "Banks" },
                { id: 101, img: '', name: "ATM" },
                { id: 102, img: '', name: "5 Star Hotels" },
                { id: 103, img: '', name: "Hotels" },
                { id: 104, img: '', name: "Resorts" },
                { id: 105, img: '', name: "Plastic Surgeons" },
                { id: 106, img: '', name: "Smart Watch Dealers" },
                { id: 107, img: '', name: "Drug De Addiction Centres" }
            ],
            places: [
                { id: 1, name: 'Delhi NCR' },
                { id: 2, name: 'India' }
            ]
        }
    }
}
</script>