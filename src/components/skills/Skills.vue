<template>
  <div class="skills" id="skills">
    <div class="skills-left">
      <h2>Personal Skills</h2>
      <p>PC端：熟练使用HTML/CSS技术，精通javascript/jquery编程，能够熟练使用angularjs等前端MVC框架进行模块开发。</p>
      <p>移动端：熟练使用HBuilder、touch.js、swiper、jquery.fullPage.js等移动框架进行移动页面的开发。了解3D效果和H5游戏的开发。</p>
    </div>
    <div class="skills-right">

    </div>
  </div>
</template>
<script>
  export default {
    name: 'skills'
  }
</script>
<style lang="scss">
  .skills {
    width: 95%;
    margin: 0 auto;
    background: #ffffff;
    -webkit-box-shadow: 0 0 8px 0 rgba(50, 50, 50, 0.08);
    box-shadow: 0 0 8px 0 rgba(50, 50, 50, 0.08);
    border-left: 4px solid #a4c639;
    padding: 40px 20px 40px 20px;
    .skills-left {
      width: 50%;
      padding: 0 15px;
      h2 {
        font-size: 40px;
        padding-bottom: 30px;
        font-weight: bold;
      }
      p {
        margin: 0 0 10px;
      }
    }
    .skills-right {
      width: 50%;
    }
  }
</style>
