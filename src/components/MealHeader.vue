<template>
  <div class="mealHeader">
    <h3 class="mealHeader_mainHeader">{{ name }}</h3>
    <section class="mealHeader_headers">
      <p class="mealHeader_headers_header mealHeader_headers_header--food">
        Food
      </p>
      <p class="mealHeader_headers_header">Calories</p>
      <p class="mealHeader_headers_header">Carbs</p>
      <p class="mealHeader_headers_header">Fat</p>
      <p class="mealHeader_headers_header">Protein</p>
    </section>
    <Meal
      v-for="item in products"
      :key="item.name"
      :name="item.name"
      :calories="item.calories"
      :carbs="item.carbs"
      :fat="item.fat"
      :protein="item.protein"
      :mealHeader="name"
    />
    <!-- <button @click='showName'>asdasd</button> -->
  </div>
</template>

<script>
import Meal from "@/components/Meal.vue";
export default {
  name: "MealHeader",
  products: [],
  props: {
    name: String,
  },
  components: {
    Meal,
  },
  computed: {
    products() {
      let index = this.$store.state.meals.findIndex(
        (meal) => meal.name == this.name
      );
      let products = this.$store.state.meals[index].products;
      return products;
    },
  },
  methods: {
    showName() {
      console.log(this.name, this.products[0]);
    },
  },
};
</script>

<style lang="scss">
.mealHeader {
  padding: 10px 50px 0px 50px;
  box-sizing: content-box;
  margin-top: 20px;
  min-width: 900px;
  max-width: 1200px;
  margin: 0 auto;

  &_mainHeader {
    background-color: rgb(226, 137, 77);
    margin: 0;
    padding: 5px 5px 5px 20px;
    text-align: left;
  }
  &_headers {
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    &_header {
      width: 12.5%;
      background-color: rgb(247, 235, 171);
      padding: 5px;
      font-weight: 600;

      &--food {
        width: 50%;
      }
    }
  }
}
</style>
