<template>
  <div class="home">
    <!-- 标题 -->
    <div class="header" id="header"></div>
    <!-- 图表区 -->
    <div class="container" id="container" >
      <el-row>
        <el-col :span="6">
          <div style="background-color: blue">
            <div :style="{height:contentHeight/2-2*12+'px'}" style="background-color: chartreuse"></div>
            <div :style="{height:contentHeight/2-2*12+'px'}" style="background-color: coral" class="col-container"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div style="background-color: purple" :style="{height:contentHeight-4*12+'px'}" class="center-content">
            <div :style="{height:contentHeight*3/4-2*12+'px'}" style="background-color: white"></div>
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
            <div :style="{height:contentHeight/3+2*12+'px'}" style="background-color: chartreuse"></div>
            <div :style="{height:contentHeight/3-3*12+'px'}" style="background-color: coral" class="col-container"></div>
            <div :style="{height:contentHeight/3-3*12+'px'}" style="background-color: deeppink" class="col-container"></div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        screenWidth:document.documentElement.clientWidth, //屏幕宽度
        screenHeight:document.documentElement.clientHeight, //屏幕高度
        contentHeight:0,
      }
    },
    methods: {
      // 初始化
      init(){
        // 高度初始化
        this.contentHeight=document.documentElement.clientHeight-document.getElementById('header').offsetHeight;
      },
    },
    computed:{
    },
    mounted() {
      // 获取高度
      let that=this;
      this.init();
      window.onresize=function () {
        that.screenHeight=document.documentElement.clientHeight;
        that.screenWidth=document.documentElement.clientWidth;
      }
    },
    watch:{
      screenHeight(newVal,oldVal){
        let a=document.getElementById('header').offsetHeight;
        this.contentHeight=newVal-a;
      }
    },
  }
</script>

<style scoped lang="scss">
.header{
  height: 5rem;
  background-color: red;
}
.container{
  background-color: green;
  padding: 2rem 1rem;
  .col-container{
    padding-top:1rem;
    box-sizing: border-box;
  }
  .center-content{
    padding:0 1rem;
    box-sizing: border-box;
  }
}
</style>
