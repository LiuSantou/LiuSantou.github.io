<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>About Us</h3>
          <p>Welcome to the Ragnarok Dwarf—where the future is now, and it’s incredibly weird!</p>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@ragnarokdwarf.com</p>
          <p>Phone: 080-3417-8322</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Ragnarok Dwarf. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'MainFooter'
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .footer-section {
    margin: 10px;
  }
  
  .footer-section h3 {
    margin-bottom: 10px;
  }
  
  .footer-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 5px;
  }
  
  .footer-section a {
    color: white;
    text-decoration: none;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid #555;
  }
  </style>