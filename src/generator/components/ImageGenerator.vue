<template>
  <div class="image-generator">
    <label for="selectedModel">{{ $t('message.model') }}</label>
    <select v-model="selectedModel" name="selectedModel">
      <option v-for="model in models" :key="model.name" :value="model.index">
        {{ model.name }}
      </option>
    </select>
    <label for="prompt">{{ $t('message.prompt') }}</label>
    <textarea v-model="prompt" name="Prompt" :placeholder="$t('message.enterYourPrompt')"></textarea>
    <label for="negativePrompt">{{ $t('message.negativePrompt') }}</label>
    <textarea v-model="negativePrompt" name="Negative Prompt" :placeholder="$t('message.enterNegativePrompt')"></textarea>
    <label for="selectedSampler">{{ $t('message.sampler') }}</label>
    <select v-model="selectedSampler" name="selectedSampler">
      <option v-for="sampler in samplers" :key="sampler.name" :value="sampler.index">
        {{ sampler.name }}
      </option>
    </select>
    <label for="size">{{ $t('message.size') }}</label>
    <select v-model="size" name="size">
      <option v-for="option in sizeOptions" :key="option" :value="option">{{ option }}</option>
    </select>
    <button @click="generateImage">{{ $t('message.generate') }}</button>
    <!-- Modal -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5751519975977559"
     crossorigin="anonymous"></script>
        <!-- loading_ad_2 -->
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-5751519975977559"
            data-ad-slot="5638156945"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
          <!-- Add your advertisement content here -->
        <button @click="checkLogoStatus" :disabled="isGenerating">
        {{ isGenerating ? $t('message.generating') : $t('message.showLogo') }}
        </button>
      </div>
    </div>
    <div v-if="response" class="response">
      <img :src="response.image" alt="Generated Image" />
      <p>{{ response.message }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import checkpoints from '@/assets/checkpoint.json';
import samplers from '@/assets/sampler.json';

export default {
  name: 'ImageGenerator',
  data() {
    return {
      models: checkpoints,
      selectedModel: '',
      prompt: '',
      negativePrompt: '',
      samplers: samplers,
      selectedSampler: '',
      size: '512x512',
      sizeOptions: ['512x512', '768x512', '512x768'],
      response: null,
      isLoading: false,
      taskId: null,
      showModal: false,
      isGenerating: false
    }
  },
  methods: {
    async generateImage() {
      this.isLoading = true;
      try {
          const encodedPrompt = encodeURIComponent(this.prompt);
          const encodedModel = encodeURIComponent(this.selectedModel);
          const encodedNegativePrompt = encodeURIComponent(this.negativePrompt);
          const encodedSampler = encodeURIComponent(this.selectedSampler);
          const encodedSize = encodeURIComponent(this.size);
          const api_url="https://[2600:1900:4001:8a7::]:9527"
          const url = `${api_url}/generate-image?prompt=${encodedPrompt}&model=${encodedModel}&negative=${encodedNegativePrompt}&sampler=${encodedSampler}&size=${encodedSize}`;
          
          const response = await axios.get(url);
          console.log('API Response:', response);
          this.taskId = response.data.task_id;
          this.showModal = true;
          this.isLoading = false;

      } catch (error) {
          console.error('Error generating logo:', error);
          this.isLoading = false;
      } finally {
          this.isLoading = false;
      }
      // Implement image generation logic here
    },
    async checkLogoStatus() {
        if (this.isGenerating) return;
        
        this.isGenerating = true;
        try {
            const api_url="https://[2600:1900:4001:8a7::]:9527"
            const response = await axios.get(`${api_url}/result?task=${this.taskId}`);
            
            if (response.data.status === 'complete') {
                console.log('Logo generation completed:', response.data);
                this.response = {
                    image: `data:image/png;base64,${response.data.image}`,
                    message: 'Logo generated successfully!'
                };
                this.isGenerating = false;
                this.showModal = false;
            } else if (response.data.status === 'generating') {
                console.log('Logo generation in progress...');
                setTimeout(() => {
                    this.isGenerating = false;
                    this.checkLogoStatus();
                }, 5000);
            } else if (response.data.status === 'no data') {
                console.log('No data available for the logo.');
                this.isGenerating = false;
                this.showModal = false;
            }
        } catch (error) {
            console.error('Error fetching logo result:', error);
            this.isGenerating = false;
        }
    }
  },
  mounted() {
    const defaultModel = this.models.find(model => model.selected === true);
    this.selectedModel = defaultModel ? defaultModel.index : '';

    const defaultSampler = this.samplers.find(sampler => sampler.selected === true);
    this.selectedSampler = defaultSampler ? defaultSampler.index : '';
  }
}
</script>

<style scoped>
.image-generator {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

select, textarea, button {
  background-color: #333333;
  color: #e0e0e0;
  border: 1px solid #444444;
  padding: 10px;
  border-radius: 5px;
  font-family: inherit;
}
button {
  background-color: #4CAF50;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s, opacity 0.3s;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

button:disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
  opacity: 0.7;
}

.response {
  margin-top: 20px;
  text-align: center;
  position: relative;
}

.response img {
  max-width: 100%;
  border-radius: 5px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
}

.modal-content {
  background-color: #2a2a2a;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #444444;
  width: 80%;
  text-align: center;
}

.modal-content button {
  display: inline-block;
  margin-top: 20px; /* 在按钮上方添加一些间距 */
}
</style>

