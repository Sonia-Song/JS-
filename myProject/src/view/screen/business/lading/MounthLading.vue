<template>
  <!-- 当月提货车次 -->
  <div class="goods" :style="{height:vheight+'px'}">
    <p>当月提货车次</p>
    <countTo :startVal='2000' :endVal='2027' :duration='2000' class="goods-number"></countTo>&nbsp;&nbsp;次
    <div class="mounting">同比&nbsp;&nbsp;&nbsp;&nbsp;
      <div style="display: inline-block">
        <span style="color: #58F1A3;">12.5%</span>
        <svg v-show="isCarMounting" t="1566973708248" class="icon" viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg" p-id="5816" width="12" height="12">
          <path
            d="M959.804421 511.603981l-84.009346 84.023672L576.143391 293.406446l0 665.582911L448.20351 958.989357 448.20351 293.406446 147.619594 595.628676l-84.024695-84.023672L512.213359 63.546292 959.804421 511.603981z"
            p-id="5817" fill="#58F1A3"></path>
        </svg>
        <svg v-show="!isCarMounting" t="1566980698715" class="icon" viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg" p-id="6608" width="12" height="12">
          <path
            d="M512.213359 958.989357 63.594899 510.930645l84.024695-84.023672L448.20351 729.129202 448.20351 63.546292l127.940904 0L576.144414 729.129202l299.651684-302.222229 84.009346 84.023672L512.213359 958.989357z"
            p-id="6609" fill="#58F1A3"></path>
        </svg>
      </div>
    </div>
    <div class="mounting-chart" style="background-color: deeppink"
         :style="{height:vheight-8.1*12+'px'}"></div>
  </div>
</template>

<script>
  import countTo from 'vue-count-to'
  export default {
    name: "MounthLading",
    components: {
      countTo
    },
    props: ['vheight'],
    data() {
      return {
        isCarMounting: false,
      }
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .goods {
    box-sizing: border-box;
    font-family: sans-serif;
    text-align: left;
    color: #20FDFA;

    p {
      height: 3rem;
      line-height: 3rem;
      font-size: 1.2rem;
      font-weight: 600;
      color: white;
    }

    span {
      font-weight: bold;
      font-size: 1.5rem;
    }

    .goods-number {
      font-weight: bold;
      font-family: Helvetica;
      font-size: 2.5rem;
    }

    .mounting {
      color: #fff;
      height: 2.5rem;
      line-height: 2.5rem;
      margin-top: 0.5rem;
      border-top: 1px dotted rgba(31, 45, 92, .8);

      span {
        color: #FFFF00;
        font-size: 1rem;
      }
    }
  }
</style>
