<template>
  <div class="setGoal">
    <h1 class="setGoal_header">Set Your Goal</h1>
    <div class="setGoal_container">
      <section class="setGoal_section">
        <h3 class="setGoal_section_header">Calorie</h3>
        <input class="setGoal_section_input" type="number" v-model="calorie" />
      </section>
      <section class="setGoal_section">
        <h3 class="setGoal_section_header">Carbs (%)</h3>
        <input class="setGoal_section_input" type="number" v-model="carbs" />
      </section>
      <section class="setGoal_section">
        <h3 class="setGoal_section_header">Fat (%)</h3>
        <input class="setGoal_section_input" type="number" v-model="fat" />
      </section>
      <section class="setGoal_section">
        <h3 class="setGoal_section_header">Protein (%)</h3>
        <input class="setGoal_section_input" type="number" v-model="protein" />
      </section>
    </div>
    <button class="setGoal_button" @click="setGoals">Set Goal</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      calorie: "",
      carbs: "",
      fat: "",
      protein: "",
    };
  },

  methods: {
    setGoals() {
      let setCalorie = parseInt(this.calorie);
      let setCarbs = parseInt(this.carbs);
      let setFat = parseInt(this.fat);
      let setProtein = parseInt(this.protein);
      if (setCarbs + setFat + setProtein == 100) {
        this.$store.commit("setGoals", [
          setCalorie,
          setCarbs,
          setFat,
          setProtein,
        ]);
      }
    },
  },
};
</script>
<style lang="scss">
.setGoal {
  margin: 0 auto;
  min-width: 900px;
  max-width: 1200px;
  padding: 10px 50px;
  border-bottom: 3px solid black;
  &_header {
    padding-bottom: 10px;
  }
  &_container {
    display: flex;
    justify-content: space-evenly;
  }
  &_section {
    width: 25%;

    &_input {
      font-family: "Poppins", sans-serif;
      width: 80%;
      padding: 3px;
      text-align: center;
    }
  }
  &_button {
    display: block;
    font-family: "Poppins", sans-serif;
    height: 100%;
    margin: 10px auto 5px auto;

    padding: 10px;
    background-color: rgb(156, 73, 93);
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
