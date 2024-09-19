<!-- src/views/RdGenerator.vue -->

<template>
  <div class="rd-generator">
    <p class="page-description">
      {{ $t('message.description') }}
    </p>

    <div class="tabs">
      <button 
        v-for="(tab, index) in tabs" 
        :key="index" 
        @click="currentTab = index"
        :class="{ active: currentTab === index }"
      >
        {{ $t(`message.${tab.name}`) }}
      </button>
    </div>

    <div class="tab-content">
      <LogoGenerator v-if="currentTab === 0" />
      <ImageGenerator v-if="currentTab === 1" />
    </div>
  </div>
</template>

<script>
import ImageGenerator from '@/generator/components/ImageGenerator.vue'
import LogoGenerator from '@/generator/components/LogoGenerator.vue'


export default {
  name: 'RdGenerator',
  components: {
    LogoGenerator,
    ImageGenerator
  },
  data() {
    return {
      currentTab: 0,
      tabs: [
        { name: 'logoGenerator' },
        { name: 'imageGenerator' }
      ]
    }
  },
  computed: {
  },
  mounted() {
    // this.i18n.locale = 'ja'
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Zomzi';
  src: url('@/assets/fonts/Zomzi.TTF') format('truetype');
}

@font-face {
  font-family: 'Jianhao';
  src: url('@/assets/fonts/Aa剑豪体.ttf') format('truetype');
}

.rd-generator {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  /* font-family: 'Zomzi', Arial, sans-serif; */
  color: #e0e0e0;
  min-height: 69vh;
  font-size: 18px;
}

.page-description {
  color: #b0b0b0;
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  font-size: 1.2em;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
}

.tab-content {
  background-color: rgba(42, 42, 42, 0.8);
  border: 1px solid #444444;
  border-radius: 5px;
  padding: 20px;
  position: relative;
}

.tabs button {
  padding: 12px 24px;
  margin: 0 5px;
  border: none;
  background-color: rgba(51, 51, 51, 0.7);
  color: #e0e0e0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  border-radius: 5px;
  backdrop-filter: blur(5px);
  font-size: 1.1em;
}

.tabs button:hover {
  background-color: rgba(76, 175, 80, 0.6);
}

.tabs button.active {
  background-color: rgba(76, 175, 80, 0.8);
  color: #ffffff;
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
}

select, textarea, input, button {
  font-size: 1.1em;
  padding: 12px; /* Increased padding */
}

button[type="submit"], button.generate {
  font-size: 1.2em;
  padding: 14px 28px; /* Increased padding */
}

.modal-content {
  font-size: 1.1em;
}

.modal-content button {
  font-size: 1.2em;
  padding: 14px 28px; /* Increased padding */
}
</style>