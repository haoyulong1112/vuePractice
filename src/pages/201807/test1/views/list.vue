<template>
  <div>
    <h1 @click="$router.back(-1)">{{msg}}</h1>
    <router-link to="detail">todetail</router-link>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      msg: 'list in test1'
    }
  }
}
</script>

<style>

</style>
