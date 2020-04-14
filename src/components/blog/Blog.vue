<template>
  <div class="blog" id="blog">
    <div class="blog-item" v-for="item in blogs" :key="item.id">
      <div class="blog-item-row">
        <div class="blog-item-left">
          <a href="" class="item-title">{{item.title}}</a>
          <p class="item-description">{{item.description}}</p>
        </div>
        <div class="blog-item-right">
          <img :src="item.img" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import vueImgSrc from '../../assets/images/vue.png';
  export default {
    name: "Blog",
    data(){
      return {
        blogs: [
          { id: 1, title : "[Vue]组件之间如何通信？", description: "组件通信可以大致分为两种情况，父子组件之间的通信和非父子组件之间的通信，下面来分别介绍 一、父子组件之间的通信 1. props (父组件通过 ...", link : "", img: `${vueImgSrc}`},
          { id: 2, title : "[Vue]组件之间如何通信？", description: "组件通信可以大致分为两种情况，父子组件之间的通信和非父子组件之间的通信，下面来分别介绍 一、父子组件之间的通信 1. props (父组件通过 ...", link : "", img: `${vueImgSrc}`},
          { id: 3, title : "[Vue]组件之间如何通信？", description: "组件通信可以大致分为两种情况，父子组件之间的通信和非父子组件之间的通信，下面来分别介绍 一、父子组件之间的通信 1. props (父组件通过 ...", link : "", img: `${vueImgSrc}`},
          { id: 4, title : "[Vue]组件之间如何通信？", description: "组件通信可以大致分为两种情况，父子组件之间的通信和非父子组件之间的通信，下面来分别介绍 一、父子组件之间的通信 1. props (父组件通过 ...", link : "", img: `${vueImgSrc}`}
        ]
      }
    }
  }
</script>
<style scoped>
  .blog {
    margin: 60Px auto 0 auto;
    /*background: #ffffff;*/
    padding: 13Px;
    box-sizing: border-box;
  }
  .blog-item {
    padding: 12Px;
  }
  .blog-item:not(:last-child) {
    border-bottom: 1Px solid #e8e8e8;
  }
  .blog-item-row {
    display: flex;
  }
  .item-title {
    font-size: 18Px;
    font-weight: 700;
    color: #333;
  }
  .item-description {
    margin-top: 10Px;
  }
  .blog-item-left {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  @media (min-width: 768px){
    /*宽度大于等于768px*/
    .blog {
      width: 750Px;
    }
  }

  @media (min-width: 992px) {
    .blog {
      width: 970Px;
    }
  }

  @media (min-width: 1200px) {
    .blog {
      width: 1170Px;
    }
  }
</style>
