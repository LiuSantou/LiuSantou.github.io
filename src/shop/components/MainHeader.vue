<template>
  <header class="main-header" :style="{ fontFamily: currentFont + ', Arial, sans-serif' }">
    <div class="left-section">
      <div class="logo">
        <img src="@/assets/logo.png" :alt="$t('shop.companyLogo')">
      </div>
      <h1 class="title">{{ $t('shop.companyName') }}</h1>
    </div>
    <div class="right-section">
      <div class="search-bar">
        <input type="text" :placeholder="$t('shop.searchPlaceholder')">
        <button><img src="@/assets/hammer.png" :alt="$t('shop.search')" class="search-icon"></button>
      </div>
    </div>
    <div class="language-selector">
      <select v-model="$i18n.locale" @change="updateFont">
        <option value="en">English</option>
        <option value="zh">中文</option>
        <option value="ja">日本語</option>
      </select>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  computed: {
    currentFont() {
      switch (this.$i18n.locale) {
        case 'zh':
          return 'Jianhao';
        default:
          return 'Zomzi';
      }
    }
  },
  methods: {
    updateFont() {
      this.$forceUpdate();
      this.$emit('font-change', this.currentFont);
    }
  }
}
</script>

<style scoped>
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: rgba(42, 42, 42, 0.8);
}

.left-section {
  display: flex;
  align-items: center;
}

.right-section {
  display: flex;
  align-items: center;
}

.language-selector {
  position: absolute;
  top: 10px;
  right: 10px;
}

.language-selector select, .language-selector select option {
  font-family: inherit;
  padding: 5px;
  font-size: 1em;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  border: 1px solid #555;
}

.search-bar {
  display: flex;
  align-items: center;
  margin-right: 6rem;
}

.search-bar input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  background-color: rgba(42, 42, 42, 0.8);
  color: inherit;
  font-family: inherit;
  height: 36px; /* Set a fixed height */
  box-sizing: border-box; /* Include padding and border in the element's total height */
}

.search-bar button {
  padding: 0.5rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  height: 36px; /* Match the height of the input */
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-icon {
  width: 20px;
  height: 20px;
}

.user-actions button {
  background: none;
  border: none;
  font-size: 1.2rem;
  margin-left: 1rem;
  cursor: pointer;
}
  
.logo img {
  height: 50px;
  margin-right: 1rem;
  background-color: antiquewhite;
  border-radius: 50%;
}

.title {
  font-size: 1.5rem;
  color: #e0e0e0;
}
</style>