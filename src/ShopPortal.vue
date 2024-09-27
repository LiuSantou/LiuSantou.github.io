<template>
  <div class="shop-portal" :style="{ fontFamily: currentFont + ', Arial, sans-serif' }">
    <MainHeader :class="{ hidden: isHeaderHidden }" @font-change="updateFont" />
    <HorizontalSlider />
    <ProductCategories />
    <router-view></router-view>
    <MainFooter />
  </div>
</template>

<script>
import HorizontalSlider from './shop/components/HorizontalSlider.vue'
import ProductCategories from './shop/components/ProductCategories.vue'
import MainFooter from './shop/components/MainFooter.vue'
import MainHeader from './shop/components/MainHeader.vue'

export default {
  name: 'ShopPortal',
  components: {
    MainHeader,
    HorizontalSlider,
    ProductCategories,
    MainFooter
  },
  data() {
    return {
      lastScrollTop: 0,
      isHeaderHidden: false,
      currentFont: 'Zomzi'
    }
  },
  methods: {
    handleScroll() {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > this.lastScrollTop) {
        this.isHeaderHidden = true;
      } else {
        this.isHeaderHidden = false;
      }
      this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    },
    updateFont(newFont) {
      this.currentFont = newFont;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
@font-face {
  font-family: 'Zomzi';
  src: url('@/assets/fonts/Zomzi.TTF') format('truetype');
}

@font-face {
  font-family: 'Jianhao';
  src: url('@/assets/fonts/Aa剑豪体.ttf') format('truetype');
}

.shop-portal {
  background-image: url('@/assets/images/shop_background.jpg');
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  color: #333;
}

.section {
  scroll-snap-align: start;
  flex-shrink: 0;
}

.main-header {
  position: sticky;
  top: 0;
  z-index: 100;
  scroll-snap-align: start;
  transition: transform 0.3s ease;
}

.main-header.hidden {
  transform: translateY(-100%);
}

.horizontal-slider {
  scroll-snap-align: start;
}

.product-categories {
  scroll-snap-align: start;
}

.footer {
  scroll-snap-align: end;
  margin-top: auto;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>