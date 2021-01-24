<template>
  <div id="app" class="container-fluid">
    <router-view/>
  </div>
</template>

<style lang="scss">
$background-color: rgba(212, 255, 214, 0.897);
// test
#app{
  width:100%;
  width: 100vw;
  height: 100%;
  height: 100vh;
  color:black;
  background-color: $background-color;
  overflow-x: hidden;
}
html {
  scroll-behavior: smooth
}
.page-body{
    margin: auto;
  width: 80%;
  padding: 10px;
  background-color: white;
}
</style>
