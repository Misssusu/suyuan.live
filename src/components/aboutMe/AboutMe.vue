<template>
  <div class="about" id="about">
    <div class="about-container">
      <div class="row">
        <div class="row-left">
          <img src="../../assets/images/about1.jpg" alt="">
          <img src="../../assets/images/about2.jpg" alt="">
        </div>
        <div class="row-right">
          <div class="row-right-container">
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
    name: 'about'
  };
</script>

<style scoped lang="scss">
  .about {
    padding: 80px 0;
    transition: all 0.4s ease-in-out;
  }
  .about-container {
    padding: 0 15px;
    margin: 0 auto;
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
      /*float: left;*/
      padding: 0 15px;
      img {
        width: 100%;
        vertical-align: middle;
      }
      img:first-child {
        padding-bottom: 16px;
      }
    }
    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .row-right {
      /*float: right;*/
      /*height: 100%;*/
      display: flex;
      align-items: center;

      .row-right-container {
        height: 300px;
        width: 100%;
        background: #ffffff;
        border-right: 4px solid #a4c639;
        box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.08);
        padding: 60px;
        text-align: left;
        animation: 1s ease-in fadeInRight;
        /*animation: 1s ease-in fadeInRight;*/
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
    .row-right,.row-left {
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
    .row-right,.row-left {
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
