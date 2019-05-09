<template>
  <div class="index-content" id="my">
      <div class="banner">
          <img :key="index" v-for="(item,index) in items" :src="item" v-show="index==n"/>
          <div class="banner-circle">
              <ul>
                  <li :key="index" v-for="(item,index) in items" :class="{'selected':index==n}" @click="curShow(index)"></li>
              </ul>
          </div>
      </div>
      <router-link to='/banner/bannerDetail'>子路由</router-link>
      <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name:'banner',
    //props: ['items'],
    data() {
     return {
      msg: 'Welcome to Your Vue.js App',
      n:0,
      items:[
        require('../assets/img/banner1.jpg'),
        require('../assets/img/banner2.jpg'),
        require('../assets/img/banner3.jpg'),
        require('../assets/img/banner4.jpg'),
        require('../assets/img/banner5.jpg'),
      ]
    }
    },
    methods:{
        play:function(){
            setInterval(this.autoPlay,2000)
        },
        autoPlay:function(){
            this.n++;
            if(this.n == this.items.length){
                this.n = 0;
            }
        },
        curShow:function(index){
            this.n = index;
        }
    },
    mounted:function(){
        this.play();
    }
  }
</script>

<style lang="" scoped>
  /*index*/
.index-content .banner {
    position: relative;
}
.index-content .banner .banner-circle {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    color: #fff;
}
.index-content .banner .banner-circle li{
    display:inline-block;
    background: rgba(0,0,0,.3);
    border-radius: 50%;
    padding:5px;
    margin:2px;
}
.index-content .banner .banner-circle ul {
    text-align: center;
}
.index-content .banner .banner-circle .selected {
    background: rgba(0,0,0,.8);
}
.index-content .banner img {
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>
