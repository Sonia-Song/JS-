<template>
  <!--
    传入数据列表list
    新闻显示isCenter，可以传入的值【left，right，center】
    文本颜色textColor ，例：‘#FFFFFF’
  -->
  <div id="box">
    <ul id="con1" :class="{anim:animate}" :style="{marginTop:top+'px'}">
      <router-link :style="{textAlign:isCenter}" :to="{path:'/home/detail',query: { detailID: item.id,detailDate:item.publishDate,detailTitle:item.title,typeName:'通知公告' }}" tag="li" v-for="(item,index) in list" :key="index">
        <a :style="{color:textColor}" target="_blank">{{item.title}}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
name: "scrolltext",
props:{
  list:{
    type:Array,
    default:[]
  },
  textColor:{
    type:String,
    default: '#FFFFFF'
  },
  isCenter:{
    type:String,
    default:'right'
  }
},
data(){
    return{
      animate:false,
      top:0,
    }
},
mounted(){
  setInterval(this.scroll,2000)
},
methods:{
  scroll() {
    this.top=-50;
    this.animate=!this.animate;
    let that=this;
    setTimeout(function () {
      that.list.push(that.list[0]);
      that.list.shift();
      that.top=0;
      that.animate=!that.animate;

    },500)
  }
}
}
</script>

<style scoped lang="scss">
  #box{
    min-width:610px;
    height:32px;
    line-height:30px;
    overflow:hidden;
    padding-left:30px;
    margin-right:80px;
    transition:all 1.5s;
  }
  .anim{
    transition:all 1.5s;
  }
  #con1 li{
    list-style: none;
    line-height: 30px;
    height: 30px;
    text-align: right;
  }
  #con1 li a{
    font-size: 12px;
  }
</style>
