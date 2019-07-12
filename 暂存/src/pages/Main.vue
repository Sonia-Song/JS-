<template>
  <div class="main">
    <!-- 轮播图 -->
    <div class="carousel">
      <!--登录框-->
      <div class="login_box">
        <lodinIfram></lodinIfram>
      </div>
      <!-- 滚动新闻 -->
      <div class="scroll-text">
        <scrolltext :textColor="'#FFFFFF'" :isCenter="'right'" :list="notice"></scrolltext>
      </div>
      <carousel :isRun="true"></carousel>
    </div>
    <!-- 中央标准版 -->
    <div class="gov_application">
      <div class="long_bar">
        <span class="mark_split mark_split_active">中央标准应用</span>
        <span class="more_split">
           <a href="#">MORE&nbsp;&nbsp;>></a>
        </span>
      </div>
      <!-- 引入国标版 -->
      <div class="gov_app">
        <iframe scrolling="auto" src="http://www.singlewindow.cn/singlewindow/standard/app.jspx?area_id=110000"
                style="min-width:1000px;min-height:215px;" width="100%" height="100%" frameborder="0"></iframe>
      </div>
    </div>
    <!-- 地方特色 -->
    <ul class="local clearfix">
      <!-- 物流应用 -->
      <li>
        <div class="shot_bar">
          <span class="local_mark_split mark_split_active">物流应用</span>
          <span class="local_more_split">
              <router-link :to="{path:'/home/app',query:{name:'logistics'}}" tag="span">
                <a target="_blank">MORE&nbsp;&nbsp;>></a>
              </router-link>
          </span>
        </div>
        <div id="Logistics" class="local_content">
          <a :href="item.appValid!=0?'':item.appUrl" target="_blank" class="local_active" :class="{gray:item.appValid!=0}" v-for="(item,index) in logisticsList" v-if="index<5">
            <div class="circle">
              <img :src="item.appIconUrl" >
              <p>{{item.appName}}</p>
            </div>
          </a>
        </div>
      </li>
      <!-- 金融应用 -->
      <li>
        <div class="shot_bar">
          <span class="local_mark_split mark_split_active">金融应用</span>
          <span class="local_more_split">
            <router-link :to="{path:'/home/app',query:{name:'finance'}}" tag="span">
                <a target="_blank">MORE&nbsp;&nbsp;>></a>
            </router-link>
          </span>
        </div>
        <div id="Financial" class="local_content">
          <a :href="item.appValid!=0?'':item.appUrl" target="_blank" class="local_active" :class="{gray:item.appValid!=0}" v-for="(item,index) in financeList" v-if="index<5">
            <div class="circle">
              <img :src="item.appIconUrl" >
              <p>{{item.appName}}</p>
            </div>
          </a>
        </div>
      </li>
      <!-- 资讯中心 -->
      <li>
        <div class="shot_bar">
          <span class="local_mark_split mark_split_active">资讯中心</span>
          <span class="local_more_split">
              <router-link to="/home/center" tag="span">
                <a target="_blank">MORE&nbsp;&nbsp;>></a>
              </router-link>
           </span>
        </div>
        <div id="News" class="local_content">
          <p class="news" v-for="(item,index) in news" :key="index">
            <router-link :to="{path:'/home/detail',query: { detailID: item.id,detailDate:item.publishDate,detailTitle:item.title,typeName:'新闻动态' }}"
                         tag="div"
                         class="clearfix">
              <a target="_blank">{{item.title}}</a>
              <span>{{item.publishDate|newDate}}</span>
              <i :class="{newIcon:item.publishDate>=pastDate&&item.publishDate<=currentDate}"></i>
            </router-link>
          </p>
        </div>
      </li>
      <!-- 数据应用 -->
      <li>
        <div class="shot_bar">
          <span class="local_mark_split mark_split_active">数据应用</span>
          <span class="local_more_split">
            <router-link :to="{path:'/home/app',query:{name:'data'}}" tag="span">
                <a target="_blank">MORE&nbsp;&nbsp;>></a>
            </router-link>
          </span>
        </div>
        <div id="Data" class="local_content">
          <a :href="item.appValid!=0?'':item.appUrl" target="_blank" class="local_active" :class="{gray:item.appValid!=0}" v-for="(item,index) in dataList" v-if="index<5">
            <div class="circle">
              <img :src="item.appIconUrl" >
              <p>{{item.appName}}</p>
            </div>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
//  引入轮播图
import carousel from '../components/carousel.vue'
//  引入滚动新闻
import scrolltext from '../components/scrolltext.vue'
//  引入登录框
import lodinIfram from '../components/lodinIfram.vue'
//  引入API
import {
  getLogistics,
  getFinance,
  getData,
  getNewsList
} from '../api/index.js'
export default {
name: "Main",
components:{
  carousel,
  scrolltext,
  lodinIfram
},
data(){
    return{
      financeList:[],//金融
      logisticsList:[],//物流
      dataList:[],//数据
      news:[],//新闻
      notice:[],//通知
    }
},
computed:{
  pastDate(){
    return new Date()-(24*60*60*1000*10)
  },
  currentDate(){
    return new Date().getTime()
  }
},
async created(){
  let news=await getNewsList('categoryId=1&pageIndex=1&count=5');
  if(news.page.list!=[]){
    this.news=news.page.list;
  }
  let notice=await getNewsList('categoryId=2&pageIndex=1&count=5');
  if(notice.page.list!=[]){
    this.notice=notice.page.list;
  }
  let log=await getLogistics();
  if(log.code=='0000'){
    this.logisticsList=log.data;
  }
  let fin=await getFinance();
  if(fin.code=='0000'){
    this.financeList=fin.data;
  }
  let dat=await getData();
  if(dat.code=='0000'){
    this.dataList=dat.data;
  }
},
methods:{

}
}
</script>

<style scoped lang="scss">
  .carousel{
    width: 1365px;
    height: 405px;
    margin:0 auto;
    overflow: hidden;
    position: relative;
  }
  /* 登录框样式 */
  .login_box{
    width:320px;
    height:300px;
    position:absolute;
    right:80px;
    top:40px;
  }
  /* 滚动新闻 */
  .scroll-text{
    position:absolute;
    bottom:20px;
    right:0;
  }

  /* 中央标准应用 */
  .gov_application{
    width: 1366px;
    min-height: 255px;
    margin: auto;
    margin-bottom: 30px;
  }
  .long_bar{
    position: relative;
    width: inherit;
    height: 40px;
    background: url(../../static/images/main/lang_bar.jpg) no-repeat;
    background-size: 100%;
  }
  .mark_split{
    width: 150px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    position: absolute;
    left: 215px;
    bottom: 0;
    background-color: #FFFFFF;
    color: #0f6bd9;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  .more_split{
    width: auto;
    height: 35px;
    line-height: 35px;
    text-align: center;
    position: absolute;
    right: 220px;
    bottom: 0;
  }
  .more_split a{
    color: #FFFFFF;
    font-size: 20px;
  }
  .gov_app{
    width: inherit;
    height: 215px;
  }

  /* 地方特色 */
  .local{
    width :1366px;
    margin :auto;
    margin-bottom:50px;
    min-height: 350px;
  }
  .local li:nth-of-type(odd){
    float: left;
  }
  .local li:nth-of-type(even){
    float: right;
  }
  .shot_bar{
    width :665px;
    height :40px;
    position: relative;
    background :url(../../static/images/main/short_bar.png) no-repeat;
  }
  .local_mark_split{
    width :150px;
    height :35px;
    line-height: 35px;
    text-align :center;
    position :absolute;
    left :36px;
    bottom: 0;
    background-color: #FFFFFF;
    color: #0f6bd9;
    font-size: 16px;
    font-weight :bold;
    cursor: pointer;
  }
  /* 此处js根据需求添加 */
  .mark_split_active{
    background-color: transparent!important;
    color: #FFFFFF!important;
  }
  .local_more_split{
    width: auto;
    height: 35px;
    line-height: 35px;
    text-align: center;
    position: absolute;
    right: 38px;
    bottom: 0;
  }
  .local_more_split a{
    color: #FFFFFF;
    font-size: 20px;
  }
  .local_content{
    width: 100%;
    height: 170px;
    padding:20px 20px;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    position: relative;
  }
  .local_content .news{
    height: 30px;
    width: 100%;
  }
  p.news{
    a{
      display: inline-block;
      width: 360px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      font-size: 14px;
      color: #333333;
    }
    a:before{
      content: "\2022\00A0\00A0";
      font-size: 18px;
    }
    span{
      display: inline-block;
      margin-left: 70px;
    }
  }

  .local_content{
    .local_active{
      position:relative;
      display: inline-block;
      width: 120px;
      height: 120px;
      padding:20px 5px;
      margin:5px 16px;
      text-align: center;
      box-sizing: border-box;
      color:#ffffff;
      background-color: #0F6BD9;
    }
  }
  .local_active:hover{
    background-color: #105ab4!important;
  }
  .local_active{
    div{
      max-width: 60px;
      height: 50px;
      margin:0 auto;
      padding-top:10px;
      overflow: hidden;
    }
  }
  .local_content{
    a{
      p{
        position: absolute;
        bottom: 10px;
        height: 28px;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
      }
    }
  }
  .local_gray{
    background-color:rgb(193,193,193)!important;
  }
  .local_content img{
    max-height: 36px;
  }
  /* 添加NEW图标 */
  .newIcon{
    display:inline-block;
    margin-left: 3px;
    width: 22px;
    height: 14px;
    background: url(../../static/images/new_3.gif) no-repeat;
  }
</style>
