<template>
  <div>
    <h1 @click="$router.back(-1)">{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      msg: 'detail in test2'
    }
  }
}
</script>

<style>

</style>
