<template>
    <div class="logo-generator">
      <label for="style">{{ $t('message.style') }}</label>
      <select v-model="style" name="Style">
        <option v-for="option in styleOptions" :key="option.name" :value="option.name">{{ $t(`message.${option.key}`) }}</option>
      </select>
      <label for="prompt">{{ $t('message.logoPrompt') }}</label>
      <textarea v-model="prompt" name="Prompt" :placeholder="$t('message.logoEnterYourPrompt')"></textarea>
      <button @click="generateLogo" :disabled="isLoading">
        {{ isLoading ? $t('message.generating') : $t('message.generate') }}
      </button>
      <!-- Modal -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
            <amp-ad width="100vw" height="320"
                type="adsense"
                data-ad-client="ca-pub-5751519975977559"
                data-ad-slot="8264320289"
                data-auto-format="rspv"
                data-full-width="">
            <div overflow=""></div>
            </amp-ad>
            <button @click="checkLogoStatus" :disabled="isGenerating">
            {{ isGenerating ? $t('message.generating') : $t('message.showLogo') }}
            </button>
        </div>
      </div>
      <div v-if="response" class="response">
        <img :src="response.image" alt="Generated Logo" />
        <p>{{ response.message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'LogoGenerator',
    data() {
      return {
        style: 'Abstract',
        prompt: '',
        response: null,
        styleOptions: [
            {"name": "Symbol or Pictorial", "key": "symbolOrPictorial"},
            {"name": "Abstract", "key": "abstract"},
            {"name": "Mascot", "key": "mascot"},
            {"name": "Emblem", "key": "emblem"},
            {"name": "3D", "key": "threeD"}
        ],
        isLoading: false,
        taskId: null,
        showModal: false,
        isGenerating: false
      }
    },
    methods: {
        async generateLogo() {
            this.isLoading = true;
            try {
                const encodedPrompt = encodeURIComponent(this.prompt);
                const encodedStyle = encodeURIComponent(this.style);
                const api_url="https://api.ragnarok-dwarf.online:9527"
                const url = `${api_url}/generate-logo?prompt=${encodedPrompt}&style=${encodedStyle}`;
                
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
        },
        async checkLogoStatus() {
            if (this.isGenerating) return;
            
            this.isGenerating = true;
            try {
                const api_url="https://api.ragnarok-dwarf.online:9527"
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
    }
  }
  </script>

<style scoped>
.logo-generator {
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

  