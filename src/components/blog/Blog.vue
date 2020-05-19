<template>
  <div class="blog" id="blog">
    <div class="blog-title">
      <h2>Blog</h2>
    </div>
    <div class="blog-item animated" :class="showBlogAnimate? 'fadeInRight': ''" v-for="item in blogs" :key="item.id">
      <div class="blog-item-row">
        <div class="blog-item-left">
          <a :href="item.link" target="_blank" class="item-title">{{item.title}}</a>
          <p class="item-description">{{item.description}}</p>
        </div>
        <div class="blog-item-right">
          <img :src="item.img" alt="">
        </div>
      </div>
    </div>
    <p class="tip">
      <a target="_blank" href="https://www.jianshu.com/u/7a15cbb4a8f3">点击查看更多博客</a>
    </p>
  </div>
</template>
<script>
  import vueImgSrc from '../../assets/images/vue.png';
  import eventloopImgSrc from '../../assets/images/eventloop.png';
  import cssCenterImgSrc from '../../assets/images/cssCenter.png';
  import commandImgSrc from '../../assets/images/command.png';

  export default {
    name: "Blog",
    props: ['showBlogAnimate'],
    data(){
      return {
        blogs: [
          { id: 1, title : "[Vue]组件之间如何通信？", description: "组件通信可以大致分为两种情况，父子组件之间的通信和非父子组件之间的通信，下面来分别介绍 一、父子组件之间的通信 1. props (父组件通过 ...", link : "https://www.jianshu.com/p/4ebdac615ec9", img: `${vueImgSrc}`},
          { id: 2, title : "[JavaScript]之 Event Loop", description: "在讲 Event Loop 前先看一段代码，思考他的输出内容是什么 答案是： 不要提前偷看呀！ 如果你答错了，就继续往下看叭~，答对了也看看(万...", link : "https://www.jianshu.com/p/346ba0fe129b", img: `${eventloopImgSrc}`},
          { id: 3, title : "[CSS]之居中篇", description: "一、垂直居中 1.内联元素 给内联元素的上下加上相等的padding。HTML代码 CSS样式 效果图 2.块级元素中的文字垂直居中 将元素的...", link : "https://www.jianshu.com/p/8ba1a322a739", img: `${cssCenterImgSrc}`},
          { id: 4, title : "一些常用命令行", description: "cd命令 cd documents切换到documents目录下 cd ..切换到上级目录中 cd ./path*切换到当前目录下的path目录...", link : "https://www.jianshu.com/p/ac646980fa4b", img: `${commandImgSrc}`}
        ]
      }
    }
  }
</script>
<style scoped lang="css">
  .blog {
    margin: 60Px auto 0 auto;
    background: #ffffff;
    border-left: 4Px solid #a4c639;
    padding: 13Px;
    box-sizing: border-box;
    box-shadow: 0 2Px 8Px 0 rgba(50, 50, 50, 0.08);
  }
  .blog-title > h2 {
    font-size: 40Px;
    text-align: center;
    margin: 20Px 0;
  }
  .blog-item {
    padding: 12Px;
    opacity: 0;
  }
  .blog-item.animated {
    webkit-animation-duration: 1.8s;
    animation-duration: 1.8s;
  }
  .blog .blog-item:not(:last-of-type) {
    border-bottom: 1Px solid #e8e8e8;
  }
  .blog-item-row {
    display: flex;
  }
  .item-title {
    font-size: 18Px;
    font-weight: 600;
    color: #333;
  }
  .item-description {
    /*margin-top: 10Px;*/
    color: #999;
    line-height: 24Px;
  }
  .blog-item-left {
    width: 60%;
    position: relative;
  }
  .blog-item-left > a {
    position: absolute;
    top: 0;
  }
  .blog-item-left > p {
    position: absolute;
    bottom: 2Px;
    height: 30Px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
  .blog-item-right {
    flex: 1;
  }
  .blog-item-right {
    text-align: right;
  }
  .blog-item-right > img {
    width: auto;
    height: 100Px;
  }
  .tip {
    text-align: center;
    padding: 12px;
    margin-bottom: 20Px;
  }
  .tip a {
    color: #333;
  }


  @media (min-width: 768px){
    /*宽度大于等于768px*/
    .blog {
      width: 750Px;
      margin-top: 100px;
    }
    .blog-item-left > p {
      height: auto;
      white-space: initial;
      overflow: initial;
      text-overflow: initial;
    }
  }

  @media (min-width: 992px) {
    .blog {
      width: 970Px;
      margin-top: 100px;
    }
    .blog-item-left > p {
      height: auto;
      white-space: initial;
      overflow: initial;
      text-overflow: initial;
    }
  }

  @media (min-width: 1200px) {
    .blog {
      width: 1170Px;
      margin-top: 100px;
    }
    .blog-item-left > p {
      height: auto;
      white-space: initial;
      overflow: initial;
      text-overflow: initial;
    }
  }
</style>
