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
            <!-- 左上 -->
            <div id="module-left-top" :style="{height:contentHeight/7*3.8+'px',marginBottom:'0.8rem'}" style="background-color: chartreuse"
                 class="stroke">
              <i class="inner-stroke-1"></i>
              <i class="inner-stroke-2"></i>
              <i class="inner-stroke-3"></i>
              <i class="inner-stroke-4"></i>
              <p class="module-title-left">
                <span class="title-left">当月业务量</span>
              </p>
              <!-- 数据区 -->
            <business :vheight="contentHeight/7*3.8-2.5*12"></business>
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
              <duration :vheight="contentHeight/7*3.2-5.3*12"></duration>
            </div>
          </div>
        </el-col>
        <!-- 中 -->
        <el-col :span="12">
          <div style="background-color: purple;" :style="{height:contentHeight-2*12+'px'}" class="center-content ">
            <p class="module-title-center">
              <span class="title-center">进口物流实时态势</span>
            </p>
            <div class="center-box">
              <!-- 实时图 -->
              <div :style="{height:contentHeight*3/4+12+'px'}" class="center-stroke">
                <i class="inner-stroke-1"></i>
                <i class="inner-stroke-2"></i>
                <i class="inner-stroke-3"></i>
                <i class="inner-stroke-4"></i>
                <process :vheight="contentHeight*3/4+12"></process>
              </div>
              <!-- 数据统计 -->
              <div style="background-color: coral" class="col-container">
                <el-row>
                  <el-col :span="6" style="background-color: darkred">
                    <div :style="{height:contentHeight-(contentHeight*3/4)-9*12+'px'}" class="polygon">
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
                      <Total :num="parseInt(Math.random()*1000)">
                        <template slot="title">
                          当天到港货物总数
                        </template>
                      </Total>
                    </div>
                  </el-col>
                  <el-col :span="6" style="background-color: chocolate">
                    <div :style="{height:contentHeight-(contentHeight*3/4)-9*12+'px',marginLeft:'0.6rem'}" class="polygon">
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
                      <Total :num="parseInt(Math.random()*1000)">
                        <template slot="title">
                          当天提货预约总数
                        </template>
                      </Total>
                    </div>
                  </el-col>
                  <el-col :span="6" style="background-color: darkred">
                    <div :style="{height:contentHeight-(contentHeight*3/4)-9*12+'px',marginLeft:'0.6rem'}" class="polygon">
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
                      <Total :num="parseInt(Math.random()*1000)">
                        <template slot="title">
                          当天实际提离总数
                        </template>
                      </Total>
                    </div>
                  </el-col>
                  <el-col :span="6" style="background-color: darkred">
                    <div :style="{height:contentHeight-(contentHeight*3/4)-9*12+'px',marginLeft:'0.6rem'}" class="polygon">
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
                      <Total :num="parseInt(Math.random()*1000)">
                        <template slot="title">
                          当天发查验总票数
                        </template>
                      </Total>
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
            <div :style="{height:contentHeight/3+4*12-0.6*12+'px',marginBottom:'0.9rem'}"
                 style="background-color: chartreuse" class="stroke">
              <i class="inner-stroke-1"></i>
              <i class="inner-stroke-2"></i>
              <i class="inner-stroke-3"></i>
              <i class="inner-stroke-4"></i>
              <p class="module-title-right">
                <span class="title-right">进口货物票数趋势</span>
              </p>
              <inlet-goods></inlet-goods>
            </div>
            <div :style="{height:contentHeight/3-2*12-0.6*12+'px',marginBottom:'0.9rem'}"
                 style="background-color: coral"
                 class="col-container stroke">
              <i class="inner-stroke-1"></i>
              <i content="inner-stroke-2"></i>
              <i class="inner-stroke-3"></i>
              <i class="inner-stroke-4"></i>
              <p class="module-title-right">
                <span class="title-right">提货车次趋势</span>
              </p>
              <car-number></car-number>
            </div>
            <div :style="{height:contentHeight/3-4*12-0.6*12+'px'}" style="background-color: deeppink"
                 class="col-container stroke">
              <i class="inner-stroke-1"></i>
              <i class="inner-stroke-2"></i>
              <i class="inner-stroke-3"></i>
              <i class="inner-stroke-4"></i>
              <p class="module-title-right">
                <span class="title-right">查验预约趋势</span>
              </p>
              <check-apt></check-apt>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/common/Header.vue'
  import business from '@/view/screen/business/business.vue'
  import duration from '@/view/screen/duration/duration.vue'
  import process from '@/view/screen/process/process.vue'
  import Total from '@/view/screen/total/total.vue'
  import InletGoods from '@/view/screen/inlet/InletGoods.vue'
  import CarNumber from '@/view/screen/cars/CarNumber.vue'
  import CheckApt from '@/view/screen/check/CheckApt.vue'

  export default {
    name: "home",
    components: {
      Header,
      business,
      duration,
      process,
      Total,
      InletGoods,
      CarNumber,
      CheckApt
    },
    data() {
      return {
        screenWidth: document.documentElement.clientWidth, //屏幕宽度
        screenHeight: document.documentElement.clientHeight, //屏幕高度
        contentHeight: 0,
        xwidth: 0,
        xheight: 0,
      }
    },
    methods: {
      // 初始化
      init() {
        // 高度初始化
        this.contentHeight = document.documentElement.clientHeight - document.getElementById('header').offsetHeight;
        this.xwidth = document.getElementById('header').offsetWidth;
        this.xheight = document.getElementById('header').offsetHeight;
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
