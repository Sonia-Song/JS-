<template>
  <!-- 通关时效 -->
  <div>
    <div :style="{height:vheight/3+'px'}" style="background-color: black"></div>
    <div :style="{height:vheight/3*2+'px'}" style="background-color: greenyellow"></div>
  </div>
</template>

<script>
  export default {
    name: "duration",
    props: ["vheight"],
    data() {
      return {}
    },
    created() {

    },
    methods: {}
  }
</script>

<style scoped lang="scss">

</style>
