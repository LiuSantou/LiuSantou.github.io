<template>
    <div class="stylish-image-generator">
      <label for="style">{{ $t('message.style') }}</label>
      <select v-model="style" name="Style">
        <option v-for="option in styleOptions" :key="option.key" :value="option.key">{{ $t(`message.${option.name}`) }}</option>
      </select>
      <label for="prompt">{{ $t('message.prompt') }}</label>
      <textarea v-model="prompt" name="Prompt" :placeholder="$t('message.enterYourPrompt')"></textarea>
      <button @click="generateImage" :disabled="isLoading">
        {{ isLoading ? $t('message.generating') : $t('message.generate') }}
      </button>
      <!-- Modal -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <div class="ad-container">
          </div>
          <button @click="checkImageStatus" :disabled="isGenerating">
            {{ isGenerating ? $t('message.generating') : $t('message.showImage') }}
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
  export default {
    name: 'ImageGenerator',
    data() {
      return {
        style: '1',
        prompt: '',
        response: null,
        styleOptions: [
            {"name": "Studio Ghibli", "key": "2"},
            {"name": "Pixel Art", "key": "3"},
            {"name": "Stickers", "key": "6"},
            {"name": "Doodle", "key": "8"},
            {"name": "PS1 Style", "key": "9"},
            {"name": "3D Render", "key": "10"},
            {"name": "T-Shirt design", "key": "11"},
            {"name": "Lineart Anime", "key": "14"}
        ],
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
                const encodedStyle = encodeURIComponent(this.style);
                const api_url="https://api.ragnarok-dwarf.online:9527"
                const url = `${api_url}/generate-stylish-image?prompt=${encodedPrompt}&style=${encodedStyle}`;

                const response = await axios.get(url);
                console.log('API Response:', response);
                this.taskId = response.data.task_id;
                this.showModal = true;
                this.loadAd();
                this.isLoading = false;

            } catch (error) {
                console.error('Error generating image:', error);
                this.isLoading = false;
            } finally {
                this.isLoading = false;
            }
        },
        async checkImageStatus() {
            if (this.isGenerating) return;
            
            this.isGenerating = true;
            try {
                const api_url="https://api.ragnarok-dwarf.online:9527"
                const response = await axios.get(`${api_url}/result?task=${this.taskId}`);
                
                if (response.data.status === 'complete') {
                    console.log('Image generation completed:', response.data);
                    this.response = {
                        image: `data:image/png;base64,${response.data.image}`,
                        message: 'Image generated successfully!'
                    };
                    this.isGenerating = false;
                    this.showModal = false;
                } else if (response.data.status === 'generating') {
                    console.log('Image generation in progress...');
                    setTimeout(() => {
                        this.isGenerating = false;
                        this.checkImageStatus();
                    }, 5000);
                } else if (response.data.status === 'no data') {
                    console.log('No data available for the image.');
                    this.isGenerating = false;
                    this.showModal = false;
                } else if (response.data.status === 'time out') {
                    console.log('Image generation timed out.');
                    this.isGenerating = false;
                    this.showModal = false;
                }
            } catch (error) {
                console.error('Error fetching image result:', error);
                this.isGenerating = false;
            }
        },
        loadAd() {
          const script = document.createElement('script');
          script.innerHTML = `
            atOptions = {
              'key' : '47b528a812724e1b5d096059b494de76',
              'format' : 'iframe',
              'height' : 250,
              'width' : 300,
              'params' : {}
            };
          `;
          document.body.appendChild(script);

          const adScript = document.createElement('script');
          adScript.src = '//www.topcpmcreativeformat.com/47b528a812724e1b5d096059b494de76/invoke.js';
          adScript.async = true;
          document.getElementById('ad-container').appendChild(adScript);
        },
    }
  }
  </script>

<style scoped>
.stylish-image-generator {
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

  