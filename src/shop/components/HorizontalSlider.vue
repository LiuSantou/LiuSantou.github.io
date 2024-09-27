<template>
  <div class="horizontal-slider">
    <div class="slider-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <img :src="require(`@/${slide.image}`)" :alt="slide.title">
        <div class="slide-content">
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </div>
    <button @click="prevSlide" class="nav-button prev">&lt;</button>
    <button @click="nextSlide" class="nav-button next">&gt;</button>
    <div class="slider-dots">
      <span v-for="(_, index) in slides" :key="index" 
            :class="{ active: currentIndex === index }" 
            @click="goToSlide(index)"></span>
    </div>
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
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.slide-content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.slider-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.slider-dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.5);
  margin: 0 5px;
  cursor: pointer;
}

.slider-dots span.active {
  background-color: white;
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
  overflow: hidden;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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