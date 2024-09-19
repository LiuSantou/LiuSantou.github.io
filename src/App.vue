<template>
    <div id="app" :style="{ fontFamily: currentFont + ', Arial, sans-serif' }">
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    computed: {
      currentFont() {
          switch (this.$i18n.locale) {
              case 'zh':
              return 'Jianhao';
              default:
              return 'Zomzi';
          }
      }
    }
  }
  </script>
  
  <style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #e0e0e0;
    min-height: 100vh;
  }
  
  @font-face {
    font-family: 'Zomzi';
    src: url('@/assets/fonts/Zomzi.TTF') format('truetype');
  }
  
  @font-face {
    font-family: 'Jianhao';
    src: url('@/assets/fonts/Aa剑豪体.ttf') format('truetype');
  }
  </style>
  