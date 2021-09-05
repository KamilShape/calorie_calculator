<template>
  <div class="foodDiary">
    <div class="foodDiary_date">
      {{ dayName }}, {{ day }} {{ month }} {{ year }}
    </div>
    <AddFood />
    <MealHeader name="Meal 1" />
    <MealHeader name="Meal 2" />
    <MealHeader name="Meal 3" />
    <MealHeader name="Meal 4" />
    <MealHeader name="Meal 5" />
    <Summary />
  </div>
</template>

<script>
import MealHeader from "@/components/MealHeader.vue";
import Summary from "@/components/Summary.vue";
import AddFood from "@/components/AddFood.vue";
export default {
  name: "FoodDiary",
  data() {
    return {
      date: new Date(),
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  components: {
    MealHeader,
    Summary,
    AddFood,
  },
  computed: {
    year() {
      return this.date.getFullYear();
    },
    dayName() {
      let dayNumber = this.date.getDay();
      return this.days[dayNumber];
    },
    day() {
      return this.date.getDate();
    },
    month() {
      let monthNumber = this.date.getMonth();
      return this.months[monthNumber];
    },
  },
};
</script>
<style lang="scss">
.foodDiary {
  margin: 0;
  padding: 0;

  &_date {
    font-size: 25px;
    min-width: 900px;
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
