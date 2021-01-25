<template>
  <div id="app" class="container-fluid">
    <router-link class="h2 mb-2" to="/">
      <b-icon icon="house-door-fill" />
    </router-link>
    <router-view />
  </div>
</template>

<style lang="scss">
$body-bg: rgba(212, 255, 214, 0.897);
$body-color: #111;
$primary: rgb(12, 56, 251) !default;

@import "../node_modules/bootstrap/scss/bootstrap";
@import "../node_modules/bootstrap-vue/src/index.scss";

#app {
  width: 100%;
  width: 100vw;
  height: 100%;
  height: 100vh;
  color: black;
  overflow-x: hidden;
  background-color: $body-bg;
}
.page-body {
  margin: auto;
  width: 80%;
  padding: 10px;
  background-color: white;
}
</style>
