<template>
  <div class="product-categories">
    <h2>{{ $t('shop.productCategories') }}</h2>
    <div class="category-grid">
      <div v-for="category in categories" :key="category.id" class="category-item">
        <router-link :to="{ name: 'ProductList', params: { id: category.id } }">
          <div class="category-image-container">
            <img :src="require(`@/${category.image}`)" :alt="$t('shop.categoryName')" class="category-image">
            <div class="category-details">
              <h3>{{ $t('shop.categoryName') }}</h3>
              <p>{{ $t('shop.categoryDescription') }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'ProductCategories',
  data() {
    return {
      categories: [
        { id: 1, name: 'Gear', image: 'assets/gear.jpg', description: 'High-quality mechanical parts' },
        { id: 2, name: 'Keycaps', image: 'assets/keycaps01.jpg', description: 'Customizable keyboard keycaps' },
        { id: 3, name: 'Accessory', image: 'assets/accessory.jpg', description: 'Essential tech accessories' },
        { id: 4, name: 'Anime', image: 'assets/anime.jpg', description: 'Anime-inspired products' },
      ]
    }
  }
}
</script>
  
<style scoped>
.product-categories {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.category-item {
  text-align: center;
  transition: transform 0.3s ease;
}

.category-item:hover {
  transform: translateY(-5px);
}

.category-image-container {
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  overflow: hidden;
  border-radius: 8px;
}

.category-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-details {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}

.category-details h3 {
  margin: 0;
}

.category-details p {
  margin: 0;
  font-size: 0.8em;
}
</style>