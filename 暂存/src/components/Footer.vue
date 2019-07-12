<template>
  <ul class="box clearfix">
    <li class="qs">
      <img src="../../static/images/header_footer/QS.jpg">
    </li>
    <li class="gz">
      <p>中国(北京)国际贸易单一窗口公众号</p>
      <p>欢迎关注</p>
    </li>
    <li class="fw">
      <p>中国(北京)国际贸易单一窗口</p>
      <p>China (Beijing) International Freight single window</p>
      <p>服务热线：010-95198 / 86398038</p>
      <p>服务邮箱：bjservice@aeotrade.com</p>
      <p>版权所有：北京市商务局（北京市人民政府口岸办公室）</p>
      <p>京ICP备11033256号-6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;京公安备案：11010102002547号</p>
    </li>
  </ul>
</template>

<script>
export default {
name: "Footer",
data(){
    return{

    }
},
methods:{

}
}
</script>

<style scoped >
  /* 底部样式 */
  .box{
    width :1200px;
    height :140px;
    margin :auto;
    color :#ffffff;
  }
  .box .qs{
    float :left;
    padding-right :50px;
  }
  .box .gz{
    float :left;
    width :490px;
    padding :40px;
    font-size :19px;
    font-weight :500;
    box-sizing :border-box;
  }
  .box .gz p{
    margin-top:10px
  }
  .box .fw{
    float: right;
  }
  .box .fw p{
    margin-top : 10px;
  }

</style>
