<template>
  <div class="layout-container" :style="{ fontFamily: currentFont + ', Arial, sans-serif' }">
    <div class="ad-space left-ad" v-if="showAds">
      <div id="left-ad-container"></div>
    </div>
    <div class="layout">
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
      <div class="ad-space custom-ad">
        <div id="custom-ad-container" class="centered-ad-container"></div>
      </div>
      <footer>
        <router-link to="/privacy">{{ $t('message.privacyPolicy') }}</router-link>
        <router-link to="/terms">{{ $t('message.termsOfService') }}</router-link>
        <router-link to="/about">{{ $t('message.aboutUs.title') }}</router-link>
        <router-link to="/contact">{{ $t('message.contactUs') }}</router-link>
      </footer>
    </div>
    <div class="ad-space right-ad" v-if="showAds">
      <div id="right-ad-container"></div>
    </div>
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
  data() {
    return {
      showAds: true
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
  },
  mounted() {
    this.checkAdVisibility();
    window.addEventListener('resize', this.checkAdVisibility);
    this.loadBottomBannerAd();
    // this.loadSideAds();
    this.loadInfolinksScript();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkAdVisibility);
  },
  methods: {
    checkAdVisibility() {
      this.showAds = window.innerWidth > 1080; // Adjust this value as needed
    },
    loadBottomBannerAd() {
      const script = document.createElement('script');
      script.innerHTML = `
        atOptions = {
          'key' : '45fa69a9fda96698f3f2ff0391d0bd6f',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;
      document.body.appendChild(script);

      const adScript = document.createElement('script');
      adScript.src = '//www.topcpmcreativeformat.com/45fa69a9fda96698f3f2ff0391d0bd6f/invoke.js';
      adScript.async = true;
      document.getElementById('custom-ad-container').appendChild(adScript);
    },
    loadSideAds() {
      const script = document.createElement('script');
      script.innerHTML = `
        atOptions = {
          'key' : '30a3464d9c1799708a453266a55e5059',
          'format' : 'iframe',
          'height' : 600,
          'width' : 160,
          'params' : {}
        };
      `;
      document.body.appendChild(script);

      const leftAdScript = document.createElement('script');
      leftAdScript.src = '//www.topcpmcreativeformat.com/30a3464d9c1799708a453266a55e5059/invoke.js';
      leftAdScript.async = true;
      document.getElementById('left-ad-container').appendChild(leftAdScript);
      const rightAdScript = document.createElement('script');
      rightAdScript.src = '//www.topcpmcreativeformat.com/30a3464d9c1799708a453266a55e5059/invoke.js';
      rightAdScript.async = true;
      document.getElementById('right-ad-container').appendChild(rightAdScript);
    },
    loadInfolinksScript() {
      const infolinksScript1 = document.createElement('script');
      infolinksScript1.type = 'text/javascript';
      infolinksScript1.innerHTML = `
        var infolinks_pid = 3427378;
        var infolinks_wsid = 0;
      `;
      document.body.appendChild(infolinksScript1);

      const infolinksScript2 = document.createElement('script');
      infolinksScript2.type = 'text/javascript';
      infolinksScript2.src = 'http://resources.infolinks.com/js/infolinks_main.js';
      document.body.appendChild(infolinksScript2);
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

.layout-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.ad-space {
  width: 160px; /* Standard ad width, adjust as needed */
  height: 600px; /* Standard ad height, adjust as needed */
  background-color: transparent;
  margin: 0 20px;
}

.layout {
  position: relative;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
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

.ad-space.bottom-ad {
  width: 100%;
  height: 90px; /* 标准横幅广告高度，可根据需要调整 */
  margin: 20px 0;
}

.ad-space.custom-ad {
  width: 100%;
  height: 90px;
  margin: 20px 0;
}

.centered-ad-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>