<template>
  <div class="addFood">
    <h1 class="addFood_header">Add food</h1>
    <div class="addFood_container">
      <section class="addFood_section">
        <h3 class="addFood_section_header">Meal</h3>
        <select class="addFood_section_input" @change="changeMeal($event)">
          <option v-for="meal in mealNames" :key="meal.name" :value="meal.name">
            {{ meal.name }}
          </option>
        </select>
      </section>
      <section class="addFood_section">
        <h3 class="addFood_section_header">Group</h3>
        <select class="addFood_section_input" @change="changeGroup($event)">
          <option v-for="group in groups" :key="group.name" :value="group.name">
            {{ group.name }}
          </option>
        </select>
      </section>
      <section class="addFood_section">
        <h3 class="addFood_section_header">Food</h3>
        <select class="addFood_section_input" @change="changeFood($event)">
          <option v-for="food in food" :key="food.name" :value="food.name">
            {{ food.name }}
          </option>
        </select>
      </section>
      <section class="addFood_section">
        <h3 class="addFood_section_header">Amount</h3>
        <input class="addFood_section_input" v-model="amount" />
      </section>
      <section class="addFood_section">
        <h3 class="addFood_section_header">Unit</h3>
        <p>{{ unit }}</p>
      </section>
      <button class="addFood_button" @click="addFood">Add</button>
    </div>
  </div>
</template>
<script>
import candies from "@/assets/candies.js";
import dairy from "@/assets/dairy.js";
import fruits from "@/assets/fruits.js";
import grains from "@/assets/grains.js";
import meat from "@/assets/meat.js";
import vegetables from "@/assets/vegetables.js";

export default {
  data() {
    return {
      candies,
      dairy,
      fruits,
      grains,
      meat,
      vegetables,
      mealNames: [
        { name: "Meal 1", id: 1 },
        { name: "Meal 2", id: 2 },
        { name: "Meal 3", id: 3 },
        { name: "Meal 4", id: 4 },
        { name: "Meal 5", id: 5 },
      ],
      groups: [
        { name: "Candies", id: 1 },
        { name: "Dairy", id: 2 },
        { name: "Fruits", id: 3 },
        { name: "Grains", id: 4 },
        { name: "Meat", id: 5 },
        { name: "Vegetables", id: 6 },
      ],
      selectedMeal: "Meal 1",
      selectedGroup: "Candies",
      food: candies,
      selectedFood: candies[0].name,
      amount: "",
    };
  },

  methods: {
    changeGroup(event) {
      this.selectedGroup =
        event.target.options[event.target.options.selectedIndex].text;
      if (this.selectedGroup == "Candies") {
        this.food = this.candies;
        this.selectedFood = this.food[this.food.length - 1].name;
      } else if (this.selectedGroup == "Dairy") {
        this.food = this.dairy;
        this.selectedFood = this.food[this.food.length - 1].name;
      } else if (this.selectedGroup == "Fruits") {
        this.food = this.fruits;
        this.selectedFood = this.food[this.food.length - 1].name;
      } else if (this.selectedGroup == "Grains") {
        this.food = this.grains;
        this.selectedFood = this.food[this.food.length - 1].name;
      } else if (this.selectedGroup == "Meat") {
        this.food = this.meat;
        this.selectedFood = this.food[this.food.length - 1].name;
      } else if (this.selectedGroup == "Vegetables") {
        this.food = this.vegetables;
        this.selectedFood = this.food[this.food.length - 1].name;
      }
    },
    changeMeal(event) {
      this.selectedMeal =
        event.target.options[event.target.options.selectedIndex].text;
    },
    changeFood(event) {
      this.selectedFood =
        event.target.options[event.target.options.selectedIndex].text;
    },
    addFood() {
      let mealIndex = this.meals.findIndex(
        (meal) => meal.name == this.selectedMeal
      );
      let foodIndex = this.food.findIndex(
        (food) => food.name == this.selectedFood
      );
      let addedFood = this.food[foodIndex];
      let quantity = Math.round(parseInt(this.amount) * 100) / 10000;
      let calories = addedFood.calories * quantity;
      let carbs = addedFood.carbs * quantity;
      let fat = addedFood.fat * quantity;
      let protein = addedFood.protein * quantity;
      if (this.amount !== "") {
        this.meals[mealIndex].products.push({
          name: addedFood.name,
          calories: Math.round(calories * 100) / 100,
          carbs: Math.round(carbs * 100) / 100,
          fat: Math.round(fat * 100) / 100,
          protein: Math.round(protein * 100) / 100,
          unit: addedFood.unit,
        }),
          this.allCalories.push(calories),
          this.allCarbs.push(carbs),
          this.allFat.push(fat),
          this.allProtein.push(protein);
      }
    },
  },
  computed: {
    unit() {
      let index = this.food.findIndex((item) => item.name == this.selectedFood);
      return this.food[index].unit;
    },
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
};
</script>
<style lang="scss">
.addFood {
  // display: flex;
  width: 80%;
  margin: 0 auto;
  min-width: 900px;
  max-width: 1200px;
  padding: 20px 50px;
  &_header {
    padding-bottom: 10px;
  }
  &_container {
    display: flex;
  }
  &_section {
    width: 20%;

    &_input {
      font-family: "Poppins", sans-serif;
      width: 80%;
      padding: 3px;
      text-align: center;
    }
  }
  &_button {
    font-family: "Poppins", sans-serif;
    height: 100%;
    padding: 10px;
    background-color: rgb(156, 73, 93);
    transform: translateY(50%);
    border-radius: 10px 0 10px 0;
    font-weight: 700;
    transition: 0.25s;
    color: white;
    border: none;
  }
  &_button:hover {
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    border-radius: 0px 10px 0px 10px;
    background-color: rgb(57, 59, 87);
  }
}
</style>
