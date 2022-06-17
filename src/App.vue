<template>
  <nav>
    <router-link to="/">Home</router-link> |
  </nav>
  <router-view/>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
html,body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: system-ui, "PingFang SC", STHeiti, sans-serif;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
