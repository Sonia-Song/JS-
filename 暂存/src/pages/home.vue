<template>
  <div class="home">
    <!-- 头部 -->
    <header id="header" class="clearfix">
      <Header></Header>
    </header>
    <!-- 内容区 -->
    <div>
      <router-view></router-view>
    </div>
    <!-- 底部 footer -->
    <div class="footer" id="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
export default {
name: "home",
  components:{
    Header,
    Footer
  },
data(){
    return{

    }
},
methods:{

}
}
</script>

<style scoped >
  .footer{
    height :232px;
    width :100%;
    padding :45px;
    background-color :#323232;
    box-sizing :border-box;
    overflow:hidden;
  }
</style>
