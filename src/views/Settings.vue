<template>
  <div class="settings">
    <SetGoal />
    <AddYourFood />
  </div>
</template>
<script>
import AddYourFood from "@/components/AddYourFood.vue";
import SetGoal from "@/components/SetGoal.vue";
export default {
  data() {},
  components: {
    SetGoal,
    AddYourFood,
  },
};
</script>
<style lang="scss"></style>
