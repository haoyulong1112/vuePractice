<template>
    <div id="pageQuiButton">
        <qui-btn msg="确定" v-on:btnClickEvent="doSth1"><img src="../../../../assets/images/201807/logo.png" slot="icon"></qui-btn>
    </div>
</template>
<script>
import quiBtn from '../component/quiButton.vue'
export default {
  name: 'pageQuiButton',
  components: {
    'qui-btn': quiBtn
  },
  methods:{
      doSth1:function(){
          alert('111');
      },
      doSth2:function(){
          alert('222');
      }
  }
}
</script>
<style scoped>
  @import './css/index.css'
</style>

