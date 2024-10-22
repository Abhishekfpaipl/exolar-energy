<template>
  <SectionTopBanner />
  <div class="">
    <div class="">
      <div class="container mb-3 py-5">
        <label for="categorySelect" class="form-label text-white fs-4">Filter by Category</label>
        <select v-model="selectedCategory" class="form-select" id="categorySelect">
          <option value="">All Categories</option>
          <option v-for="category in categoriesList" :key="category" :value="category.name">{{ category.name }}</option>
        </select>
      </div>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 py-5">
        <div class="col" v-for="(sentence, index) in filteredSentences" :key="index">
          <router-link :to="'/service/' + generateSlug(sentence)" class="card text-decoration-none">
            <div class="card-body py-0" :style="{ backgroundColor: randomColors[index] }">
              <div class="border-bottom border-dark py-1 text-center">
                <i :class="randomArrowIcons[index]" class="fs-4 text-center"></i>
              </div>
              <h6 class="card-title text-capitalize pt-3" style="min-height: 6rem;">{{ sentence }}</h6>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';
export default {
  name: "ServiceSentence",
  components: {
    SectionTopBanner
  },
  data() {
    return {
      customerList: [
        { id: 1, name: "Residential", color: "#c6def1" },
        { id: 2, name: "Commercial", color: "#f2c6de" },
      ],
      categoriesList: [
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
      placesList: [
        { id: 1, name: 'Delhi NCR' },
        { id: 2, name: 'India' }
      ],
      title: this.$route.params.id,
      sentences: [],
      selectedCategory: '',
      randomColors: [],
    };
  },
  mounted() {
    this.generateSentences();
    this.assignRandomColors();
    this.assignRandomIcons();
  },
  methods: {
    generateSentences() {
      this.placesList.forEach(place => {
        this.customerList.forEach(customer => {
          this.categoriesList.forEach(category => {
            const sentence = `We are offering ${this.title} to ${customer.name} from ${category.name} in ${place.name}.`;
            this.sentences.push(sentence);
          });
        });
      });
      this.assignRandomColors();
    },
    assignRandomColors() {
      this.randomColors = this.sentences.map(() => this.getRandomLightColor());
    },
    assignRandomIcons() {
      this.randomArrowIcons = this.sentences.map(() => this.getRandomArrowIcon());
    },
    getRandomLightColor() {
      const letters = 'BCDEF'; // Letters corresponding to light colors
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
      }
      return color;
    },
    getRandomArrowIcon() {
      const arrowIcons = [
        'bi-arrow-up', 'bi-arrow-right', 'bi-arrow-down', 'bi-arrow-left',
        'bi-arrow-up-right', 'bi-arrow-down-right', 'bi-arrow-down-left', 'bi-arrow-up-left'
      ];
      return arrowIcons[Math.floor(Math.random() * arrowIcons.length)];
    },
    generateSlug(sentence) {
      return sentence.toLowerCase().replace(/\s+/g, '-');
    }
  },
  computed: {
    filteredSentences() {
      if (!this.selectedCategory) {
        return this.sentences;
      }
      return this.sentences.filter(sentence => sentence.includes(this.selectedCategory));
    }
  },
  watch: {
    sentences() {
      this.assignRandomColors();
      this.assignRandomIcons();
    },
    selectedCategory() {
      this.assignRandomColors();
      this.assignRandomIcons();
    }
  }
};
</script>
