<template>
  <div class="about" id="about">
    <div class="about-container">
      <div class="row">
        <div class="row-left animated" :class="showAnimate? 'fadeInLeft': ''">
          <img src="../../assets/images/about1.jpg" alt="">
          <img src="../../assets/images/about2.jpg" alt="">
        </div>
        <div class="row-right">
          <div class="animated row-right-container" :class="showAnimate? 'fadeInRight': ''">
            <h1>关于我</h1>
            <h3>ABOUT ME</h3>
            <p>bdcjkasbckasnxksanakxnkas</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    props: ['showAnimate']
  };
</script>

<style scoped lang="scss">
  .about {
    padding: 80px 0;
  }

  .about-container {
    padding: 0 15px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .clearfix:after {
    content: '';
    clear: both;
    display: block;
  }

  .row {
    display: flex;
    justify-content: center;
    margin: 0 15px;

    .row-left {
      padding: 0 15px;
      opacity: 0;

      img {
        width: 100%;
        vertical-align: middle;
      }

      img:first-child {
        padding-bottom: 16px;
      }
    }
    .row-right {
      display: flex;
      align-items: center;

      .row-right-container {
        opacity: 0;
        height: 300px;
        width: 100%;
        background: #ffffff;
        border-right: 4px solid #a4c639;
        box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.08);
        padding: 60px;
        text-align: left;
        h1 {
          font-weight: bold;
          font-size: 36px;
          margin: 20px 0 10px 0;
        }

        h3 {
          padding-bottom: 20px;
          font-size: 24px;
          font-weight: bold;
          margin: 20px 0 10px 0;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .about-container {
      width: 750px;
    }
    .row-right, .row-left {
      width: 100%;
    }
    .row {
      display: block;
    }
  }

  @media (min-width: 992px) {
    .about-container {
      width: 970px;
    }
    .row-right, .row-left {
      width: 41.66666667%;
    }
    .row {
      display: flex;
    }
  }

  @media (min-width: 1200px) {
    .about-container {
      width: 1170px;
    }
  }
</style>
