<template>
<div class="about">
  <section class="about_banner">
    <img src="../../static/images/nav/about_banner.png">
  </section>
  <main>
    <div class="breadcrumb ">
      <a href="#" target="_blank">关于我们</a>
    </div>
    <div class="content">
      <div class="news_title">中国（北京）国际贸易单一窗口介绍</div>
      <div class="news_info">中国（北京）国际贸易单一窗口平台（以下简称“北京单一窗口”）是由北京市商务局（北京市人民政府口岸办公室）主导，海关、边检、商务、国税、工商、外汇等10余个单位积极参与建设的公益性公共服务平台。北京单一窗口是在北京电子口岸平台基础上打造的“互联网+口岸”模式的通关物流服务平台，平台以提升北京市外贸营商环境为基本目标，以国家“单一窗口”标准版为依托，以建设空港“单一窗口”数据枢纽为建设核心，以打造北京市外贸业务运行管理平台为重点，内联市内各口岸，外联津冀及全国各口岸，让企业只需通过一个入口就可办理北京乃至津冀地区的通关物流业务。
      </div>
      <p style="margin-top:30px">中国（北京）国际贸易单一窗口服务获取、问题反馈、互动交流联系方式：</p>
      <p>服务热线：010-95198 ；010-86398038</p>
      <p>服务邮箱：bjservice@aeotrade.com</p>
    </div>
  </main>
</div>
</template>

<script>
export default {
name: "About",
data(){
    return{

    }
},
methods:{

}
}
</script>

<style scoped lang="scss">
.about_banner{
  width: 1366px;
  margin: 0 auto;
}
main{
  width: 1366px;
  height: auto;
  margin: auto;
  margin-bottom:50px;
}
.breadcrumb{
  height: 90px;
  line-height: 90px;
  border-bottom:1px solid #dcdee3;
}
a{
  color: #666666;
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
.news_title{
  width: 100%;
  height: 50px;
  font-size: 14px;
  font-weight: bold;
}
.news_info{
  line-height: 1.5;
  text-align: justify;
  text-indent:2em
}
.content p{
  padding:3px 0;
  text-indent:2em
}
</style>
