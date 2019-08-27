<template>
<div class="myHeader" id="myHeader">
  <canvas id="bgc"></canvas>
  <div class="header-title">
    <el-row>
      <el-col :span="3">
        <div class="return">
          <a href="#">返回<svg t="1566809298183" class="icon" viewBox="-150 0 1324 200" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1694" width="20" height="20" fill="#00D8FF"><path d="M492.956783 64.020082 63.866075 377.917212l429.090708 313.895083L492.956783 499.977175c0 0 55.66888-0.042979 146.785088-0.042979 250.710019 0 319.671647 203.765847 319.671647 203.765847s-1.935072-447.781396-319.783187-447.781396c-66.323545 0-146.673547-0.042979-146.673547-0.042979L492.956783 64.020082z" p-id="1695"></path></svg></a>
        </div>
      </el-col>
      <el-col :span="19">
        <div class="chart-title">
          <!--<span>大兴国际机场空运物流监控平台</span>-->
          <span>国籍国籍国籍国籍国籍国籍国籍</span>
        </div>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</div>
</template>

<script>
export default {
name: "Header",
props:['xwidth','xheight'],
data(){
    return{
    }
},
mounted(){
  this.drawBgc();
  this.$nextTick(function () {
    this.drawBgc();
  })
},
methods:{
  drawBgc(){
    let xw=parseInt(this.xwidth);
    let xh=parseInt(this.xheight);
    let c=document.getElementById('bgc');
    let ctx=c.getContext('2d');
    c.width=this.xwidth;
    c.height=this.xheight;
    let radial=ctx.createLinearGradient(xw*0.32,0,xw*0.735,0);
    radial.addColorStop(0,'#215AFF');
    radial.addColorStop(0.5,'#03FFF7');
    radial.addColorStop(1,'#215AFF');
    let radial2=ctx.createLinearGradient(0,0,xw,0);
    radial2.addColorStop(0,'#215AFF');
    radial2.addColorStop(0.5,'#00D8FF');
    radial2.addColorStop(1,'#215AFF');

    ctx.strokeStyle='#215AFF';
    ctx.beginPath();
    ctx.moveTo(0,xh*0.13);
    ctx.lineTo(xw*0.25,xh*0.13);
    ctx.lineTo(xw*0.258,xh*0.4);
    ctx.lineTo(xw*0.29,xh*0.4);
    ctx.lineTo(xw*0.32,xh);
    ctx.lineTo(xw*0.735,xh);
    ctx.lineTo(xw*0.765,xh*0.4);
    ctx.lineTo(xw*0.797,xh*0.4);
    ctx.lineTo(xw*0.805,xh*0.13);
    ctx.lineTo(xw,xh*0.13);
    ctx.stroke();

    ctx.strokeStyle=radial;
    ctx.beginPath();
    ctx.moveTo(xw*0.32,xh);
    ctx.lineTo(xw*0.735,xh);
    ctx.moveTo(xw*0.32,xh);
    ctx.lineTo(xw*0.735,xh);
    ctx.stroke();

    ctx.strokeStyle='rgba('+33+','+90+','+255+','+0.5+')';
    ctx.beginPath();
    ctx.moveTo(xw*0.254,xh*0.25);
    ctx.lineTo(xw*0.294,xh*0.25);
    ctx.lineTo(xw*0.332,xh);

    ctx.moveTo(xw*0.725,xh);
    ctx.lineTo(xw*0.761,xh*0.25);
    ctx.lineTo(xw*0.802,xh*0.25);

    ctx.moveTo(xw*0.269,xh*0.45);
    ctx.lineTo(xw*0.293,xh*0.95);
    ctx.lineTo(xw*0.313,xh*0.95);

    ctx.moveTo(xw*0.742,xh*0.95);
    ctx.lineTo(xw*0.763,xh*0.95);
    ctx.lineTo(xw*0.787,xh*0.45);

    ctx.moveTo(xw*0.265,xh*0.45);
    ctx.lineTo(xw*0.289,xh*0.95);

    ctx.moveTo(xw*0.261,xh*0.45);
    ctx.lineTo(xw*0.285,xh*0.95);

    ctx.moveTo(xw*0.767,xh*0.95);
    ctx.lineTo(xw*0.791,xh*0.45);

    ctx.moveTo(xw*0.771,xh*0.95);
    ctx.lineTo(xw*0.795,xh*0.45);
    ctx.stroke();

    ctx.fillStyle='rgba('+33+','+90+','+255+','+0.3+')';
    ctx.strokeStyle='rgba('+33+','+90+','+255+','+0.1+')';
    ctx.beginPath();
    ctx.moveTo(xw*0.275,xh*0.5);
    ctx.lineTo(xw*0.28,xh*0.5);
    ctx.lineTo(xw*0.297,xh*0.85);
    ctx.lineTo(xw*0.292,xh*0.85);
    ctx.closePath();

    ctx.moveTo(xw*0.285,xh*0.5);
    ctx.lineTo(xw*0.29,xh*0.5);
    ctx.lineTo(xw*0.307,xh*0.85);
    ctx.lineTo(xw*0.302,xh*0.85);
    ctx.closePath();

    ctx.moveTo(xw*0.763,xh*0.85);
    ctx.lineTo(xw*0.78,xh*0.5);
    ctx.lineTo(xw*0.775,xh*0.5);
    ctx.lineTo(xw*0.758,xh*0.85);
    ctx.closePath();

    ctx.moveTo(xw*0.753,xh*0.85);
    ctx.lineTo(xw*0.77,xh*0.5);
    ctx.lineTo(xw*0.765,xh*0.5);
    ctx.lineTo(xw*0.748,xh*0.85);
    ctx.closePath();

    ctx.stroke();
    ctx.fill();

    ctx.fillStyle=radial3;
    ctx.lineWidth=2;
    ctx.lineCap='square';
    ctx.beginPath();
    for(let i=0.005;i<0.3;i=i+0.005){
      let x1=0.251-i;
      let x2=0.283-i;
      ctx.moveTo(xw*x1,xh*0.28);
      ctx.lineTo(xw*x2,xh*0.95);

    }
    for(let j=0.005;j<0.3;j=j+0.005){
      let x1=0.805+j;
      let x2=0.774+j;
      ctx.moveTo(xw*x1,xh*0.28);
      ctx.lineTo(xw*x2,xh*0.95);

    }
    ctx.stroke();

    let radial3=ctx.createLinearGradient(0,0,xw*0.805,0);
    radial3.addColorStop(0,'rgba(33,90,255,.1)');
    radial3.addColorStop(0.5,'rgba(0,216,255,.1)');
    radial3.addColorStop(1,'rgba(0,216,255,.2)');
    let radial4=ctx.createLinearGradient(xw*0.805,0,xw,0);
    radial4.addColorStop(0,'rgba(0,216,255,.1)');
    radial4.addColorStop(0.5,'rgba(33,90,255,.1)');
    radial4.addColorStop(1,'rgba(33,90,255,.1)');
    ctx.fillStyle=radial3;
    ctx.strokeStyle='yellow';
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(xw*0.251,xh*0.4);
    ctx.lineTo(xw*0.270,xh*0.8);
    ctx.lineTo(0,xh*0.8);
    ctx.lineTo(0,xh*0.4);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle=radial4;
    ctx.beginPath();
    ctx.moveTo(xw*0.805,xh*0.4);
    ctx.lineTo(xw*0.787,xh*0.8);
    ctx.lineTo(xw,xh*0.8);
    ctx.lineTo(xw,xh*0.4);
    ctx.closePath();
    ctx.fill();
  }
},
  watch:{
    xwidth(newVal,oldVal){
      if(newVal){
        this.drawBgc();
      }

    },
    xheight(newVal,oldVal){
      if(newVal){
        this.drawBgc();
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .chart-title{
    height: inherit;
    line-height: 4rem;
    span{
      display: block;
      text-align: center;
      font-size: 3.8rem;
      font-weight: bold;
      letter-spacing: 0.3rem;
      color:#7BE6F9;
      background-image:-webkit-linear-gradient(bottom,#549EFF,#7BE6F9);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }
  }
  .myHeader{
    position: relative;
  }
.header-title{
  width: 100%;
  position: absolute;
  top:0;
  .return{
    display: block;
    height: 3rem;
    line-height: 6rem;
    a{
      color: #00D8FF;
      font-weight: bold;
    }
  }
}
</style>
