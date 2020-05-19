<template>
  <div class="animated skills" :class="showSkillsAnimate? 'fadeInDown': ''" id="skills">
    <div class="skills-left">
      <h2>Personal Skills</h2>
      <p>具有三年的前端开发经验</p>
      <p></p>
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
<style scoped>
  .skills {
    margin: 30Px auto 0 auto;
    background: #ffffff;
    -webkit-box-shadow: 0 0 8px 0 rgba(50, 50, 50, 0.08);
    box-shadow: 0 0 8Px 0 rgba(50, 50, 50, 0.08);
    border-left: 4Px solid #a4c639;
    padding: 40Px 20Px 40Px 20Px;
    box-sizing: border-box;
    opacity: 0;
  }
  .skills-left {
    padding: 0 15Px;
    box-sizing: border-box;
  }
  h2 {
    font-size: 40Px;
    padding-bottom: 30Px;
    font-weight: bold;
  }
  p {
    margin: 0 0 10Px;
  }
  .skills-right {
    padding: 40Px 15Px 0 15Px;
    box-sizing: border-box;
  }
  .progress-title {
    margin-bottom: 4px;
  }
  strong {
    margin-bottom: 4Px;
    font-weight: 700;
    font-size: 16Px;
    display: inline-block;
  }
  span {
    float: right;
    font-weight: bold;
  }
  .progress {
    background: #f5f5f5;
    margin-bottom: 20Px;
    height: 4Px;
    border-radius: 30Px;
  }
  .progressBar {
    width: 80%;
    height: 100%;
    transition: width .6s ease;
    background: #a4c639;
  }

  @media (max-width: 480px) {
    /*宽度小于等于480px*/
    h2 {
      font-size: 25Px;
    }
  }

  @media (min-width: 768px) {
    .skills {
      display: block;
      width: 750Px;
      margin: 80Px auto 0 auto;
    }
    .skills-left,.skills-right {
      width: 100%;
    }
  }
  @media (min-width: 992px) {
    .skills {
      display: flex;
      align-items: center;
      width: 970Px;
    }
    .skills-left,.skills-right {
      width: 50%;
    }
  }
  @media (min-width: 1200px) {
    .skills {
      width: 1170Px;
    }
  }
</style>
