<template>
  <SectionTopBanner />
  <div class=" ">
    <div class="">
      <div class="container mb-3 py-5">
        <label for="categorySelect" class="form-label text-white fs-4">Filter by Customers</label>
        <select v-model="selectedCategory" class="form-select" id="categorySelect">
          <option value="">All Customers</option>
          <option v-for="category in customerList" :key="category" :value="category.name">{{ category.name }}</option>
        </select>
      </div>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 py-5">
        <div class="col" v-for="(sentence, index) in filteredSentences" :key="index">
          <router-link :to="'/service/' + generateSlug(sentence)" class="card text-decoration-none">
            <div class="card-body py-0" :style="{ backgroundColor: randomColors[index] }">
              <div class="border-bottom border-dark py-1 text-center">
                <i :class="randomArrowIcons[index]" class="fs-4"></i>
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
  name: "CategorySentence",
  components: {
    SectionTopBanner
  },
  data() {
    return {
      servicesList: [
        { id: 1, name: "Solar Power Plant", image: '/img/template1.png', description: "Track and manage leads throughout the sales pipeline efficiently." },
      ],
      customerList: [
        { id: 1, name: "Residential", color: "#c6def1" },
        { id: 2, name: "Commercial", color: "#f2c6de" },
      ],
      placesList: [
        { id: 1, name: 'Delhi NCR' },
        { id: 2, name: 'India' }
      ],
      title: this.$route.params.id,
      sentences: [],
      randomColors: [],
      selectedCategory: ''
    };
  },
  mounted() {
    this.generateSentences();
    this.assignRandomColors();
    this.assignRandomIcons();
  },
  methods: {
    generateSentences() {
      this.servicesList.forEach(service => {
        this.customerList.forEach(customer => {
          this.placesList.forEach(place => {
            const sentence = `We are offering ${service.name} to ${customer.name} from ${this.title} in ${place.name}.`;
            this.sentences.push(sentence);
          });
        });
      });
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

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>