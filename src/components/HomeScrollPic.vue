<template>
  <div class="scrollPic">
    <swiper :options="swiperOption" ref="mySwiper" >
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
        <!-- Optional controls -->
        <!-- 分页器 -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- 向左滚动按钮 -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <!-- 向右滚动按钮 -->
        <div class="swiper-button-next" slot="button-next"></div>
        <!-- 滚动条 -->
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper,swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
    name: 'HomeScrollPic',
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          loop:false,//循环播放
          pagination:{//分页器设置，包括样式，单击、气泡是否变化等
            el:'.swiper-pagination',
            type:'bullets',//类型-小圆点
            clickable:true,//是否可以点击
            dynamicBullets:true,
          },
        speed:1000,//滑动一张的时间
        autoplay:{
            delay:2000,//单独停留时间
            disableOnInteraction:false,//用户操作时是否禁止自动轮播
        },
        effect:'slide',
        navigation:{
            nextEl:'.swiper-button-next',//设置向左右的按钮
            prevEl:'.swiper-button-prev',
        },
        scrollbar:{//设置滚动条

        el:'.swiper-scrollbar',
        draggable:true,
        hide:true,
        },

        }
      };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false) //开始时1s内移到第三张图片
        // this.swiper.scrollbar.el.style.backgroundColor = 'red';
    },
    components:{
        swiper,
        swiperSlide,
    },
  }
</script>

<style>
    .scrollPic{
        box-shadow: 0 10px 5px grey;
    }
    .scrollPic .swiper-container {
        width: 800px;
        height: 300px;
    }

    .scrollPic .swiper-container .swiper-slide{
        /* width: 500px;
        height: 500px; */
        background-color: aquamarine;
        text-align: center;

    }
</style>