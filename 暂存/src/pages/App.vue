<template>
<div class="app">
  <!-- banner样式 -->
  <div class="banner_style">
    <img :src="require(`../../static/images/app/${bannerImg}`)">
  </div>
  <!--内容-->
  <div id="main">
    <main>
      <div class="breadcrumb">
        <a href="#" target="_blank"><i class="icon news"></i>{{pageName}}应用介绍</a>
      </div>
      <!-- 数据应用列表 -->
      <div id="Data" class="local_content">
        <a :href="item.appValid!=0?'':item.appUrl" target="_blank" class="local_active" :class="{gray:item.appValid!=0}" v-for="(item,index) in list">
          <div class="circle">
            <img :src="item.appIconUrl" >
            <p>{{item.appName}}</p>
          </div>
        </a>
      </div>
    </main>
  </div>
</div>
</template>

<script>
  import {
    getLogistics,
    getFinance,
    getData
  } from '../api/index.js'
export default {
name: "App",
data(){
    return{
      bannerImg:'',//banner图片
      pageName:'',
      list:[]
    }
},
async created(){
  let path=this.$route.query.name;
  if(path=='logistics'){
    this.bannerImg='wuliu.png';
    this.pageName='物流';
    let log=await getLogistics();
    if(log.code=='0000'){
      this.list=log.data;
    }
  }else if(path=='finance'){
    this.bannerImg='jinrong.png';
    this.pageName='金融';
    let fin=await getFinance();
    if(fin.code=='0000'){
      this.list=fin.data;
    }

  }else if(path=='data'){
    this.bannerImg='shuju.png';
    this.pageName='数据';
    let dat=await getData();
    if(dat.code=='0000'){
      this.list=dat.data;
    }
  }
},
methods:{

}
}
</script>

<style scoped>
  /*banner样式*/

  .banner_style{
    width: 1366px;
    height: 270px;
    margin: auto;
  }

  #main{
    background-color: #f7f8fa;width: 1366px;margin:auto;
  }
  main{
    width: 1200px;
    margin:0 auto;
  }
  .breadcrumb{
    height: 90px;
    line-height: 90px;
    border-bottom:1px solid #dcdee3;
  }
  .breadcrumb>a{
    font-size: 20px;
    font-weight: bold;
  }
  .breadcrumb>a:hover{
    color:#3e71f7;
  }
  .content{
    background-color: #FFFFFF;
    margin-top:30px;
    padding:60px 80px;
    box-sizing: border-box;
    -webkit-box-shadow: 0 6px 6px rgba(85,132,255,.6);
    -moz-box-shadow: 0 6px 6px rgba(85,132,255,.6);
    box-shadow: 0 6px 6px rgba(85,132,255,.06);
  }
  /* 图标 */
  .icon{
    display: inline-block;
    margin-right: 20px;
    width: 25px;
    height: 30px;
    background: url(../../static/images/app/sprite_03.png) no-repeat;
    position: relative;
    top:12px;
  }
  .news{
    background-position: 0 -70px;
  }
  .news_title{
    width: 100%;
    height: 50px;
    font-size: 24px;
    font-weight: bold;
  }
  /* 内容 */
  .local_content{
    width: 100%;
    padding:20px 20px;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
  }
  .local_content .circle{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin:auto;
    margin-top:40%;
    transform: translate(0,-50%);
    background-color: #0F6BD9;
  }
  .local_content>a{
    float: left;
    width: 190px;
    height: 190px;
    margin:5px 45px 40px 5px;
    text-align: center;
    background-color: #FFFFFF;
    box-sizing: border-box;
    -webkit-box-shadow: 0px 0px 6px rgba(66,117,243,.06);
    -moz-box-shadow: 0px 0px 6px rgba(66,117,243,.06);
    box-shadow: 0px 0px 6px rgba(66,117,243,.06);
    transition: all .1s linear;
  }
  .local_content>a:nth-of-type(5n){
    margin-right: 0;
  }
  .local_content p{
    margin-top:30px;
  }
  .local_content img{
    max-width: 70px;
    max-height: 60px;
    margin-top:50%;
    transform: translate(0,-60%);
  }
  .local_content>a:hover .circle{
    background-position: 0px -170px;
  }
  .local_content>a:hover p{
    font-size: 16px;
    font-weight: normal;
  }
  .local_content>a:hover{
    width: 190px;
    height: 190px;
    box-shadow: 0px 6px 18px rgba(66,117,243,.3);
  }
  a.gray{
    background-color: rgb(193,193,193)!important;
  }

</style>
