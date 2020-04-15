<template>
  <div class="works" id="works">
      <div class="works-title">
        <h2>My Works</h2>
      </div>
    <div class="works-container">
      <div class="works-col-top animated" :class="showWorksAnimate? 'fadeIn': ''">
        <div class="works-col-3">
          <a href="https://suyuan.live/drawingBoard/"><img src="@/assets/images/canvas.png" alt=""></a>
        </div>
        <div class="works-col-3">
          <a href="https://suyuan.live/blog-client-preview/index.html#/"><img src="@/assets/images/canvas.png" alt=""></a>
        </div>
      </div>
      <div class="works-col-bottom animated" :class="showWorksAnimate? 'fadeIn': ''">
        <div class="works-col-3">
          <a href=""><img src="@/assets/images/canvas.png" alt=""></a>
        </div>
        <div class="works-col-3">
          <a href="https://suyuan.live/blog-client-preview/index.html#/"><img src="@/assets/images/canvas.png" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "myWorks",
    props: ['showWorksAnimate']
  }
</script>
<style scoped>
  .works {
    box-sizing: border-box;
    /*background: #fff;*/
    margin-top: 60Px;
    /*box-shadow: 0 0 8Px 0 rgba(50, 50, 50, 0.08);*/
    padding: 40Px 20Px 40Px 20Px;
  }
  .works-container {
    width: 100%;
  }
  .works-col-3 {
    padding: 0 15Px;
    margin-bottom: 20Px;
  }
  .works-title {
    margin-bottom: 30Px;
    /*padding: 30Px 0;*/
  }
  .works-title > h2 {
    font-size: 40Px;
    text-align: center;
    margin-top: 30Px;
  }
  .works-col-3 a {
    display: block;
  }
  .works-col-3 a img {
    width: 100%;
    height: auto;
    border-radius: 10Px;
  }
  .works-col-top.animated, .works-col-bottom.animated {
    webkit-animation-duration: 2s;
    animation-duration: 2s;
  }


  @media (min-width: 768px){
    /*宽度大于等于768px*/
    .works {
      margin: 80Px auto 0 auto;
      width: 750Px;
    }
    .works-col-bottom,.works-col-top {
      display: flex;
      justify-content: center;
    }
    .works-col-3 {
      width: 40%;
    }
    .works-col-3:not(:last-child) {
      margin-right: 50Px;
    }
  }

  @media (min-width: 992px) {
    .works {
      width: 970Px;
    }
    .works-col-3 {
      width: 30%;
    }
  }

  @media (min-width: 1200px) {
    .works {
      width: 1170Px;
    }
    .works-col-3 {
      width: 30%;
    }
  }
</style>
