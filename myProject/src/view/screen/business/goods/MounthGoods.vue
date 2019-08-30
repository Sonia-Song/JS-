<template>
  <!-- 当月进口货物 -->
  <div class="goods" style="background-color: black;" :style="{height:vheight+'px'}">
    <p>当月进口货物</p>
    <countTo :startVal='500' :endVal='10287' :duration='5000' class="goods-number"></countTo>&nbsp;&nbsp;票
    <div class="mounting">同比&nbsp;&nbsp;&nbsp;&nbsp;
      <div v-show="isGoodsMounting" style="display: inline-block">
        <span>12.5%</span>
        <svg t="1566973708248" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="5816" width="12" height="12">
          <path
            d="M959.804421 511.603981l-84.009346 84.023672L576.143391 293.406446l0 665.582911L448.20351 958.989357 448.20351 293.406446 147.619594 595.628676l-84.024695-84.023672L512.213359 63.546292 959.804421 511.603981z"
            p-id="5817" fill="#FFFF00"></path>
        </svg>
        <svg v-show="!isGoodsMounting" t="1566980698715" class="icon" viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg" p-id="6608" width="12" height="12">
          <path
            d="M512.213359 958.989357 63.594899 510.930645l84.024695-84.023672L448.20351 729.129202 448.20351 63.546292l127.940904 0L576.144414 729.129202l299.651684-302.222229 84.009346 84.023672L512.213359 958.989357z"
            p-id="6609" fill="#FFFF00"></path>
        </svg>
      </div>
    </div>
    <div id="radar" class="mounting-chart" style="background-color: yellow" :style="{height:vheight-8.1*12+'px'}">
      <canvas id="myCanvas" style="background-color: red"></canvas>
      <!--<img src="../../../../../static/img/ciele_goods.png" alt="">-->
    </div>
  </div>
</template>

<script>
  import countTo from 'vue-count-to'

  export default {
    name: "MounthGoods",
    components: {
      countTo
    },
    props: ['vheight'],
    data() {
      return {
        isGoodsMounting: true,// 同比增长样式
      }
    },
    mounted(){
      this.myCanvas();//初始化背景
    },
    watch:{
      vheight(){
        this.myCanvas();
      }
    },
    methods: {
      myCanvas(){
        let c=document.getElementById('myCanvas');
        c.width=document.getElementById('radar').offsetWidth;
        c.height=document.getElementById('radar').offsetHeight;
        let minx;
        c.width>c.height? minx=c.height:minx=c.width;
        let ctx=c.getContext('2d');
        let img=new Image();
        img.src="../../../../../static/img/ciele_goods.png";
        img.onload=function(){
          let x=c.width/2-minx/2;
          ctx.drawImage(img,x,0,minx,minx);
        }
      }
    }
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
