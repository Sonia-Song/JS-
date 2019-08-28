<template>
  <div class="home">
    <!-- 标题 -->
    <div class="header" id="header">
      <Header :xwidth="xwidth" :xheight="xheight"></Header>
    </div>
    <!-- 图表区 -->
    <div class="container" id="container">
      <el-row>
        <!-- 左 -->
        <el-col :span="6">
          <div style="background-color: blue">
            <div id="module-left-top" :style="{height:contentHeight/7*3.8+'px',marginBottom:'0.8rem'}" style="background-color: chartreuse"
                 class="stroke">
              <i class="inner-stroke-1"></i>
              <i class="inner-stroke-2"></i>
              <i class="inner-stroke-3"></i>
              <i class="inner-stroke-4"></i>
              <p class="module-title-left">
                <span class="title-left">当月业务量</span>
              </p>
              <el-row>
                <el-col :span="11" :offset="1">
                  <div class="goods" style="background-color: black;" :style="{height:(contentHeight/7*3.8)/3*2-1.6*12+'px'}">
                    <p>当月进口货物</p>
                    <countTo :startVal='500' :endVal='10287' :duration='5000' class="goods-number"></countTo>&nbsp;&nbsp;票
                    <div class="mounting">同比&nbsp;&nbsp;&nbsp;&nbsp;
                      <div v-show="isGoodsMounting" style="display: inline-block">
                        <span>12.5%</span>
                        <svg t="1566973708248" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5816" width="12" height="12"><path d="M959.804421 511.603981l-84.009346 84.023672L576.143391 293.406446l0 665.582911L448.20351 958.989357 448.20351 293.406446 147.619594 595.628676l-84.024695-84.023672L512.213359 63.546292 959.804421 511.603981z" p-id="5817" fill="#FFFF00"></path></svg>
                        <svg v-show="!isGoodsMounting" t="1566980698715" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6608" width="12" height="12"><path d="M512.213359 958.989357 63.594899 510.930645l84.024695-84.023672L448.20351 729.129202 448.20351 63.546292l127.940904 0L576.144414 729.129202l299.651684-302.222229 84.009346 84.023672L512.213359 958.989357z" p-id="6609" fill="#FFFF00"></path></svg>
                      </div>
                    </div>
                    <div class="mounting-chart" style="background-color: deeppink" :style="{height:(contentHeight/7*3.8)/3*2-9.7*12+'px'}"></div>
                  </div>
                </el-col>
                <el-col :span="11">
                  <div class="goods" :style="{height:(contentHeight/7*3.8)/3*2-1.6*12+'px'}">
                    <p>当月提货车次</p>
                    <countTo :startVal='2000' :endVal='2027' :duration='2000' class="goods-number"></countTo>&nbsp;&nbsp;次
                    <div class="mounting">同比&nbsp;&nbsp;&nbsp;&nbsp;
                      <div style="display: inline-block">
                        <span style="color: #58F1A3;">12.5%</span>
                        <svg  v-show="isCarMounting" t="1566973708248" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5816" width="12" height="12"><path d="M959.804421 511.603981l-84.009346 84.023672L576.143391 293.406446l0 665.582911L448.20351 958.989357 448.20351 293.406446 147.619594 595.628676l-84.024695-84.023672L512.213359 63.546292 959.804421 511.603981z" p-id="5817" fill="#58F1A3"></path></svg>
                        <svg v-show="!isCarMounting" t="1566980698715" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6608" width="12" height="12"><path d="M512.213359 958.989357 63.594899 510.930645l84.024695-84.023672L448.20351 729.129202 448.20351 63.546292l127.940904 0L576.144414 729.129202l299.651684-302.222229 84.009346 84.023672L512.213359 958.989357z" p-id="6609" fill="#58F1A3"></path></svg>
                      </div>
                    </div>
                    <div class="mounting-chart" style="background-color: deeppink" :style="{height:(contentHeight/7*3.8)/3*2-9.7*12+'px'}"></div>
                  </div>
                </el-col>
                <el-col :offset="1"></el-col>
              </el-row>
              <el-row>
                <el-col :span="11" :offset="1">
                  <div class="tickets-number" style="background-color: greenyellow;" :style="{height:(contentHeight/7*3.8)/3-12+'px'}"><i class="blue-square"></i>当月退运票数
                    <span class="blue">
                      212票&nbsp;&nbsp;36%
                    </span>
                  </div>
                </el-col>
                <el-col :span="11">
                  <div class="tickets-number" style="background-color: greenyellow;" :style="{height:(contentHeight/7*3.8)/3-12+'px'}"><i class="green-square"></i>当月查验票数
                    <span class="green">
                      789票&nbsp;&nbsp;99%
                    </span>
                  </div>
                </el-col>
                <el-col :offset="1"></el-col>
              </el-row>
            </div>
            <!-- 左下 -->
            <div :style="{height:contentHeight/7*3.2-2.8*12+'px'}" style="background-color: coral"
                 class="col-container stroke">
              <i class="inner-stroke-1"></i>
              <i class="inner-stroke-2"></i>
              <i class="inner-stroke-3"></i>
              <i class="inner-stroke-4"></i>
              <p class="module-title-left">
                <span class="title-left">模块1</span>
              </p>
            </div>
          </div>
        </el-col>
        <!-- 中 -->
        <el-col :span="12">
          <div style="background-color: purple;" :style="{height:contentHeight-2*12+'px'}" class="center-content ">
            <p class="module-title-center">
              <span class="title-center">模块1</span>
            </p>
            <div class="center-box">
              <div :style="{height:contentHeight*3/4+'px'}" style="background-color: white" class="center-stroke">
                <i class="inner-stroke-1"></i>
                <i class="inner-stroke-2"></i>
                <i class="inner-stroke-3"></i>
                <i class="inner-stroke-4"></i>
              </div>
              <div style="background-color: coral" class="col-container">
                <el-row>
                  <el-col :span="8" style="background-color: darkred">
                    <div :style="{height:contentHeight-(contentHeight*3/4)-8.5*12+'px',marginRight:'1.2rem'}" class="polygon">
                      <svg style="position: absolute;top:-0.5px;left: -1px" width="15" height="15" viewbox="0 0 100 200"
                           version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="15 0,10 0,0 10,0 15" style="fill:transparent;stroke:#00FFFF;stroke-width:2"/>
                      </svg>
                      <svg style="position: absolute;bottom:-0.5px;left: -1px" width="15" height="15"
                           viewbox="0 0 100 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="0 0,0 5,10 15,15 15" style="fill:transparent;stroke:#00FFFF;stroke-width:2"/>
                      </svg>
                      <svg style="position: absolute;top:-0.5px;right: -1px" width="15" height="15" viewbox="0 0 100 200"
                           version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="0 0,5 0,15 10,15 15" style="fill:transparent;stroke:#00FFFF;stroke-width:2"/>
                      </svg>
                      <svg style="position: absolute;bottom:-0.5px;right: -1px" width="15" height="15"
                           viewbox="0 0 100 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="15 0,15 5,5 15,0 15" style="fill:transparent;stroke:#00FFFF;stroke-width:2"/>
                      </svg>
                    </div>
                  </el-col>
                  <el-col :span="8" style="background-color: chocolate">
                    <div :style="{height:contentHeight-(contentHeight*3/4)-8.5*12+'px',marginRight:'0.6rem'}" class="polygon">
                      <svg style="position: absolute;top:-0.5px;left: -1px" width="15" height="15" viewbox="0 0 100 200"
                           version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="15 0,10 0,0 10,0 15" style="fill:transparent;stroke:#00FFFF;stroke-width:2"/>
                      </svg>
                      <svg style="position: absolute;bottom:-0.5px;left: -1px" width="15" height="15"
                           viewbox="0 0 100 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="0 0,0 5,10 15,15 15" style="fill:transparent;stroke:#00FFFF;stroke-width:2"/>
                      </svg>
                      <svg style="position: absolute;top:-0.5px;right: -1px" width="15" height="15" viewbox="0 0 100 200"
                           version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="0 0,5 0,15 10,15 15" style="fill:transparent;stroke:#00FFFF;stroke-width:2"/>
                      </svg>
                      <svg style="position: absolute;bottom:-0.5px;right: -1px" width="15" height="15"
                           viewbox="0 0 100 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="15 0,15 5,5 15,0 15" style="fill:transparent;stroke:#00FFFF;stroke-width:2"/>
                      </svg>
                    </div>
                  </el-col>
                  <el-col :span="8" style="background-color: darkred">
                    <div :style="{height:contentHeight-(contentHeight*3/4)-8.5*12+'px',marginLeft:'0.6rem'}" class="polygon">
                      <svg style="position: absolute;top:-0.5px;left: -1px" width="15" height="15" viewbox="0 0 100 200"
                           version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="15 0,10 0,0 10,0 15" style="fill:transparent;stroke:#00FFFF;stroke-width:2"/>
                      </svg>
                      <svg style="position: absolute;bottom:-0.5px;left: -1px" width="15" height="15"
                           viewbox="0 0 100 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="0 0,0 5,10 15,15 15" style="fill:transparent;stroke:#00FFFF;stroke-width:2"/>
                      </svg>
                      <svg style="position: absolute;top:-0.5px;right: -1px" width="15" height="15" viewbox="0 0 100 200"
                           version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="0 0,5 0,15 10,15 15" style="fill:transparent;stroke:#00FFFF;stroke-width:2"/>
                      </svg>
                      <svg style="position: absolute;bottom:-0.5px;right: -1px" width="15" height="15"
                           viewbox="0 0 100 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="15 0,15 5,5 15,0 15" style="fill:transparent;stroke:#00FFFF;stroke-width:2"/>
                      </svg>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
        <!-- 右 -->
        <el-col :span="6">
          <div style="background-color: yellow">
            <div :style="{height:contentHeight/3+3*12-0.6*12+'px',marginBottom:'0.9rem'}"
                 style="background-color: chartreuse" class="stroke">
              <i class="inner-stroke-1"></i>
              <i class="inner-stroke-2"></i>
              <i class="inner-stroke-3"></i>
              <i class="inner-stroke-4"></i>
              <p class="module-title-right">
                <span class="title-right">模块1</span>
              </p>
            </div>
            <div :style="{height:contentHeight/3-3*12-0.6*12+'px',marginBottom:'0.9rem'}"
                 style="background-color: coral"
                 class="col-container stroke">
              <i class="inner-stroke-1"></i>
              <i content="inner-stroke-2"></i>
              <i class="inner-stroke-3"></i>
              <i class="inner-stroke-4"></i>
              <p class="module-title-right">
                <span class="title-right">模块1</span>
              </p>

            </div>
            <div :style="{height:contentHeight/3-4*12-0.6*12+'px'}" style="background-color: deeppink"
                 class="col-container stroke">
              <i class="inner-stroke-1"></i>
              <i class="inner-stroke-2"></i>
              <i class="inner-stroke-3"></i>
              <i class="inner-stroke-4"></i>
              <p class="module-title-right">
                <span class="title-right">模块1</span>
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/common/Header.vue'
  import LeftTop from '@/components/left/LeftTop.vue'

  import countTo from 'vue-count-to'
  export default {
    name: "home",
    components: {
      Header,
      LeftTop,
      countTo
    },
    data() {
      return {
        screenWidth: document.documentElement.clientWidth, //屏幕宽度
        screenHeight: document.documentElement.clientHeight, //屏幕高度
        contentHeight: 0,
        xwidth: 0,
        xheight: 0,
        lefttopwid:0,
        isGoodsMounting:true,// 同比增长样式
        isCarMounting:false,
      }
    },
    methods: {
      // 初始化
      init() {
        // 高度初始化
        this.contentHeight = document.documentElement.clientHeight - document.getElementById('header').offsetHeight;
        this.xwidth = document.getElementById('header').offsetWidth;
        this.xheight = document.getElementById('header').offsetHeight;
        this.lefttopwid=document.getElementById('module-left-top').offsetWidth;
      },
    },
    computed: {},
    mounted() {
      // 获取高度
      let that = this;
      this.init();
      window.onresize = function () {
        that.screenHeight = document.documentElement.clientHeight;
        that.screenWidth = document.documentElement.clientWidth;
        that.xwidth = document.getElementById('header').offsetWidth;
        that.xheight = document.getElementById('header').offsetHeight;
      }
    },
    watch: {
      screenHeight(newVal, oldVal) {
        let a = document.getElementById('header').offsetHeight;
        this.contentHeight = newVal - a;
      }
    },
  }
</script>

<style scoped lang="scss">
  .home {
    background-color: #21197F;
  }

  .header {
    height: 5rem;
  }

  .container {
    background-color: green;
    padding: 1rem 0.5rem;

    .module-title-left {
      background: linear-gradient(left, rgba(16, 35, 137, .9), rgba(19, 56, 112, .2));
      height: 2.5rem;
      line-height: 2.5rem;
      text-align: left;
      padding:0 1rem;
      .title-left{
        font-size: 1.5rem;
        font-weight: bold;
        background-image:radial-gradient(ellipse ,#7BE6F9,rgba(0,233,254,1));
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }
    }
    .module-title-right {
      background: linear-gradient(left, rgba(19, 56, 112, .2), rgba(16, 35, 137, .9));
      height: 2.5rem;
      line-height: 2.5rem;
      text-align: right;
      padding:0 1rem;
      .title-right{
        font-size: 1.5rem;
        font-weight: bold;
        background-image:radial-gradient(ellipse ,#7BE6F9,rgba(0,233,254,1));
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }
    }
    .module-title-center {
      background: linear-gradient(left, rgba(19, 56, 112, .2), rgba(16, 35, 137, .9));
      height: 2.5rem;
      line-height: 2.5rem;
      .title-center{
        font-size: 1.5rem;
        font-weight: bold;
        background-image:radial-gradient(ellipse ,#7BE6F9,rgba(0,233,254,1));
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }
    }

    .stroke {
      border: 1px solid #4574D6;
      box-shadow: 0 0 1rem #4275f3 inset;
      box-sizing: border-box;
      position: relative;

      i.inner-stroke-1 {
        position: absolute;
        top: -0.13rem;
        left: -0.13rem;
        width: 2rem;
        height: 2rem;
        background-color: transparent;
        border-top: 0.13rem solid #00FFFF;
        border-left: 0.13rem solid #00FFFF;
      }

      .inner-stroke-2 {
        position: absolute;
        top: -0.13rem;
        right: -0.13rem;
        width: 2rem;
        height: 2rem;
        background-color: transparent;
        border-top: 0.13rem solid #00FFFF;
        border-right: 0.13rem solid #00FFFF;
      }

      .inner-stroke-3 {
        position: absolute;
        bottom: -0.13rem;
        left: -0.13rem;
        width: 2rem;
        height: 2rem;
        background-color: transparent;
        border-bottom: 0.13rem solid #00FFFF;
        border-left: 0.13rem solid #00FFFF;
      }

      .inner-stroke-4 {
        position: absolute;
        bottom: -0.13rem;
        right: -0.13rem;
        width: 2rem;
        height: 2rem;
        background-color: transparent;
        border-bottom: 0.13rem solid #00FFFF;
        border-right: 0.13rem solid #00FFFF;
      }
      .goods{
        box-sizing: border-box;
        font-family: sans-serif;
        text-align: left;
        color:#20FDFA;
        p{
          height: 3rem;
          line-height: 3rem;
          font-size: 1.2rem;
          font-weight: 600;
          color: white;
        }
        span{
          font-weight: bold;
          font-size: 1.5rem;
        }
        .goods-number{
          font-weight: bold;
          font-family: Helvetica;
          font-size: 2.5rem;
        }
        .mounting{
          color:#fff;
          height: 2.5rem;
          line-height: 2.5rem;
          margin-top:0.5rem;
          border-top: 1px dotted rgba(31,45,92,.8);
          span{
            color: #FFFF00;
            font-size: 1rem;
          }
        }
      }
      .tickets-number{
        font-family: Helvetica;
        text-align: left;
        color:white;
        span.blue{
          color:#2CFEFD;
        }
        i{
          display: inline-block;
          width: 0.9rem;
          height: 0.9rem;
          margin-right: 0.3rem;
        }
        i.blue-square{
          background-color: #2CFEFD;
        }
        span.green{
          color: #2AFD84;

        }
        i.green-square{
          background-color: #2AFD84;
        }
      }
    }

    .polygon {
      position: relative;
      border: 1px solid #4574D6;
      box-shadow: 0 0 1rem #4275f3 inset;
      box-sizing: border-box;
      border-radius: 15px;
      margin-top:1rem;

      .polygon-stroke {
        position: absolute;
        top: -0.13rem;
        left: -0.13rem;
        width: 2rem;
        height: 2rem;
        background-color: red;
      }
    }


    .col-container {
      box-sizing: border-box;
    }

    .center-content {
      border: 1px solid #4574D6;
      box-sizing: border-box;
      margin:0 0.8rem;
      width:calc(100%-1.6rem);
      .center-box{
        padding: 1rem 1.5rem;
        .center-stroke{
          border: 1px solid #4574D6;
          box-sizing: border-box;
          position: relative;
          i.inner-stroke-1 {
            position: absolute;
            top: -0.13rem;
            left: -0.13rem;
            width: 2rem;
            height: 2rem;
            background-color: transparent;
            border-top: 0.13rem solid #00FFFF;
            border-left: 0.13rem solid #00FFFF;
          }

          .inner-stroke-2 {
            position: absolute;
            top: -0.13rem;
            right: -0.13rem;
            width: 2rem;
            height: 2rem;
            background-color: transparent;
            border-top: 0.13rem solid #00FFFF;
            border-right: 0.13rem solid #00FFFF;
          }

          .inner-stroke-3 {
            position: absolute;
            bottom: -0.13rem;
            left: -0.13rem;
            width: 2rem;
            height: 2rem;
            background-color: transparent;
            border-bottom: 0.13rem solid #00FFFF;
            border-left: 0.13rem solid #00FFFF;
          }

          .inner-stroke-4 {
            position: absolute;
            bottom: -0.13rem;
            right: -0.13rem;
            width: 2rem;
            height: 2rem;
            background-color: transparent;
            border-bottom: 0.13rem solid #00FFFF;
            border-right: 0.13rem solid #00FFFF;
          }
        }
      }
    }
  }
</style>
