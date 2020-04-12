<template>
  <div class="works" id="works">
      <div class="works-title">
        <h2>My Works</h2>
      </div>
    <div class="works-container">
      <div class="works-col-3">
        <a href=""><img src="@/assets/images/blog.png" alt=""></a>
      </div>
      <div class="works-col-3">
        <a href=""><img src="" alt=""></a>
      </div>
      <div class="works-col-3">
        <a href=""><img src="" alt=""></a>
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
    padding: 0 15px;
    box-sizing: border-box;
  }
  .works-container {
    width: 100%;
  }
  .works-title {
    padding: 0 15Px;
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
  }

  /*@media (min-width: 992px) {*/
  /*  .works-col-3 {*/
  /*    width: 33.33%;*/
  /*  }*/
  /*}*/
</style>
