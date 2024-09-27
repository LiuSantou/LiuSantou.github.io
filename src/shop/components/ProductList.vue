<template>
  <div class="product-list">
    <h2>{{ $t('shop.productListForCategory', { id: id }) }}</h2>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-item">
        <img :src="product.image" :alt="$t('shop.productName')">
        <h3>{{ $t('shop.productName') }}</h3>
        <p class="price">{{ $t('shop.currency', { amount: product.price.toFixed(2) }) }}</p>
        <div class="rating">
          <i v-for="n in 5" :key="n" :class="['fas', 'fa-star', { 'filled': n <= product.rating }]"></i>
        </div>
        <div class="product-actions">
          <button class="quick-view">{{ $t('shop.quickView') }}</button>
          <button class="add-to-cart">{{ $t('shop.addToCart') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['id'],
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', price: 19.99, rating: 4, image: 'path/to/image1.jpg' },
        { id: 2, name: 'Product 2', price: 29.99, rating: 3, image: 'path/to/image2.jpg' },
        // Add more products as needed
      ]
    }
  }
}
</script>

<style scoped>
.product-list {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  margin: 20px 0;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product-item {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  transition: box-shadow 0.3s ease;
}

.product-item:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.product-item img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.price {
  font-weight: bold;
  color: #4CAF50;
}

.rating {
  color: #ffd700;
  margin: 10px 0;
}

.rating .filled {
  color: #ffd700;
}

.product-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.product-actions button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.quick-view {
  background-color: #f0f0f0;
}

.add-to-cart {
  background-color: #4CAF50;
  color: white;
}
</style>
