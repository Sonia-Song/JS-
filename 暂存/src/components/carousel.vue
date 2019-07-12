<template>
  <!--
    使用插件需要传值timer，布尔类型，true启动轮播，false停止轮播
  -->
<!--<div class="carousel">-->
  <ul id="img" ref="img">
    <li :class="{'opa-on':jumpIndex==item.imgIndex}" v-for="(item,index) in imgs" :key="index">
      <img :src="require(`../../static/images/main/${item.url}`)" alt="">
    </li>
  </ul>
<!--</div>-->
</template>

<script>
export default {
name: "carousel",
props:{
  isRun:{
    type:Boolean,
    default:false
  },

},
data(){
    return{
      imgs:[
        {imgIndex:1, url:'banner1.png'},
        {imgIndex:2, url:'banner2.png'},
        {imgIndex:3, url:'banner3.png'},
      ],
      jumpIndex:1,// 轮播
    }
},
mounted(){
if(this.isRun){
  this.play();
}else{
  clearInterval(this.timer)
}
},
methods:{
  play(){
    let that=this;
    this.timer=setInterval(function(){
      that.nextMove();
    },3000);
  },
  nextMove(){
    this.jumpIndex+=1;
    if(this.jumpIndex>3){
      this.jumpIndex=1
    }
  }
}
}
</script>

<style scoped lang="scss">
  #index{
    position: absolute;
    left:320px;
    bottom: 20px;

  }
  #index li{
    width:8px;
    height: 8px;
    border: solid 1px gray;
    border-radius: 100%;
    background-color: #eee;
    display: inline-block;
  }
  #img{
    width: 720px;
    height: 405px;
  }
  #img li{
    width: 720px;
    height: 405px;
    position: absolute;/*必须设置为absolute，否则第一个li会把后面的都覆盖*/
    z-index: -1;
    opacity: 0;
    transition: opacity 1s ease-in;
  }
  #index .on{
    background-color: black;
  }
  #img .opa-on{
    opacity: 1;
  }

</style>
