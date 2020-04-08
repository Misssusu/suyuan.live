<template>
  <div class="animated skills" :class="showSkillsAnimate? 'fadeInDown': ''" id="skills">
    <div class="skills-left">
      <h2>Personal Skills</h2>
      <p>PC端：熟练使用HTML/CSS技术，精通javascript/jquery编程，能够熟练使用angularjs等前端MVC框架进行模块开发。</p>
      <p>移动端：熟练使用HBuilder、touch.js、swiper、jquery.fullPage.js等移动框架进行移动页面的开发。了解3D效果和H5游戏的开发。</p>
    </div>
    <div class="skills-right">
      <div class="progress-title">
        <strong>HTML5 & CSS3</strong>
        <span>80%</span>
      </div>
      <div class="progress">
        <div class="progressBar"></div>
      </div>
      <div class="progress-title">
        <strong>JavaScript、JQuery</strong>
        <span>90%</span>
      </div>
      <div class="progress">
        <div class="progressBar" style="width: 90%"></div>
      </div>
      <div class="progress-title">
        <strong>Vue、Angular</strong>
        <span>80%</span>
      </div>
      <div class="progress">
        <div class="progressBar"></div>
      </div>
      <div class="progress-title">
        <strong>小程序</strong>
        <span>80%</span>
      </div>
      <div class="progress">
        <div class="progressBar"></div>
      </div>
      <div class="progress-title">
        <strong>Node</strong>
        <span>75%</span>
      </div>
      <div class="progress">
        <div class="progressBar" style="width: 75%"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'skills',
    props: ['showSkillsAnimate']
  }
</script>
<style>
  .skills {
    width: 95%;
    margin: 0 auto;
    background: #ffffff;
    -webkit-box-shadow: 0 0 8px 0 rgba(50, 50, 50, 0.08);
    box-shadow: 0 0 8px 0 rgba(50, 50, 50, 0.08);
    border-left: 4px solid #a4c639;
    padding: 40px 20px 40px 20px;
    box-sizing: border-box;
    opacity: 0;
  }
  .skills-left {
    width: 50%;
    padding: 0 15px;
    box-sizing: border-box;
  }
  h2 {
    font-size: 40px;
    padding-bottom: 30px;
    font-weight: bold;
  }
  p {
    margin: 0 0 10px;
  }
  .skills-right {
    width: 50%;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .progress-title {
    margin-bottom: 4px;
  }
  strong {
    margin-bottom: 8px;
  }
  span {
    float: right;
    font-weight: bold;
  }
  .progress {
    background: #f5f5f5;
    margin-bottom: 20px;
    height: 4px;
    border-radius: 30px;
  }
  .progressBar {
    width: 80%;
    height: 100%;
    transition: width .6s ease;
    background: #a4c639;
  }
  @media (min-width: 768px) {
    .skills {
      display: block;
      margin: 0 auto;
      width: 750px;
    }
    .skills-left,.skills-right {
      width: 100%;
    }
    .skills-right {
      margin-top: 40px;
    }
  }
  @media (min-width: 992px) {
    .skills {
      display: flex;
      align-items: center;
      width: 970px;
    }
    .skills-left,.skills-right {
      width: 50%;
    }
  }
  @media (min-width: 1200px) {
    .skills {
      width: 1170px;
    }
  }
</style>
