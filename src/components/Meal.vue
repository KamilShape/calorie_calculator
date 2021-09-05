<template>
  <div class="meal">
    <section class="meal_headers">
      <p class="meal_headers_header meal_headers_header--food">
        <button @click="removeFood" class="meal_headers_header_button">
          <i class="far fa-times-circle"></i></button
        >{{ name }}
      </p>
      <p class="meal_headers_header">{{ calories }}</p>
      <p class="meal_headers_header">{{ carbs }} g</p>
      <p class="meal_headers_header">{{ fat }} g</p>
      <p class="meal_headers_header">{{ protein }} g</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Meal",
  props: {
    name: String,
    calories: Number,
    carbs: Number,
    fat: Number,
    protein: Number,
    mealHeader: String,
  },
  computed: {
    meals() {
      return this.$store.state.meals;
    },
    allCalories() {
      return this.$store.state.allCalories;
    },
    allCarbs() {
      return this.$store.state.allCarbs;
    },
    allFat() {
      return this.$store.state.allFat;
    },
    allProtein() {
      return this.$store.state.allProtein;
    },
  },
  methods: {
    removeFood() {
      let mealIndex = this.meals.findIndex(
        (meal) => meal.name == this.mealHeader
      );
      let products = this.meals[mealIndex].products;
      let foodIndex = products.findIndex((food) => food.name == this.name);
      let calorieIndex = this.allCalories.findIndex(
        (calories) => calories == this.calories
      );
      this.allCalories.splice(calorieIndex, 1);
      let carbsIndex = this.allCarbs.findIndex((carbs) => carbs == this.carbs);
      this.allCarbs.splice(carbsIndex, 1);
      let fatIndex = this.allFat.findIndex((fat) => fat == this.fat);
      this.allFat.splice(fatIndex, 1);
      let proteinIndex = this.allProtein.findIndex(
        (protein) => protein == this.protein
      );
      this.allProtein.splice(proteinIndex, 1);
      products.splice(foodIndex, 1);
    },
  },
};
</script>

<style lang="scss">
.meal {
  min-width: 900px;
  max-width: 1200px;
  &_headers {
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    &_header {
      width: 12.5%;
      background-color: rgb(238, 187, 121);
      padding: 5px;
      font-weight: 600;

      &_button {
        font-size: 20px;
        width: 5%;
        text-align: center;
        background-color: transparent;
        border: none;
        // position: absolute;
        margin-right: 20px;
        left: 20%;
      }
      &_button:hover {
        cursor: pointer;
      }

      &--food {
        width: 50%;
      }
    }
  }
}
</style>
