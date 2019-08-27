<template>
  <div class="home">
    <!-- 标题 -->
    <div class="header" id="header">
      <Header :xwidth="xwidth" :xheight="xheight"></Header>
    </div>
    <!-- 图表区 -->
    <div class="container" id="container">
      <el-row>
        <el-col :span="6">
          <div style="background-color: blue">
            <div :style="{height:contentHeight/2-2*12+'px',marginBottom:'0.8rem'}" style="background-color: chartreuse" class="stroke">
              <i class="inner-stroke-1"></i>
              <i class="inner-stroke-2"></i>
              <i class="inner-stroke-3"></i>
              <i class="inner-stroke-4"></i>
            </div>
            <div :style="{height:contentHeight/2-2*12-0.8*12+'px'}" style="background-color: coral" class="col-container stroke">
              <i class="inner-stroke-1"></i>
              <i class="inner-stroke-2"></i>
              <i class="inner-stroke-3"></i>
              <i class="inner-stroke-4"></i>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div style="background-color: purple" :style="{height:contentHeight-4*12+'px'}" class="center-content ">
            <div :style="{height:contentHeight*3/4-2*12+'px'}" style="background-color: white" class="stroke">
              <i class="inner-stroke-1"></i>
              <i class="inner-stroke-2"></i>
              <i class="inner-stroke-3"></i>
              <i class="inner-stroke-4"></i>
            </div>
            <div style="background-color: coral" class="col-container">
              <el-row>
                <el-col :span="8" style="background-color: aqua">
                  <div :style="{height:contentHeight-(contentHeight*3/4)-3*12+'px'}"></div>
                </el-col>
                <el-col :span="8" style="background-color: chocolate">
                  <div :style="{height:contentHeight-(contentHeight*3/4)-3*12+'px'}"></div>
                </el-col>
                <el-col :span="8" style="background-color: aqua">
                  <div :style="{height:contentHeight-(contentHeight*3/4)-3*12+'px'}"></div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div style="background-color: yellow">
            <div :style="{height:contentHeight/3+2*12-0.6*12+'px',marginBottom:'0.9rem'}" style="background-color: chartreuse" class="stroke">
              <i class="inner-stroke-1"></i>
              <i class="inner-stroke-2"></i>
              <i class="inner-stroke-3"></i>
              <i class="inner-stroke-4"></i>
            </div>
            <div :style="{height:contentHeight/3-3*12-0.6*12+'px',marginBottom:'0.9rem'}" style="background-color: coral"
                 class="col-container stroke">
              <i class="inner-stroke-1"></i>
              <i content="inner-stroke-2"></i>
              <i class="inner-stroke-3"></i>
              <i class="inner-stroke-4"></i>
            </div>
            <div :style="{height:contentHeight/3-3*12-0.6*12+'px'}" style="background-color: deeppink"
                 class="col-container stroke">
              <i class="inner-stroke-1"></i>
              <i class="inner-stroke-2"></i>
              <i class="inner-stroke-3"></i>
              <i class="inner-stroke-4"></i>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/common/Header.vue'

  export default {
    name: "home",
    components: {
      Header
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
    padding: 2rem 1rem;
    .stroke{
      border: 1px solid #4574D6;
      box-sizing: border-box;
      position: relative;
      i.inner-stroke-1{
        position: absolute;
        top:-0.13rem;
        left: -0.13rem;
        width: 2rem;
        height: 2rem;
        background-color: transparent;
        border-top:0.13rem solid #00FFFF;
        border-left:0.13rem solid #00FFFF;
      }
      .inner-stroke-2{
        position: absolute;
        top:-0.13rem;
        right: -0.13rem;
        width: 2rem;
        height: 2rem;
        background-color: transparent;
        border-top: 0.13rem solid #00FFFF;
        border-right: 0.13rem solid #00FFFF;
      }
      .inner-stroke-3{
        position: absolute;
        bottom:-0.13rem;
        left: -0.13rem;
        width: 2rem;
        height: 2rem;
        background-color: transparent;
        border-bottom: 0.13rem solid #00FFFF;
        border-left: 0.13rem solid #00FFFF;
      }
      .inner-stroke-4{
        position: absolute;
        bottom:-0.13rem;
        right: -0.13rem;
        width: 2rem;
        height: 2rem;
        background-color: transparent;
        border-bottom: 0.13rem solid #00FFFF;
        border-right: 0.13rem solid #00FFFF;
      }
    }
    .col-container {
      padding-top: 1rem;
      box-sizing: border-box;
    }

    .center-content {
      padding: 0 1rem;
      box-sizing: border-box;
    }
  }
</style>
