<template>
  <div class="index">
    <h1 @click="notif">{{msg}}</h1>
    <p>{{count}}</p>
    <p @click="updateCount({num: 123})">updateCount</p>
    <p>{{countArr}}</p>
    <p @click="updateCountAsync({num: 666, time: 1500})">updateCountAsync</p>
    <router-link to="list">tolist</router-link>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      msg: 'index in test2'
    }
  },
  computed: {
    ...mapState(['count']),
    countArr () {
      return this.getCountArr()
    }
  },
  methods: {
    ...mapMutations(['updateCount']),
    ...mapGetters(['getCountArr']),
    ...mapActions(['updateCountAsync']),
    notif () {
      this.$notify({
        content: this.msg,
        btn: '关闭'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../style/index'
</style>
