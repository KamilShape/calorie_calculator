<template>
  <div class="addYourFood">
    <h1 class="addYourFood_header">Add your food</h1>
    <div class="addYourFood_containers">
      <div class="addYourFood_container">
        <section class="addYourFood_section">
          <h3 class="addYourFood_section_header">Group</h3>
          <select
            class="addYourFood_section_input"
            @change="changeGroup($event)"
          >
            <option
              v-for="group in groups"
              :key="group.name"
              :value="group.name"
            >
              {{ group.name }}
            </option>
          </select>
        </section>
        <section class="addYourFood_section">
          <h3 class="addYourFood_section_header">Name</h3>
          <input class="addYourFood_section_input" v-model="name" />
        </section>
        <section class="addYourFood_section">
          <h3 class="addYourFood_section_header">Amount</h3>
          <input
            class="addYourFood_section_input"
            placeholder="100"
            :disabled="true"
            v-model="amount"
          />
        </section>
        <section class="addYourFood_section">
          <h3 class="addYourFood_section_header">Unit</h3>
          <input class="addYourFood_section_input" v-model="unit" />
        </section>
      </div>
      <div class="addYourFood_container">
        <section class="addYourFood_section">
          <h3 class="addYourFood_section_header">Calorie</h3>
          <input class="addYourFood_section_input" v-model="calories" />
        </section>
        <section class="addYourFood_section">
          <h3 class="addYourFood_section_header">Carbs (g)</h3>
          <input class="addYourFood_section_input" v-model="carbs" />
        </section>
        <section class="addYourFood_section">
          <h3 class="addYourFood_section_header">Fat (g)</h3>
          <input class="addYourFood_section_input" v-model="fat" />
        </section>
        <section class="addYourFood_section">
          <h3 class="addYourFood_section_header">Protein (g)</h3>
          <input class="addYourFood_section_input" v-model="protein" />
        </section>
      </div>
    </div>
    <button class="addYourFood_button" @click="addYourFood">Add Food</button>
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
      selectedStorage: candies,
      groups: [
        { name: "Candies", id: 1 },
        { name: "Dairy", id: 2 },
        { name: "Fruits", id: 3 },
        { name: "Grains", id: 4 },
        { name: "Meat", id: 5 },
        { name: "Vegetables", id: 6 },
      ],
      selectedGroup: "Candies",
      name: "",
      amount: "",
      unit: "",
      calorie: "",
      carbs: "",
      fat: "",
      protein: "",
    };
  },
  computed: {
    meals() {
      return this.$store.state.meals;
    },
  },
  methods: {
    changeGroup(event) {
      this.selectedGroup =
        event.target.options[event.target.options.selectedIndex].text;
      if (this.selectedGroup == "Candies") {
        this.selectedStorage = candies;
      } else if (this.selectedGroup == "Dairy") {
        this.selectedStorage = dairy;
      } else if (this.selectedGroup == "Fruits") {
        this.selectedStorage = fruits;
      } else if (this.selectedGroup == "Grains") {
        this.selectedStorage = grains;
      } else if (this.selectedGroup == "Meat") {
        this.selectedStorage = meat;
      } else if (this.selectedGroup == "Vegetables") {
        this.selectedStorage = vegetables;
      }
    },
    addYourFood() {
      if (
        this.name !== "" &&
        this.calories !== "" &&
        this.carbs !== "" &&
        this.fat !== "" &&
        this.protein !== "" &&
        this.unit !== ""
      ) {
        this.selectedStorage.push({
          name: this.name,
          calories: this.calories,
          carbs: this.carbs,
          fat: this.fat,
          protein: this.protein,
          unit: this.unit,
        });
      }
    },
  },
};
</script>
<style lang="scss">
.addYourFood {
  width: 80%;
  margin: 0 auto;
  min-width: 900px;
  max-width: 1200px;
  padding: 20px 50px;

  &_header {
    padding-bottom: 10px;
  }

  &_containers {
    display: flex;
    justify-content: space-evenly;
  }
  &_container {
    width: 40%;
  }
  &_section {
    &_input {
      font-family: "Poppins", sans-serif;
      width: 80%;
      padding: 3px;
      box-sizing: content-box;
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
