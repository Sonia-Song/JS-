<template>
<div class="myHeader" id="myHeader">
  <canvas id="bgc"></canvas>
  <el-row>
    <el-col :span="6">
      <div style="background-color: yellow">1</div>
    </el-col>
    <el-col :span="12">
      <div class="chart-title">
        <span>大兴国际机场空运物流监控平台</span>
      </div>
    </el-col>
    <el-col :span="6">
      <div style="background-color: pink">3</div>
    </el-col>
  </el-row>
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

    ctx.fillStyle='red';
    ctx.strokeStyle='yellow';
    ctx.lineWidth=2
    ctx.lineCap='square';
    ctx.beginPath();
    ctx.moveTo(xw*0.24,xh*0.35);
    ctx.lineTo(xw*0.265,xh*0.95);
    ctx.stroke()
  }
},
  watch:{
    xwidth(){
      this.drawBgc();
    },
    xheight(){
      this.drawBgc();
    }
  }

}
</script>

<style scoped lang="scss">
  .chart-title{
    height: inherit;
    line-height: 4rem;
    span{
      font-size: 3.2rem;
      font-weight: bold;
      letter-spacing: 0.3rem;
    }
  }
  #bgc{
    /*position: absolute;*/
  }

</style>
