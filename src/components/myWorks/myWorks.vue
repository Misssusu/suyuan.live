<template>
  <div class="works" id="works">
      <div class="works-title">
        <h2>My Works</h2>
      </div>
    <div class="works-container">
      <div class="works-col-top">
        <div class="works-col-3">
          <a href="https://suyuan.live/drawingBoard/"><img src="@/assets/images/canvas.png" alt=""></a>
        </div>
        <div class="works-col-3">
          <a href="https://suyuan.live/blog-client-preview/index.html#/"><img src="@/assets/images/blog.png" alt=""></a>
        </div>
      </div>
      <div class="works-col-bottom">
        <div class="works-col-3">
          <a href=""><img src="@/assets/images/canvas.png" alt=""></a>
        </div>
        <div class="works-col-3">
          <a href="https://suyuan.live/blog-client-preview/index.html#/"><img src="@/assets/images/blog.png" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "myWorks"
  }
</script>
<style>
  .works {
    padding: 0 15Px;
    box-sizing: border-box;
    background: #fff;
    margin-top: 40Px;
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
    padding: 30Px 0;
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
    border-radius: 20Px;
  }


  @media (min-width: 768px){
    /*宽度大于等于768px*/
    .works-container {
      width: 750Px;
    }
    .works-col-bottom,.works-col-top {
      display: flex;
      justify-content: center;
    }
    .works-col-3 {
      width: 30%;
    }
  }

  @media (min-width: 992px) {
    .works-container {
      width: 970Px;
    }
  }

  @media (min-width: 1200px) {
    .works-container {
      width: 1170Px;
    }
  }
</style>
