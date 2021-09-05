<template>
  <div class="nav">
    <router-link class="nav_el" to="/">Food Diary</router-link> |
    <router-link class="nav_el" to="/settings">Settings</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
  text-align: center;
}
.nav {
  padding: 10px;
  min-width: 900px;
  max-width: 1200px;
  margin: 0 auto;

  &_el {
    text-decoration: none;
    color: black;
  }
}
</style>
