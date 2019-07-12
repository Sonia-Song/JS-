<template>
  <!--
    initialInterval:时间控制
    sliders：内容
    initialSpeed：速度
  -->
  <div id="slider">
    <div class="window" @mouseover="stop" @mouseleave="play">
      <div class="container" :style="containerStyle">
          <router-link :to="{path:'/home/detail',query: { detailID: last.id,detailDate:last.publishDate,detailTitle:last.title,typeName:'新闻动态'}}"
                       tag="div" v-if="last.publishDate">
            <a target="_blank"><img :src="baseUrl+last.cover" ></a>
            <span class="img-text">{{last.title}}</span>
          </router-link>
        <router-link :to="{path:'/home/detail',query: { detailID: item.id,detailDate:item.publishDate,detailTitle:item.title,typeName:'新闻动态'}}"
                     v-for="(item,index) in sliders"
                     :key="index"
                     tag="div" >
          <a target="_blank"><img :src="baseUrl+item.cover"></a>
          <span class="img-text">{{item.title}}</span>
        </router-link>
          <router-link :to="{path:'/home/detail',query: { detailID: first.id,detailDate:first.publishDate,detailTitle:first.title,typeName:'新闻动态'}}"
                       tag="div" >
            <a target="_blank"><img :src="baseUrl+first.cover" alt=""></a>
            <span class="img-text">{{first.title}}</span>
          </router-link>
      </div>
      <ul class="direction">
        <li class="left" @click="move(320, 1, speed)">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"  /></svg>
        </li>
        <li class="right" @click="move(320, -1, speed)">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"  /></svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {
    getNewsList,
    getToken,
    getURLA
  } from '../api/index.js'
  export default {
    name: 'slider',
    props: {
      initialSpeed: {
        type: Number,
        default: 30
      },
      initialInterval: {
        type: Number,
        default: 4
      }
    },
    data () {
      return {
        baseUrl:'',
        currentIndex:1,
        distance:-320,
        transitionEnd: true,
        speed: this.initialSpeed,
        sliders:[]
      }
    },
    computed:{
      containerStyle() {
        return {
          transform:`translate3d(${this.distance}px, 0, 0)`
        }
      },
      interval() {
        return this.initialInterval * 1000
      },
      first(){
        return this.sliders[0]
      },
      last(){
        return this.sliders[this.sliders.length-1]
      }
    },
    async created(){
      let token=await getToken('5b0574c9-490a-405c-8641-2209a380e868&appSecret=18bd44e4-361c-4abb-9537-ffbfe7303e08');
      let url=await getURLA(token.appToken);
      this.baseUrl=url.page.list[0].sitePath;
      let carouselList=await getNewsList('categoryId=1&pageIndex=1&count=5&hasCover=true');
      if(carouselList.page.list!=[]){
        this.sliders=carouselList.page.list;
      }
    },
    mounted() {
      this.init()
    },
    methods:{
      init() {
        this.play()
        window.onblur = function() { this.stop() }.bind(this)
        window.onfocus = function() { this.play() }.bind(this)
      },
      move(offset, direction, speed) {
        if (!this.transitionEnd) return
        this.transitionEnd = false
        direction === -1 ? this.currentIndex += offset/320 : this.currentIndex -= offset/320
        if (this.currentIndex > 5) this.currentIndex = 1
        if (this.currentIndex < 1) this.currentIndex = 5

        const destination = this.distance + offset * direction
        this.animate(destination, direction, speed)
      },
      animate(des, direc, speed) {
        if (this.temp) {
          window.clearInterval(this.temp)
          this.temp = null
        }
        this.temp = window.setInterval(() => {
          if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
            this.distance += speed * direc
          } else {
            this.transitionEnd = true
            window.clearInterval(this.temp)
            this.distance = des
            if (des < -1600) this.distance = -320
            if (des > -320) this.distance = -1600
          }
        }, 20)
      },
      play() {
        if (this.timer) {
          window.clearInterval(this.timer)
          this.timer = null
        }
        this.timer = window.setInterval(() => {
          this.move(320, -1, this.speed)
        }, this.interval)
      },
      stop() {
        window.clearInterval(this.timer)
        this.timer = null
      }
    }
  }

</script>

<style scoped lang="scss">
  #slider{
    text-align: center;
  }
  .window{
    position:relative;
    width:320px;
    height:300px;
    margin:0 auto;
    overflow:hidden;
  }
  .container{
    display:flex;
    position:absolute;
    div{
      width: 320px;
      height: 300px;
      position: relative;
    }
  }
  .left, .right{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    width:50px;
    height:50px;
    border-radius:50%;
    cursor:pointer;
  }
  .left{
    left:3%;
    padding-left:12px;
    padding-top:10px;
  }
  .right{
    right:3%;
    padding-right:12px;
    padding-top:10px;
  }
  img{
    user-select: none;
    width: 320px;
    height: 300px;
  }
  .img-text{
    position: absolute;
    bottom:30px;
    left:0px;
    max-width: 320px;
    padding:10px 30px;
    color: #FFFFFF;
    text-align: left;
    background-color: rgba(0,0,0,0.3);
    box-sizing: border-box;
    overflow-x: hidden;
  }
</style>
