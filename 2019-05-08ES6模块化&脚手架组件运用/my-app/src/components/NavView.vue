<template>
  <div>
    <router-link to="/banner">轮播</router-link>
    <router-link :to="'/tab/'+id">切换</router-link>
  </div>
</template>

<script>
  export default {
    name: 'NavView',
    data() {
      return {
        id:100
      }
    }
  }
</script>

<style lang="" scoped>

</style>
