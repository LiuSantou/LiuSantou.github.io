<!-- src/components/ImageGeneratorForm.vue -->

<template>
    <div class="form-container">
      <div class="form-group">
        <label for="modelSelect">Model:</label>
        <select id="modelSelect" v-model="formData.model_name">
          <option value="sd_xl_base_1.0.safetensors">SD XL Base 1.0</option>
          <option value="dreamshaper_8_93211.safetensors">Dreamshaper 8</option>
          <option value="experience_80_26945.safetensors">Experience 80</option>
          <option value="gleipnir_v20BF16_174601.safetensors">Gleipnir v20 BF16</option>
          <option value="wowXLV2_v2_141602.safetensors">Wow XL V2</option>
          <option value="MAGIFACTORYTShirt_magifactoryTShirtModel_7624.safetensors">MAGIFACTORY T-Shirt</option>
          <option value="dungeonsNWaifusV2225D_dungeonsNWaifus22_17622.safetensors">Dungeons N Waifus V2</option>
          <option value="juggernaut_v22Bakedvae_77046.safetensors">Juggernaut v22 Baked VAE</option>
        </select>
      </div>
  
      <div class="form-group">
        <label for="promptInput">Prompt: <span class="required">*</span></label>
        <input 
          type="text" 
          id="promptInput" 
          v-model="formData.prompt" 
          placeholder="Describe the image you want to generate"
          required
        >
        <span v-if="promptError" class="error-message">{{ promptError }}</span>
      </div>
  
      <div class="advanced-toggle">
        <a href="#" @click.prevent="toggleAdvanced">{{ showAdvanced ? 'Hide' : 'Show' }} Advanced Options</a>
      </div>
  
      <div v-if="showAdvanced" class="advanced-options">
        <div class="form-group">
          <label for="negativePromptInput">Negative Prompt:</label>
          <input type="text" id="negativePromptInput" v-model="formData.negative_prompt" placeholder="Describe what you don't want in the image">
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
          <label for="stepsInput">Steps:</label>
          <input type="number" id="stepsInput" v-model.number="formData.steps" min="1" max="150">
        </div>
        
        <div class="form-group">
          <label for="seedInput">Seed:</label>
          <input type="number" id="seedInput" v-model.number="formData.seed">
        </div>
        
        <div class="form-group">
          <label for="guidanceScaleInput">Guidance Scale:</label>
          <input type="number" id="guidanceScaleInput" v-model.number="formData.guidance_scale" step="0.1">
        </div>
        
        <div class="form-group">
          <label for="samplerSelect">Sampler:</label>
          <select id="samplerSelect" v-model="formData.sampler_name">
            <option value="Euler a">Euler a</option>
            <option value="Euler">Euler</option>
            <option value="LMS">LMS</option>
            <option value="Heun">Heun</option>
            <option value="DPM2">DPM2</option>
            <option value="DPM2 a">DPM2 a</option>
            <option value="DPM++ 2S a">DPM++ 2S a</option>
            <option value="DPM++ 2M">DPM++ 2M</option>
            <option value="DPM++ SDE">DPM++ SDE</option>
            <option value="DPM fast">DPM fast</option>
            <option value="DPM adaptive">DPM adaptive</option>
            <option value="LMS Karras">LMS Karras</option>
            <option value="DPM2 Karras">DPM2 Karras</option>
            <option value="DPM2 a Karras">DPM2 a Karras</option>
            <option value="DPM++ 2S a Karras">DPM++ 2S a Karras</option>
            <option value="DPM++ 2M Karras">DPM++ 2M Karras</option>
            <option value="DPM++ SDE Karras">DPM++ SDE Karras</option>
            <option value="DDIM">DDIM</option>
            <option value="PLMS">PLMS</option>
            <option value="UniPC">UniPC</option>
          </select>
        </div>
      </div>
      
      <div class="button-group">
        <button @click="generateImage" :disabled="isGenerating || !formData.prompt.trim()">Generate</button>
      </div>
  
      <div class="generated-content">
        <h2>Generated Result:</h2>
        <div class="image-preview-area">
          <div v-if="isGenerating" class="loading-animation">
            <div class="spinner"></div>
            <p>Generating... {{ progress }}%</p>
          </div>
          <img v-else-if="generatedImageUrl" :src="generatedImageUrl" alt="Generated Image">
          <p v-else-if="generationError" class="error-message">{{ generationError }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import { inject } from 'vue'
  
  export default {
    name: 'ImageGeneratorForm',
    setup() {
      const apiKey = inject('apiKey')
      return { apiKey }
    },
    data() {
      return {
        isGenerating: false,
        formData: {
          model_name: 'sd_xl_base_1.0.safetensors',
          prompt: '',
          negative_prompt: 'nsfw, bottle, bad face',
          width: 1024,
          height: 1024,
          image_num: 1,
          steps: 20,
          seed: 123,
          clip_skip: 1,
          guidance_scale: 7.5,
          sampler_name: 'Euler a'
        },
        generatedImageUrl: null,
        generationError: null,
        taskId: null,
        progress: 0,
        promptError: '',
        showAdvanced: false
      }
    },
    methods: {
      toggleAdvanced() {
        this.showAdvanced = !this.showAdvanced
      },
      async generateImage() {
        if (!this.formData.prompt.trim()) {
          this.promptError = 'Prompt is required'
          return
        }
        this.promptError = ''
  
        this.isGenerating = true
        this.generatedImageUrl = null
        this.generationError = null
        this.progress = 0
  
        try {
          const response = await axios.post('https://api.novita.ai/v3/async/txt2img', {
            extra: {
              response_image_type: 'jpeg',
              enable_nsfw_detection: false,
              nsfw_detection_level: 0,
            },
            request: {
              ...this.formData,
              prompt: this.formData.prompt.trim(),
              negative_prompt: this.formData.negative_prompt.trim() || undefined,
              seed: this.formData.seed || -1,
            }
          }, {
            headers: {
              'Authorization': `Bearer ${this.apiKey}`,
              'Content-Type': 'application/json'
            }
          })
          
          if (response.data.task_id) {
            this.taskId = response.data.task_id
            await this.checkTaskStatus()
          } else {
            throw new Error('No task ID in the response')
          }
        } catch (error) {
          console.error('Error generating image:', error)
          this.generationError = 'Error: Unable to generate image'
          this.isGenerating = false
        }
      },
      async checkTaskStatus() {
        try {
          const response = await axios.get(`https://api.novita.ai/v3/async/task-result?task_id=${this.taskId}`, {
            headers: {
              'Authorization': `Bearer ${this.apiKey}`
            }
          })
  
          if (response.data.images && response.data.images.length > 0) {
            this.generatedImageUrl = response.data.images[0].image_url
            this.isGenerating = false
          } else if (response.data.task && response.data.task.progress_percent !== undefined) {
            this.progress = response.data.task.progress_percent
            setTimeout(() => this.checkTaskStatus(), 10000) // Wait 10 seconds before checking again
          } else {
            throw new Error('Unexpected response format')
          }
        } catch (error) {
          console.error('Error checking task status:', error)
          this.generationError = 'Error: Unable to retrieve generated image'
          this.isGenerating = false
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="number"],
  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .button-group {
    margin-top: 20px;
  }
  
  button {
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  
  .generated-content {
    margin-top: 30px;
  }
  
  .image-preview-area {
    width: 100%;
    height: 300px;
    border: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  .image-preview-area img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  .loading-animation {
    text-align: center;
  }
  
  .spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 0 auto 10px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .error-message {
    color: red;
    font-size: 0.9em;
    margin-top: 5px;
  }
  
  .required {
    color: red;
  }
  
  .advanced-toggle {
    margin-bottom: 15px;
  }
  
  .advanced-toggle a {
    color: #4CAF50;
    text-decoration: none;
  }
  
  .advanced-options {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  </style>
  