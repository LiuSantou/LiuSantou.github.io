<template>
    <div class="layout" :style="{ fontFamily: currentFont + ', Arial, sans-serif' }">
      <header>
        <div class="language-selector">
          <select v-model="$i18n.locale" @change="$forceUpdate()">
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
          </select>
        </div>
        <h1 class="page-title" @click="goHome">{{ $t('message.title') }}</h1>
      </header>
      <router-view></router-view>
      <footer>
        <router-link to="/privacy">{{ $t('message.privacyPolicy') }}</router-link>
        <router-link to="/terms">{{ $t('message.termsOfService') }}</router-link>
        <router-link to="/about">{{ $t('message.aboutUs.title') }}</router-link>
        <router-link to="/contact">{{ $t('message.contactUs') }}</router-link>
      </footer>
    </div>
</template>
  
<script>
import { useRouter } from 'vue-router'

export default {
  name: 'MainLayout',
  setup() {
    const router = useRouter()
    return {
      goHome: () => router.push('/')
    }
  },
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
  
<style scoped>
@font-face {
  font-family: 'Zomzi';
  src: url('@/assets/fonts/Zomzi.TTF') format('truetype');
}

@font-face {
  font-family: 'Jianhao';
  src: url('@/assets/fonts/Aa剑豪体.ttf') format('truetype');
}

.layout {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  /* font-family: 'Zomzi', Arial, sans-serif; */
  color: #e0e0e0;
  min-height: 90vh;
  font-size: 18px;
}

.layout::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/images/background_image.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -2;
}

.layout::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: -1;
}

.content {
  flex: 1;
}

.page-title {
  color: #ffffff;
  text-align: center;
  position: relative;
  font-size: 2.5em;
  cursor: pointer;
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

footer {
  margin-top: auto;
  padding: 20px;
  text-align: center;
}

footer a {
  color: #e0e0e0;
  margin: 0 10px;
  text-decoration: none;
  font-family: inherit;
  display: inline-block;
  padding: 5px 0;
}

</style>