<template>
  <!--
    传入参数：当前页（currentPage）总页（totalPage） 总条（totalCount）
  -->
  <div class="Page">
    <span>共 <b>{{totalPage}}</b>页</span><span><b>{{count}}</b>条</span><span>当前第<b>{{currentPage}}</b>页</span>
    <a href="javascript:void(0);" @click="setFirstPage">首页</a>
    <a href="javascript:void(0);" @click="prePage" class="Num">上一页</a>
    <a href="javascript:void(0);" @click="nextPage" class="Num">下一页</a>
    <a href="javascript:void(0);" @click="setLastPage">尾页</a>
  </div>
</template>

<script>
export default {
name: "pagenation",
props:['currentPage','totalPage','count'],
data(){
    return{
      current:this.currentPage
    }
},
methods:{
  setFirstPage(){
    this.current=1;
    this.$emit('getList',this.current)
  },
  setLastPage(){
    this.$emit('getList',this.totalPage)
  },
  prePage(){
    if(this.current<=1){
      return
    }else{
      this.current--
      this.$emit('getList',this.current)
    }
  },
  nextPage(){
    if(this.current>=this.total){
      return
    }else{
      this.current++
      this.$emit('getList',this.current)
    }
  }
}
}
</script>

<style scoped lang="scss">
  /*分页*/
  .Page {
    margin: 50px 0;
    text-align: right;
    padding-right: 10px;
  }

  .Page span {
    min-width: 32px;
    height: 30px;
    box-sizing: border-box;
    font-size: 12px;
    letter-spacing: 2px;
  }

  .Page b {
    letter-spacing: 1px;
    color: #3e71f7;
  }

  .Page a {
    cursor: pointer;
    width: auto;
    height: 30px;
    padding: 3px 5px;
    box-sizing: border-box;
    color: #FFFFFF;
    background-color: #3e71f7;
    margin: 0 3px;
    border-radius: 2px;
  }

  .Page a:hover {
    color: #333333;
    background-color: #FFFFFF;
  }
</style>
