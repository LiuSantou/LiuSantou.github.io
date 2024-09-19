<template>
    <div class="horizontal-slider">
      <div class="slider-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="slide">
            <img :src="require(`@/${slide.image}`)" :alt="slide.title">
            <h2 class="slide-title">{{ slide.title }}</h2>
        </div>
      </div>
      <button @click="prevSlide" class="nav-button prev">&lt;</button>
      <button @click="nextSlide" class="nav-button next">&gt;</button>
    </div>
  </template>
  
  <script>
  import slideData from '@/slideImageInfo.json'
  
  export default {
    name: 'HorizontalSlider',
    data() {
      return {
        currentIndex: 0,
        slides: slideData,
        autoSlideTimer: null
      }
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length
        },
        startAutoSlide() {
            this.autoSlideTimer = setInterval(() => {
                this.nextSlide()
            }, 8000)
        }
    },
    mounted() {
        this.startAutoSlide()
    },
    beforeUnmount() {
        clearInterval(this.autoSlideTimer)
    }
  }
  </script>
  
  <style scoped>
  /* Styles remain the same as in the previous version */
  .horizontal-slider {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.slider-container {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease;
}

.slide {
  flex: 0 0 100%;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.slide-title {
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  margin: 0;
  z-index: 10;
}
  </style>