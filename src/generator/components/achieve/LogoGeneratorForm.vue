
<!-- src/components/LogoGeneratorForm.vue -->

<template>
  <div class="form-container">
    <div class="form-group">
      <label for="promptInput">Prompt: <span class="required">*</span></label>
      <input 
        type="text" 
        id="promptInput" 
        v-model="formData.prompt" 
        placeholder="Describe the logo you want to generate"
        required
      >
      <span v-if="promptError" class="error-message">{{ promptError }}</span>
    </div>

    <div class="form-group">
      <label for="widthInput">Width:</label>
      <input type="number" id="widthInput" v-model.number="formData.width" min="64" max="2048">
    </div>
    
    <div class="form-group">
      <label for="heightInput">Height:</label>
      <input type="number" id="heightInput" v-model.number="formData.height" min="64" max="2048">
    </div>

    <div class="form-group">
      <label for="imageNumInput">Number of Images:</label>
      <input type="number" id="imageNumInput" v-model.number="formData.image_num" min="1" max="4">
    </div>

    <div class="form-group">
      <label for="stepsInput">Steps:</label>
      <input type="number" id="stepsInput" v-model.number="formData.steps" min="1" max="150">
    </div>

    <div class="form-group">
      <label for="guidanceScaleInput">Guidance Scale:</label>
      <input type="number" id="guidanceScaleInput" v-model.number="formData.guidance_scale" step="0.1">
    </div>
    
    <div class="button-group">
      <button @click="generateLogo" :disabled="isGenerating || !formData.prompt.trim()">Generate Logo</button>
    </div>

    <div class="generated-content">
      <h2>Generated Logos:</h2>
      <div v-if="isGenerating" class="loading-animation">
        <div class="spinner"></div>
        <p>Generating...</p>
      </div>
      <div v-else-if="generatedImages.length > 0" class="image-grid">
        <div v-for="(image, index) in generatedImages" :key="index" class="image-preview">
          <img :src="image" :alt="`Generated Logo ${index + 1}`">
        </div>
      </div>
      <p v-else-if="generationError" class="error-message">{{ generationError }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { inject } from 'vue'

export default {
  name: 'LogoGeneratorForm',
  setup() {
    const apiKey = inject('apiKey')
    return { apiKey }
  },
  data() {
    return {
      isGenerating: false,
      formData: {
        prompt: '',
        width: 512,
        height: 512,
        image_num: 2,
        steps: 8,
        guidance_scale: 1.5
      },
      generatedImages: [],
      generationError: null,
      promptError: ''
    }
  },
  methods: {
    async generateLogo() {
      if (!this.formData.prompt.trim()) {
        this.promptError = 'Prompt is required'
        return
      }
      this.promptError = ''

      this.isGenerating = true
      this.generatedImages = []
      this.generationError = null

      try {
        const response = await axios.post('https://api.novita.ai/v3/lcm-txt2img', this.formData, {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
            'Accept-Encoding': 'gzip'
          }
        })
        
        this.generatedImages = response.data.images.map(img => 
          `data:image/${img.image_type};base64,${img.image_file}`
        )
      } catch (error) {
        console.error('Error generating logo:', error)
        if (error.response) {
          console.error('Error response:', error.response.data)
          this.generationError = `Error: ${error.response.data.message || 'Unable to generate logo'}`
        } else {
          this.generationError = 'Error: Unable to generate logo'
        }
      } finally {
        this.isGenerating = false
      }
    }
  }
}
</script>

<style scoped>
/* You can copy the styles from ImageGeneratorForm and adjust as needed */
.form-container {
  /* ... */
}

.form-group {
  /* ... */
}

.button-group {
  /* ... */
}

.generated-content {
  /* ... */
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.image-preview {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ... other styles ... */
</style>
