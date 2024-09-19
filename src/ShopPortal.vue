<template>
  <div class="shop-portal">
    <section class="section header">
      <MainHeader />
    </section>
    <section class="section horizontal-slider">
      <HorizontalSlider />
    </section>
    <section class="section product-categories">
      <ProductCategories />
    </section>
    <section class="section footer">
      <MainFooter />
    </section>
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
  }
}
</script>

<style>
.shop-portal {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  display: flex;
  flex-direction: column;
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