<template>
<div class="center">
  <!-- banner样式 -->
  <div class="banner_news"></div>
  <!--滚动新闻-->
  <div id="scroll-text">
    <scrolltext :textColor="'#333333'" :isCenter="'center'" :list="scrollNews"></scrolltext>
  </div>
  <!--内容-->
  <div id="main" style="background-color: #f7f8fa;width: 1360px;margin:auto;">
    <main>
      <div class="breadcrumb ">
        <a href="#" target="_blank"><i class="icon news"></i>资讯中心</a>
      </div>
      <!-- 新闻内容 -->
      <div class="contain">
        <!-- 第一行 -->
        <div class="row_1">
          <div class="cal_1">
            <router-link tag="div" :to="{path:'/home/list',query: { listTypeid: onType.新闻动态,listTypename:'新闻动态' }}" class="title clearfix">
              <b class="title_word">新闻动态</b>
              <a class="more" target="_blank">MORE >></a>
            </router-link>
            <!--小轮播-->
            <div class="slider" id="slider">
              <!--<small-carousel></small-carousel>-->
            </div>
            <!--新闻列表-->
            <div class="news_list" id="first_list">
                <router-link :to="{path:'/home/detail',query: { detailID: item.id,detailDate:item.publishDate,detailTitle:item.title,typeName:'新闻动态'}}"
                             class="news"
                             v-for="(item,index) in news"
                             :key="index"
                             tag="p" >
                  <a target="_blank">{{item.title}}</a>
                  [<span>{{item.publishDate|newDate}}</span>]<i :class="{newIcon:item.publishDate>=pastDate&&item.publishDate<=currentDate}"></i>
                </router-link>
            </div>
          </div>
          <div class="cal_2">
            <!-- 通知公告 -->
            <router-link tag="div" :to="{path:'/home/list',query: { listTypeid: onType.通知公告,listTypename:'通知公告' }}" class="title clearfix">
              <b class="title_word">通知公告</b>
              <a class="more" target="_blank">MORE >></a>
            </router-link>
            <div class="list" id="second_list">
              <router-link :to="{path:'/home/detail',query: { detailID: item.id,detailDate:item.publishDate,detailTitle:item.title,typeName:'通知公告'}}"
                           class="news"
                           v-for="(item,index) in notice"
                           :key="index"
                           tag="p" >
                <a target="_blank">{{item.title}}</a>
                [<span>{{item.publishDate|newDate}}</span>]<i :class="{newIcon:item.publishDate>=pastDate&&item.publishDate<=currentDate}"></i>
              </router-link>
            </div>
            <!-- 收费公示 -->
            <router-link tag="div" :to="{path:'/home/list',query: { listTypeid: onType.政策法规,listTypename:'政策法规' }}" class="title clearfix">
              <b class="title_word">政策法规</b>
              <a class="more" target="_blank">MORE >></a>
            </router-link>
            <div class="list" id="third_list">
              <router-link :to="{path:'/home/detail',query: { detailID: item.id,detailDate:item.publishDate,detailTitle:item.title,typeName:'政策法规'}}"
                           class="news"
                           v-for="(item,index) in policies"
                           :key="index"
                           tag="p" >
                <a target="_blank">{{item.title}}</a>
                [<span>{{item.publishDate|newDate}}</span>]<i :class="{newIcon:item.publishDate>=pastDate&&item.publishDate<=currentDate}"></i>
              </router-link>
            </div>
          </div>
        </div>
        <!-- 第二行 -->
        <!--<div class="row_2 clearfix" v-for="(series,index) in laveNews" :key="'lave'+index">-->
        <div class="row_2 clearfix">
          <div class="cal">
            <router-link tag="div" :to="{path:'/home/list',query: { listTypeid: underType.贸易资讯,listTypename:'贸易资讯' }}" class="title clearfix">
              <b class="title_word">贸易资讯</b>
              <a class="more" target="_blank">MORE >></a>
            </router-link>
            <div class="listel" id="fourth_list">
              <router-link :to="{path:'/home/detail',query: { detailID: item.id,detailDate:item.publishDate,detailTitle:item.title,typeName:'政策法规'}}"
                           class="news"
                           v-for="(item,index) in tradeNews"
                           :key="index"
                           tag="p" >
                <a target="_blank">{{item.title}}</a>
                [<span>{{item.publishDate|newDate}}</span>]<i :class="{newIcon:item.publishDate>=pastDate&&item.publishDate<=currentDate}"></i>
              </router-link>
            </div>
          </div>
          <div class="cal">
            <router-link tag="div" :to="{path:'/home/list',query: { listTypeid: underType.物流资讯,listTypename:'物流资讯' }}" class="title clearfix">
              <b class="title_word">物流资讯</b>
              <a class="more" target="_blank">MORE >></a>
            </router-link>
            <div class="listel" id="fifth_list">
              <router-link :to="{path:'/home/detail',query: { detailID: item.id,detailDate:item.publishDate,detailTitle:item.title,typeName:'政策法规'}}"
                           class="news"
                           v-for="(item,index) in logiticsNews"
                           :key="index"
                           tag="p" >
                <a target="_blank">{{item.title}}</a>
                [<span>{{item.publishDate|newDate}}</span>]<i :class="{newIcon:item.publishDate>=pastDate&&item.publishDate<=currentDate}"></i>
              </router-link>
            </div>
          </div>
          <div class="cal">
            <router-link tag="div" :to="{path:'/home/list',query: { listTypeid: underType.收费公示,listTypename:'收费公示' }}" class="title clearfix">
              <b class="title_word">收费公示</b>
              <a class="more" target="_blank">MORE >></a>
            </router-link>
            <div class="listel" id="sixth_list">
              <router-link :to="{path:'/home/detail',query: { detailID: item.id,detailDate:item.publishDate,detailTitle:item.title,typeName:'政策法规'}}"
                           class="news"
                           v-for="(item,index) in freePublicity"
                           :key="index"
                           tag="p" >
                <a target="_blank">{{item.title}}</a>
                [<span>{{item.publishDate|newDate}}</span>]<i :class="{newIcon:item.publishDate>=pastDate&&item.publishDate<=currentDate}"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
</template>

<script>
//  引入滚动新闻
import scrolltext from '../components/scrolltext.vue'
//  引入轮播图
import smallCarousel from '../components/smallCarousel.vue'
import {
  getNewsList,
  getNewsType
} from '../api/index.js'
export default {
name: "NewsCenter",
components:{
  scrolltext,
  smallCarousel
},
data(){
    return{
      news:[],//新闻
      notice:[],//通知
      policies:[],//政策法规
      laveNews:[],//其他列表
      underType:[],
      onType:[]
    }
},
computed:{
  scrollNews(){
    return JSON.parse(JSON.stringify(this.news))
  },
  pastDate(){
    return new Date()-(24*60*60*1000*10)
  },
  currentDate(){
    return new Date().getTime()
  }
},
async created(){
  /* 获取文章分类 */
  let type=await getNewsType('advanced=true&parentId=9');
  this.keyAndValue(type.page.list,this.onType,this.underType);
  /* 请求文章列表 */
  let news=await getNewsList('categoryId='+this.onType.新闻动态+'&pageIndex=1&count=10');
  if(news.page.list!=[]){
    this.news=news.page.list;
  }
  let notice=await getNewsList('categoryId='+this.onType.通知公告+'&pageIndex=1&count=4');
  if(notice.page.list!=[]){
    this.notice=notice.page.list;
  }
  let policies=await getNewsList('categoryId='+this.onType.政策法规+'&pageIndex=1&count=3');
  if(policies.page.list!=[]){
    this.policies=policies.page.list;
  }
  this.laveList();
},
methods:{
//  键值对加工
  keyAndValue(arr,on,under){
    arr.forEach(function (item) {
      if(item.name=='新闻动态'||item.name=='通知公告'||item.name=='政策法规'){
        on[item.name]=item.id;
      }else if(item.name=='关于我们'||item.name=='常用下载'){

      }else{
        under[item.name]=item.id;
      }
    },this);
  },
//  整齐列表
  async laveList(){
    let count=0;
    for(var key in this.underType){
      let res=await getNewsList('categoryId='+this.underType[key]+'&pageIndex=1&count=4');
      if(res.page.list!=[]){
        this.laveNews[count]=res.page.list;
        count++;
        console.log(this.laveNews)
      }
    }
  }

}
}
</script>

<style scoped lang="scss">
  /*banner样式*/
  .banner_news{
    width: 1366px;
    height: 270px;
    margin: auto;
    background: url(../../static/images/news/news_center_banner.png) no-repeat;
  }
  /* 滚动新闻 */

  #scroll-text{
    width:1200px;
    height:32px;
    margin:30px auto;
  }

  /**/
  main{
    width: 1200px;
    height: auto;
    margin: auto;
  }
  .breadcrumb{
    height: 90px;
    line-height: 90px;
    /*border-bottom:1px solid #dcdee3;*/
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
  .contain{
    padding-bottom: 50px;
  }
  .row_1{
    width: 100%;
    position: relative;
    padding-bottom: 10px;
  }
  .row_1>.cal_1{
    width: 47%;
    position: relative;
  }
  .row_1>.cal_2{
    width: 50%;
    position: absolute;
    right: 0;
    top:0
  }
  .title{
    position: relative;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e6e7eb;
    margin-bottom: 20px;
  }
  .title .more{
    position: absolute;
    right: 0;
  }
  /* 轮播图 */
  .slider{
    margin:20px 0;
    width: 320px;
    height: 300px;
    overflow: hidden;
    background-color: #666666;
    position: relative;
  }
  /* 新闻列表 */
  .news_list{
    width: 230px;
    height: 300px;
    overflow: hidden;
    min-height: 100px;
    position: absolute;
    right: 0;
    top:70px;
    font-size: 12px;
  }
  .news_list p{
    height: 30px;
    position: relative;
  }
  .news_list p>a{
    display: inline-block;
    width: 130px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #333333;
  }
  /* 通知列表 */
  .list{
    height:130px;
    overflow: hidden;
  }
  .list>p{
    height: 35px;
    position: relative;
  }
  .list p>a{
    display: inline-block;
    width: 485px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #333333;
  }
  .list li>a:before{
    content: "· ";
  }
  /* 列表 */
  .row_2 .cal{
    width: 30%;
    margin-left: 40px;
    float: left;
  }
  .listel{
    height:130px;
    overflow: hidden;
  }
  .listel>p{
    height: 35px;
    position:relative;
  }
  .listel p>a{
    display: inline-block;
    width: 245px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #333333;
  }
  .listel p>a:before{
    content: "· ";
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
