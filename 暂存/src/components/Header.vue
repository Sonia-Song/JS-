<template>
  <div class="head">
    <a href="/portal_cms_original/index.html" target="_self">
      <div class="logo"></div>
    </a>
    <div class="nav">
      <span>
        <router-link tag="span" to="/home/index">
          <a target="_blank">首页</a>
        </router-link>
      </span>
        <router-link tag="span" :to="{path:'/home/list',query: { listTypeid: item.id,listTypename:item.name }}" v-for="(item,index) in navList" v-if="item.id!=5" :key="index">
          <a target="_blank">{{item.name}}</a>
        </router-link>
      <span>
        <router-link tag="span" to="/home/about">
          <a target="_blank">关于我们</a>
        </router-link>
      </span>
      <span class="user_login" id="user_login" v-show="!isLogin">
        <a href="#" target="_blank"><span></span></a>{{loginName}}&nbsp;&nbsp;已登录
      </span>
    </div>
  </div>
</template>

<script>
import {getNewsType} from '../api/index.js'
export default {
name: "Header",
data(){
    return{
      navList:[],
    }
},
async created(){
  let result=await getNewsType('advanced=false&parentId=9');
  if(result.page.list!=[]){
    this.navList=result.page.list;
  }
},
computed:{
  loginName:function () {
    return this.$store.state.username
  },
  isLogin:function () {

    return this.$store.state.username==''
  }
},
methods:{}
}
</script>

<style scoped >
  /*头部样式*/
  .head{
    width: 1366px;
    height: 60px;
    margin: 0 auto;
  }
  #header{
    height:60px;
    width:100%;
    margin:0 auto;
    background-color: #FFFFFF;
  }

  .logo{
    float:left;
    width:350px;
    height:45px;
    margin:7.5px 0;
    background:url(../../static/images/logo.svg) no-repeat;
    box-sizing: border-box;
  }
  .nav{
    float: right;
  }
  .nav span{
    float: left;
    min-width: 100px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .user_login a{
    color:#4275f3;
    font-weight: bold;
  }
</style>
