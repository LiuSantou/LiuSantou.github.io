<template>
    <header class="main-header">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Company Logo">
      </div>
      <h1 class="title">Ragnarok Dwarf</h1>
    </header>
  </template>
  
  <script>
  export default {
    name: 'MainHeader'
  }
  </script>
  
  <style scoped>
  .main-header {
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: #f8f8f8;
  }
  
  .logo img {
    height: 50px;
    margin-right: 1rem;
  }
  
  .title {
    font-size: 1.5rem;
    color: #333;
  }
  </style>