<template>
  <div class="navBar" :class="showNav? 'showNav': ''">
    <nav>
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
</template>
<script>
  export default {
    name: 'NavBar',
    props: [
      'showNav'
    ]
  }
</script>
<style lang="scss" scoped>
  .navBar {
    padding: 0 15px;
    position: fixed;
    background: #ffffff;
    opacity: 0;
    z-index: 1;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.08);
    nav {
      ul {
        display: flex;
        justify-content: flex-end;
        li {
          padding: 15px 0;
          a:hover {
            color: #a4c639;
            background-color: transparent;
          }
          a {
            cursor: pointer;
            color: #202020;
            font-weight: 700;
            line-height: 38px;
            padding: 0 20px;
          }
        }
      }
    }
  }
  .navBar.showNav {
    opacity: 1;
  }


  @media (min-width: 768px) {
    .navBar {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .navBar {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .navBar {
      width: 1170px;
    }
  }
</style>

