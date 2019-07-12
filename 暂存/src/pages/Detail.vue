<template>
  <main>
    <div class="breadcrumb">
      <a>新闻动态</a>
    </div>
    <div>
      <nav class="bread">
        <a>资讯中心&nbsp;&nbsp;</a>>
        <a>&nbsp;{{typeName}}&nbsp;&nbsp;</a>>
        <a>&nbsp;{{title}}</a>
      </nav>
    </div>
    <div class="content">
      <a href="javascript:history.go(-1);" class="return">← 返回</a>
      <div class="news_title">{{title}}</div>
      <div class="news_date">{{detailDate|newYear}}&nbsp;&nbsp;
        <b>{{detailDate|newMonth}}</b>
      </div>
      <div class="news_source">
        数据来源：{{source}}
      </div>
      <div class="news_info">
        <div v-html="context"></div>
      <div class="zebra_crossing"></div>
      </div>
    </div>
  </main>
</template>

<script>
import Vue from 'vue'
import {getNewsDetail,getToken} from '../api/index.js'
Vue.filter('newYear',function (data) {
  let time=new Date(parseInt(data));
  console.log(time)
  var y = time.getFullYear();
  var M = time.getMonth() + 1;
  var d = time.getDate();
  return y
});
Vue.filter('newMonth',function (data) {
  let time=new Date(parseInt(data));
  var y = time.getFullYear();
  var M = time.getMonth() + 1;
  var d = time.getDate();
  return M+'-'+d
});
export default {
name: "Detail",
data(){
    return{
      context:'',//文章内容
      source:'',
    }
},
computed:{
  detailDate(){
    return this.$route.query.detailDate
  },
  title(){
    return this.$route.query.detailTitle
  },
  typeName(){
    return this.$route.query.typeName
  }
},
async created(){
  let token=await getToken('5b0574c9-490a-405c-8641-2209a380e868&appSecret=18bd44e4-361c-4abb-9537-ffbfe7303e08');
  let result=await getNewsDetail('paramters='+this.$route.query.detailID+'&appToken='+token.appToken);
  if(result.text){
    this.context=result.text;
    this.source=result.source;
  }
},
methods:{

}
}
</script>

<style scoped lang="scss">
  main{
    width: 1366px;
    height: auto;
    margin: auto;
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
    position: relative;
    background-color: #FFFFFF;
    margin:50px 0;
    padding:60px 80px;
    box-sizing: border-box;
    -webkit-box-shadow: 0 6px 6px rgba(85,132,255,.6);
    -moz-box-shadow: 0 6px 6px rgba(85,132,255,.6);
    box-shadow: 0 6px 6px rgba(85,132,255,.06);
  }
  .news_title{
    width: 100%;
    height: 50px;
    font-size: 24px;
    font-weight: bold;
  }
  .news_date{
    width: 100%;
    height: 40px;
    font-size: 12px;
  }
  .news_date>b{
    font-size: 16px;
    font-weight: normal;
  }
  .news_info{
    margin-top:35px;
    letter-spacing: 2px;
    font-size: 12px;
    line-height: 1.5;
    text-align: justify;
  }
  .news_info img{
    max-width: 1030px;
    display: block;
    margin:20px 0;
  }
  .zebra_crossing{
    margin-top:40px;
    width: 100%;
    height: 15px;
    background: url(../../static/images/detail/crossing.png) no-repeat;
  }
  .return{
    position: absolute;
    top:0;
    left: 0;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #dcdee3;
    color: #FFFFFF;
  }
  .return:hover{
    color: #FFFFFF;
    background-color: #3e71f7;
  }

  .bread {
    margin-top:15px;
    float: right;
  }

  .bread>a {
    color: #737373;
  }

  .bread>a:hover {
    color: #4275f3;
  }
</style>
