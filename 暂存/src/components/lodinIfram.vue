<template>
  <div style="width: 320px;height: 300px" >
    <div id="div_iframe1" hidden="hidden">
      <iframe id="loginIframe1"
              style="width: 321px; height:300px; border: none;"
              scrolling="no"
              :src="iframUrl"
      ></iframe>
    </div>
    <div id="div_iframe2" hidden="hidden">
      <iframe id="loginIframe2" style="width: 321px; height:300px; border: none;" scrolling="no"
              src=""></iframe>
    </div>
    <div id="div_iframe3" hidden="hidden">
      <iframe id="loginIframe3" style="width: 321px; height:300px; border: none;" scrolling="no"
              src=""></iframe>
    </div>
  </div>
</template>

<script>
  import {
    getLoginUrl_first,
    getLonin_first,
    getLoginUrl_second,
    entInfo
  } from '../api/index'
export default {
name: "lodinIfram",
data(){
    return{
      iframUrl:'',//登录框地址
      username_login_linkname_b64:"",
      card_login_linkname_b64:"",
      card_url:"",
      delayAlertSetupControlFlag:false,
    }
},
async mounted(){
  let result=await entInfo();
  if(result.code=='0000'){
    sessionStorage.setItem('user',JSON.stringify(result.data));
    this.store.state.username=JSON.parse(sessionStorage.getItem('user')).userName
  }else{
    this.getSecond();
    this.show1();
  }
},
methods:{
  //  获取登录框地址第一步
  async getFirst(){
    let url=await getLoginUrl_first();
    return new Promise((resolve,reject)=>{
       getLonin_first(url)
         .then(function (xml) {
           let result=xml;
           resolve(result);
         }).catch(function (err) {
           console.log(err)
       })
    })
  },
  //  获取登录框地址第二步
  async getSecond(){
    let that=this;
    var param=this.getFirst();
    getLoginUrl_second(param)
      .then(function (res) {
        that.iframUrl=res;
        console.log(that.iframUrl)
      }).catch(function (err) {
      console.log(err);
    })
  },
/* 登录 */
  show1(){
    document.getElementById("div_iframe1").hidden="";
    document.getElementById("div_iframe2").hidden="hidden";
    try{
      document.getElementById("div_iframe3").hidden="hidden";
    }catch(e){}
  },

  show2(){
    document.getElementById("div_iframe1").hidden="hidden";
    document.getElementById("div_iframe2").hidden="";
    try{
      document.getElementById("div_iframe3").hidden="hidden";
    }catch(e){}
    checkSetupControl();//检查是否要安装客户端控件
  },

  show3(){
    document.getElementById("div_iframe1").hidden="hidden";
    document.getElementById("div_iframe2").hidden="hidden";
    try{
      document.getElementById("div_iframe3").hidden="";
    }catch(e){}
  },

  async setCard(url) {
    let result=await getAjax('/pub/login/swcardloginurl',url,'post',{"X-Requested-With":"XMLHttpRequest","Content-type":"text/plain"});
    card_url=result;
    preLoadIframe();
  },
  setUsernameLoginLinknameB64(name){
    username_login_linkname_b64=name;
  },
  setCardLoginLinknameB64(name){
    card_login_linkname_b64=name;
  },
  preLoadIframe() {
    document.getElementById("loginIframe2").src=card_url;
    var ajax=new XMLHttpRequest();
    ajax.open('post',BASEURL+'/pub/login/localloginurl');
    ajax.setRequestHeader("X-Requested-With","XMLHttpRequest");
    ajax.setRequestHeader("Content-type","application/json");
    var data={"userLinkName":username_login_linkname_b64,"cardLinkName":card_login_linkname_b64};
    ajax.send(JSON.stringify(data));
    ajax.onreadystatechange=function () {
      if(ajax.readyState==4 && ajax.status==200){
        document.getElementById("loginIframe3").src=ajax.responseText
      }
    }
  },
  delayAlertSetupControlFunc(){
    delayAlertSetupControlFlag=true;
    if (document.getElementById("div_iframe2").hidden==""){
      checkSetupControl();
    }
  },
  checkSetupControl(){
    if (delayAlertSetupControlFlag
      && confirm("请下载安装IC卡/Key客户端控件，否则，将无法使用IC卡/Key")){
      window.open(SwVersion.getIkeyDownloadUrl(),'_blank');
    }
  }
}
}
</script>

<style scoped lang="scss">

</style>
