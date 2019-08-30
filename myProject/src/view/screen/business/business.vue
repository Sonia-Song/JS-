<template>
  <div>
    <!-- 上 -->
    <el-row>
      <!-- 当月进口货物 -->
      <el-col :span="11" :offset="1">
        <mounth-goods :vheight="vheight/3*2"></mounth-goods>
      </el-col>
      <!-- 当月进口车次 -->
      <el-col :span="11">
        <mounth-lading :vheight="vheight/3*2"></mounth-lading>
      </el-col>
      <el-col :offset="1"></el-col>
    </el-row>
    <!-- 下 -->
    <el-row>
      <!-- 当月退运票数 -->
      <el-col :span="11" :offset="1">
        <mounth-return :vheight="vheight/3-12"></mounth-return>
      </el-col>
      <!-- 当月查验票数 -->
      <el-col :span="11">
        <mounth-check :vheight="vheight/3-12"></mounth-check>
      </el-col>
      <el-col :offset="1"></el-col>
    </el-row>
  </div>
</template>

<script>
  import MounthGoods from '@/view/screen/business/goods/MounthGoods.vue'
  import MounthLading from '@/view/screen/business/lading/MounthLading.vue'
  import MounthReturn from '@/view/screen/business/return/MounthReturn.vue'
  import MounthCheck from '@/view/screen/business/check/MounthCheck.vue'

  export default {
    name: "business",
    components: {
      MounthGoods,
      MounthLading,
      MounthReturn,
      MounthCheck
    },
    props: ['vheight'],
    data() {
      return {
      }
    },
    methods: {}
  }
</script>

<style scoped lang="scss">

</style>
