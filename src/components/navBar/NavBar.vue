<template>
  <div class="navBar animated" :class="showNav? 'fadeInDown': ''">
    <div class="navBar-container">
      <nav class="navBar-header">
          <button class="navBar-toggle" @click="navToggle">
            <div class="navBar-icon"></div>
            <div class="navBar-icon"></div>
            <div class="navBar-icon"></div>
          </button>
      </nav>
      <nav class="navBar-collapse" v-show="showNavCollapse">
        <ul>
          <li>
            <a @click="$emit('scrollTo','home')">Home</a>
          </li>
          <li>
            <a  @click="$emit('scrollTo','about')">About</a>
          </li>
          <li>
            <a href="#my works">My Works</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'navbar',
    props: [
      'showNav'
    ],
    data(){
      return {
        showNavCollapse: false
      }
    },
    methods: {
      navToggle(){
        this.showNavCollapse = !this.showNavCollapse;
      }
    }
  }
</script>
<style scoped>
  .navBar {
    width: 100%;
    padding: 0 15px;
    position: fixed;
    top: 0;
    background: #ffffff;
    opacity: 0;
    z-index: 1;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 2Px 8Px 0 rgba(50, 50, 50, 0.08);
    box-sizing: border-box;
    min-height: 50Px;
  }
  li > a:hover {
    color: #a4c639;
    background-color: transparent;
  }
  li > a {
    cursor: pointer;
    color: #202020;
    font-weight: 700;
    line-height: 38px;
    display: block;
    /*去除a标签在手机端点击时的默认阴影样式*/
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  .navBar-container {
    width: 98%;
  }
  .navBar-collapse {
    border-top: 1px solid #e7e7e7;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
    max-height: 340Px;
    margin: 0 -15Px;
    padding: 0 15Px;
    text-align: left;
  }
  .navBar .navBar-collapse > ul {
    display: block;
  }
  li > a {
    padding: 20Px 15Px;
  }
  .navBar-header {
    margin: 0 -15px;
    box-sizing: border-box;
    height: 49Px;
  }
  .navBar-toggle {
    border: 0;
    padding: 10Px;
    background: transparent;
    margin: 8Px 15Px 8Px 0;
    position: relative;
    float: right;
    /*消除默认点击蓝色边框效果*/
    outline: none;
  }
  .navBar-icon {
    width: 26Px;
    height: 2Px;
    background: #a4c639;
    margin-top: 5Px;
    border-radius: 1Px;
  }
  .navBar-icon:first-child {
    margin-top: 0;
  }

  @media (min-width: 768px){
    /*宽度大于等于768px*/
    .navBar-container {
      width: 750Px;
    }
    .navBar-header {
      display: none;
    }
    .navBar-collapse {
      display: block !important;
    }
    ul {
      display: flex;
      justify-content: flex-end;
    }
  }

  @media (min-width: 992px) {
    .navBar-container {
      width: 970px;
    }
    .navBar-header {
      display: none;
    }
    .navBar-collapse {
      display: block !important;
    }
    ul {
      display: flex;
      justify-content: flex-end;
    }
  }

  @media (min-width: 1200px) {
    .navBar-container {
      width: 1170px;
    }
    .navBar-header {
      display: none;
    }
    ul {
      display: flex;
      justify-content: flex-end;
    }
  }

</style>

