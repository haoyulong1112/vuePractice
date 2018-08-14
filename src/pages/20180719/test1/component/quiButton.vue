<template>
<!-- <el-row>
  <el-button @click="btnClickEvent" type="default">
    <slot name="icon"></slot>
  {{msg}}
</el-button>
</el-row> -->
<el-button @click="btnClickEvent">{{msg}}</el-button>
<!-- <button @click="btnClickEvent">{{msg}}</button> -->
</template>
<script>
export default {
  props: {
    msg: {
      default: '下载'
    }
  },
  methods:{
    btnClickEvent:function(){
      alert("我是一个按钮！");
      this.$emit('btnClickEvent');//关键代码父组件触发自定义事件
    }
  }
}
</script>
<style scoped>/*
    slot{
        width: 15px;
        height: 15px;
    }*/
    button{
      /*float: right;*/
    }
</style>
