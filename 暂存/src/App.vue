<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  height: 100%;
  color: #2c3e50;
}


html, body {
  height: 100%;
}

body {
  margin: 0;
}

/* breadcrumb */
.el-breadcrumb__inner.is-link, .el-breadcrumb__inner a {
  font-weight: normal;
  color: #66A5E9;
}

.toolbar {
  background-color: #e8ebed;
  text-align: left;
  height: 24px;
}
</style>
