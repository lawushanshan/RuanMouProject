<template>
  <div id="app">
    <!-- 页面跳转出口 -->
    <router-view></router-view>
    <NavView></NavView>
  </div>
</template>

<script>

import tab from './components/tab'
import banner from './components/banner'
import NavView from './components/NavView'
//vue动态生成路径时无法被url-loader解析到，需要通过导入的方式
import logo from  './assets/logo.png'

export default {
  name: 'App',
  data () {
    return {
      items:[require('./assets/img/banner1.jpg'),
                    require('./assets/img/banner2.jpg'),
                    require('./assets/img/banner3.jpg'),
                    require('./assets/img/banner4.jpg'),
                    require('./assets/img/banner5.jpg'),]
    }
  },
  methods:{},
  components:{
    //testA
    //tab
    NavView
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color:blue;
}
.active{
 font-size: 20px
}
</style>
