import { createStore } from "vuex";

export default createStore({
  state: {
    meals: [
      {
        name: "Meal 1",
        products: [],
      },
      {
        name: "Meal 2",
        products: [],
      },
      {
        name: "Meal 3",
        products: [],
      },
      {
        name: "Meal 4",
        products: [],
      },
      {
        name: "Meal 5",
        products: [],
      },
    ],
    allCalories: [0.0, 0.0],
    allCarbs: [0.0, 0.0],
    allFat: [0.0, 0.0],
    allProtein: [0.0, 0.0],
    caloriesGoal: 2500,
    carbsPercentage: 50,
    fatPercentage: 20,
    proteinPercentage: 30,
  },
  getters: {
    caloriesSummary: (state) => {
      return state.allCalories.reduce(function (a, b) {
        return a + b;
      });
    },
    carbsSummary: (state) => {
      return state.allCarbs.reduce(function (a, b) {
        return a + b;
      });
    },
    fatSummary: (state) => {
      return state.allFat.reduce(function (a, b) {
        return a + b;
      });
    },
    proteinSummary: (state) => {
      return state.allProtein.reduce(function (a, b) {
        return a + b;
      });
    },
  },
  mutations: {
    setGoals(state, [value1, value2, value3, value4]) {
      state.caloriesGoal = value1;
      state.carbsPercentage = value2;
      state.fatPercentage = value3;
      state.proteinPercentage = value4;
    },
  },
  actions: {},
});
