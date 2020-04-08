<template>
  <div class="navBar animated" :class="showNav? 'fadeInDown': ''">
    <div class="navBar-container">
      <nav class="navBar-header">
          <button class="navBar-toggle" @click="navToggle">
            <span></span>
            <span></span>
            <span></span>
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
<style lang="scss" scoped>
  .navBar {
    width: 100%;
    padding: 0 15px;
    position: fixed;
    background: #ffffff;
    opacity: 0;
    z-index: 1;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.08);
    box-sizing: border-box;
    .navBar-collapse {
      ul {
        display: flex;
        justify-content: flex-end;
        li {
          a:hover {
            color: #a4c639;
            background-color: transparent;
          }
          a {
            cursor: pointer;
            color: #202020;
            font-weight: 700;
            line-height: 38px;
            padding: 12px 16px;
            display: block;
          }
        }
      }
    }
    .navBar-header {
      margin: 0 -48px;
      box-sizing: border-box;
      .navBar-toggle {
        border: 0;
        padding: 32px;
        background: transparent;
        margin: 26px 48px 26px 0;
        position: relative;
        float: right;
        outline: none;     //消除默认点击蓝色边框效果
        span {
          display: block;
          width: 71px;
          height: 6.5px;
          background: #a4c639;
          margin-top: 13px;
          border-radius: 1px;
        }
      }
    }
  }

  @media (max-width: 640px) { //宽度小于等于640px
    .navBar-container {
      width: 98%;
      .navBar-header {
        height: 52px;
      }
      .navBar-collapse {
        border-top: 1px solid #e7e7e7;
        box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
        max-height: 340px;
        margin: 0 -15px;
        padding: 0 15px;
      }
    }
    .navBar .navBar-collapse {
      ul {
        display: block;
        li {
          a {
            padding: 20px 15px;
          }
        }
      }
    }
  }

  @media (min-width: 768px){   //宽度大于等于768px
    .navBar-container {
      width: 750px;
    }
  }

  @media (min-width: 992px) {
    .navBar-container {
      width: 970px;
    }
  }

  @media (min-width: 1200px) {
    .navBar-container {
      width: 1170px;
    }
  }
</style>

