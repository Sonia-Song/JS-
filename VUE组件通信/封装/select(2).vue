<template>
  <div>
    <el-autocomplete :id="bindId" :disabled="disabled" class="inline-input" v-model="selectData" style="width:100%;"  :trigger-on-focus="false" @select="handleSelect"
                     highlightFirstItem="true" @blur="onBlur" :placeholder="placeholder" :fetch-suggestions="querySearch">
      <template slot-scope="{ item }">
        <div class="name">{{ item.text }}</div>
      </template>
    </el-autocomplete>
  </div>
</template>
<script>
  export default {
    name: "inputList",
    props:['source','selectValue','bindId','disabled','placeholder'],
    data() {
      return {
        selectData:"",
        forwardObj:{},
        backwardObj:{}
      }
    },
    mounted(){
      //生成解析对象（正向解析和逆向解析）
      let that = this;
      this.source.forEach(item=>{
        that.forwardObj[item.code] = item.value;
        that.backwardObj[item.value] = item.code;
      });
    },
    methods: {
      querySearch(queryString, cb){
        if(queryString=='')return false;
        if(queryString==' ')queryString = '';
        queryString = queryString.trim();
        let list = this.source;
        let results = queryString ? list.filter(this.createFilter(queryString)) : list;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString){
        return (item) => {
          return (item.text.search(queryString) != -1);
        };
      },
      handleSelect(item){
        this.$emit('update:selectValue',item.code);
      },
      onBlur(){
        this.$emit('blur');
        if(this.selectData==""){
          this.$emit('update:selectValue',"");
        }
      },
    },
    watch:{
      'selectValue':function (newVal,oldVal) {
        if(this.forwardObj[newVal]==undefined){
          this.selectData = newVal;
        }else{
          this.selectData = this.forwardObj[newVal];
        }
      },
      'source':function (newVal,oldVal) {
        let that = this;
        newVal.forEach(item=>{
          that.forwardObj[item.code] = item.value;
          that.backwardObj[item.value] = item.code;
        });
        //下拉选项更新后，同时更新输入框中的内容
        this.selectData = this.forwardObj[this.selectValue];
      },
      'selectData':function (newVal,oldVal) {
        if(newVal==" "){
          this.$emit('update:selectValue'," ");
        }
      },
    }
  }
</script>

<style lang="scss">


</style>
