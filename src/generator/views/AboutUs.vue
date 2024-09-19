<template>
    <div class="about-page">
      <h1>{{ $t('message.aboutUs.title') }}</h1>
      <div class="content">
      <p>{{ $t('message.aboutUs.intro') }}</p>
      <h2>{{ $t('message.aboutUs.mission.title') }}</h2>
      <p>{{ $t('message.aboutUs.mission.content') }}</p>
      <h2>{{ $t('message.aboutUs.background.title') }}</h2>
      <p>{{ $t('message.aboutUs.background.content') }}</p>
      <h2>{{ $t('message.aboutUs.approach.title') }}</h2>
      <p>{{ $t('message.aboutUs.approach.content') }}</p>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
    computed: {
    }
  }
  </script>

<style scoped>
.about-page {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #e0e0e0;
  min-height: 69vh;
  font-size: 18px;
}
</style>