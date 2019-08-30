<template>
  <div class="total">
    <div class="t-title">
      <slot name="title"></slot>
    </div>
    <div class="tickets">
      <countTo ref="begin" :startVal='start' :endVal='num' :duration='duration' class="goods-number" :autoplay=false></countTo>&nbsp;&nbsp;票
    </div>
  </div>
</template>

<script>
  import countTo from 'vue-count-to'

  export default {
    name: "Total",
    components: {
      countTo
    },
    props: ['num'],
    data() {
      return {
        isGoodsMounting:true,// 同比增长样式
        isCarMounting:false,
        duration:5000,
        start:0,
      }
    },
    watch:{
      num(newVal,oldVal){
          this.start=parseInt(this.num-10);
          this.duration=Math.abs(newVal-this.num)*1000;
          this.$refs.begin.start();
      }
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .total{
    color:#02D0F2;
    .t-title{
      height: 3rem;
      line-height: 3.5rem;
    }
    .goods-number {
      color:#fff000;
      font-family: Helvetica;
      font-size: 2rem;
    }
  }
</style>
