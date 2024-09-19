<template>
    <div class="policy-page">
      <h1>{{ $t('message.privacyPolicy') }}</h1>
      <section v-for="(section, index) in sections" :key="index">
        <h2>{{ $t(`message.privacyPolicyContent.section${index + 1}.title`) }}</h2>
        <p v-for="(paragraph, pIndex) in section.paragraphs" :key="pIndex">
          {{ $t(`message.privacyPolicyContent.section${index + 1}.p${pIndex + 1}`) }}
        </p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PrivacyPolicy',
    data() {
        return {
            sections: [
                { paragraphs: [1, 2] },
                { paragraphs: [1, 2] },
                { paragraphs: [1] },
                { paragraphs: [1] },
                { paragraphs: [1] }
            ]
        }
    },
    computed: {
    }
  }
  </script>

<style scoped>
.policy-page {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #e0e0e0;
  min-height: 69vh;
  font-size: 18px;
}
</style>