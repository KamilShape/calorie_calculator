<template>
  <div class="summary_container">
    <div class="summary">
      <section class="summary_headers">
        <h4 class="summary_headers_header summary_headers_header--bold"></h4>
        <p class="summary_headers_header summary_headers_header--bold">
          Calories
        </p>
        <p class="summary_headers_header summary_headers_header--bold">Carbs</p>
        <p class="summary_headers_header summary_headers_header--bold">Fat</p>
        <p class="summary_headers_header summary_headers_header--bold">
          Protein
        </p>
      </section>
      <section class="summary_headers">
        <h4 class="summary_headers_header summary_headers_header--bold">
          Total
        </h4>
        <p class="summary_headers_header">
          {{ Math.round(caloriesSummary * 100) / 100 }}
        </p>
        <p class="summary_headers_header">
          {{ Math.round(carbsSummary * 100) / 100 }} g
        </p>
        <p class="summary_headers_header">
          {{ Math.round(fatSummary * 100) / 100 }} g
        </p>
        <p class="summary_headers_header">
          {{ Math.round(proteinSummary * 100) / 100 }} g
        </p>
      </section>
      <section class="summary_headers">
        <h4 class="summary_headers_header summary_headers_header--bold">
          Your Goal
        </h4>
        <p class="summary_headers_header">
          {{ Math.round(caloriesGoal * 100) / 100 }}
        </p>
        <p class="summary_headers_header">
          {{ Math.round(carbsGoal * 100) / 100 }} g
        </p>
        <p class="summary_headers_header">
          {{ Math.round(fatGoal * 100) / 100 }} g
        </p>
        <p class="summary_headers_header">
          {{ Math.round(proteinGoal * 100) / 100 }} g
        </p>
      </section>
      <section class="summary_headers">
        <h4 class="summary_headers_header summary_headers_header--bold">
          Remaining
        </h4>
        <p class="summary_headers_header">
          {{ Math.round(calorieReamain * 100) / 100 }}
        </p>
        <p class="summary_headers_header">
          {{ Math.round(carbsReamain * 100) / 100 }} g
        </p>
        <p class="summary_headers_header">
          {{ Math.round(fatReamain * 100) / 100 }} g
        </p>
        <p class="summary_headers_header">
          {{ Math.round(proteinReamain * 100) / 100 }} g
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Meal",
  props: {
    name: String,
  },
  computed: {
    caloriesSummary() {
      return this.$store.getters.caloriesSummary;
    },
    carbsSummary() {
      return this.$store.getters.carbsSummary;
    },
    fatSummary() {
      return this.$store.getters.fatSummary;
    },
    proteinSummary() {
      return this.$store.getters.proteinSummary;
    },
    caloriesGoal() {
      return this.$store.state.caloriesGoal;
    },
    carbsGoal() {
      return (this.$store.state.carbsPercentage * this.caloriesGoal) / 100 / 4;
    },
    fatGoal() {
      return (this.$store.state.fatPercentage * this.caloriesGoal) / 100 / 9;
    },
    proteinGoal() {
      return (
        (this.$store.state.proteinPercentage * this.caloriesGoal) / 100 / 4
      );
    },
    calorieReamain() {
      return this.caloriesGoal - this.caloriesSummary;
    },
    carbsReamain() {
      return this.carbsGoal - this.carbsSummary;
    },
    fatReamain() {
      return this.fatGoal - this.fatSummary;
    },
    proteinReamain() {
      return this.proteinGoal - this.proteinSummary;
    },
  },
};
</script>

<style lang="scss">
.summary {
  margin: 30px auto;
  min-width: 450px;
  max-width: 600px;

  &_container {
    min-width: 900px;
    max-width: 1200px;
    margin: 30px auto;
  }

  &_headers {
    display: flex;
    justify-content: space-evenly;
    box-sizing: border-box;
    border-bottom: 1px solid black;

    &_header {
      width: 20%;
      text-align: center;

      &--bold {
        font-weight: 700;

        padding: 0;
      }
    }
  }
}
</style>
