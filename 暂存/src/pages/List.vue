<template>
<div class="listPage">
  <section class="list_banner">
    <img :src="require(`../../static/images/nav/${breadImg}`)" v-if="breadImg"/>
  </section>
  <main>
    <div class="breadcrumb ">
      <a href="#" target="_blank">{{breadName}}</a>
    </div>
    <ul class="list">
        <router-link :to="{path:'/home/detail',query: { detailID: item.id,detailDate:item.publishDate,detailTitle:item.title,typeName:breadName }}" tag="li" class="clearfix" v-for="(item,index) in list" :key="index">
          <a target="_blank">
            <div class="content">
              <b>{{item.title}}</b>
            </div>
            <div class="date">
              <b>{{item.publishDate|newDate}}</b>
            </div>
          </a>
        </router-link>
    </ul>
    <pagenation
      :currentPage="currentPage"
      :size="size"
      :count="count"
      :totalPage="total" v-on:getList="getList"></pagenation>
  </main>
</div>
</template>

<script>
  import pagenation from '../components/pagenation.vue'
import {getNewsList} from '../api/index.js'
export default {
name: "List",
  components:{pagenation},
data(){
    return{
      list:[],
      currentPage:1,
      size:10,
      count:'',
      total:''
    }
},

computed:{
  breadName(){
    return this.$route.query.listTypename
  },
  breadImg(){
    let name;
    if (this.$route.query.listTypeid==1) name='news_banner.png';
    if (this.$route.query.listTypeid==2) name='notice_banner.png';
    if (this.$route.query.listTypeid==3) name='cost_banner.png';
    if (this.$route.query.listTypeid==4) name='download_banner.png';
    return name
  }
},
mounted(){
  this.requierList();
},
methods:{
//  请求
  async requierList(val=1){
    let result=await getNewsList('categoryId='+this.$route.query.listTypeid+'&pageIndex='+val+'&count='+this.size);
    if(result.page.list!=[]){
      this.currentPage=result.page.pageIndex;
      this.count=result.page.totalCount;
      this.total=result.page.totalPage;
      this.list=result.page.list;
    }
  },
  async getList(val){
    this.requierList(val)
  }
}
}
</script>

<style scoped>
  .list_banner{
    width: 1366px;
    margin:0 auto;
  }
  main {
    width: 1366px;
    height: auto;
    margin: auto;
  }

  .breadcrumb {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #dcdee3;
  }

  .breadcrumb > a {
    font-size: 20px;
    font-weight: bold;
  }

  .breadcrumb > a:hover {
    color: #3e71f7;
  }

  .list {
    margin-top: 30px;
    min-height: 400px;
  }

  .list li {
    margin: 10px 0;
    padding: 20px 40px;
    width: 100%;
    background-color: #FFFFFF;
    box-sizing: border-box;
    border:1px solid transparent;
  }

  .list li:hover {
    border: 1px solid #5584ff;
  }

  a {
    color: #666666;
  }

  a:hover {
    color: #5584ff;
  }

  div.content {
    float: left;
  }

  div.content b {
    display: block;
    font-weight: bold;
  }

  div.content p {
    font-size: 12px;
  }

  div.date {
    float: right;
    font-size: 12px;
  }

  .date > b {
    font-size: 12px;
    font-weight: normal;
  }

  .date > b:hover {
    font-weight: bold;
  }
</style>
