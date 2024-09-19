<template>
    <div class="product-categories">
      <h2>Product Categories</h2>
      <div class="category-grid">
        <div v-for="category in categories" :key="category.id" class="category-item">
            <router-link :to="{ name: 'ProductList', params: { id: category.id } }">
                <img :src="require(`@/${category.image}`)" :alt="category.name">
                <h3>{{ category.name }}</h3>
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
          { id: 1, name: 'Gear', image: 'src/assets/gear.jpg' },
          { id: 2, name: 'Keycaps', image: 'src/assets/keycaps01.jpg' },
          { id: 3, name: 'Accessory', image: 'src/assets/accessory.jpg' },
          { id: 4, name: 'Anime', image: 'src/assets/anime.jpg' },
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .product-categories {
    padding: 20px;
  }
  
  .category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .category-item {
    text-align: center;
  }
  
  .category-item img {
    max-width: 100%;
    height: auto;
  }
  </style>