<template>
  <div class="home text-center">
    <h1>Hello World!</h1>
    <h2>My name is Ido Ben Haim and this is my portfolio showcasing my last year's work.</h2>
    <div class="nav-contrainer">
      <router-link class="nav-btn btn btn-primary" to="/projects">My Projects</router-link>
      <router-link class="nav-btn btn btn-primary" to="/about">About Me</router-link>
      <router-link class="nav-btn btn btn-primary" to="/page">About this site</router-link>
    </div>
  </div>
</template>
<style scoped>
.home {
  background-color: rgb(255, 255, 255);
  position: absolute;
  position: fixed;
  padding: 50px 100px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.637);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h1 {
  font-size: 60px;
  font-weight: bolder;
  font-family: Arial;
}
h2 {
  font-size: 20px;
  font-weight: normal;
  font-family: Arial;
}
.nav-btn {
  margin: 0px 10px;
}
@media (max-width: 1184px) {
  .nav-btn {
    margin-top: 10px;
  }
  .nav-contrainer {
    margin-top: -10px;
  }
}
</style>
