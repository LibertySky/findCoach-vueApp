<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
.my-reviews {
  color: red !important;
}
.glsr-button {
  background-color: #d91206 !important;
  color: #f4f4f4 !important;
  cursor: pointer !important;
  transition: all 0.3s !important;
}
.glsr-button:hover {
  background-color: #450000 !important;
  color: #fff !important;
}
</style>