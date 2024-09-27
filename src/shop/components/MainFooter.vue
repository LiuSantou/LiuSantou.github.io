<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>{{ $t('shop.aboutUs') }}</h3>
        <p>{{ $t('shop.aboutUsDescription') }}</p>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="footer-section">
        <h3>{{ $t('shop.quickLinks') }}</h3>
        <ul>
          <li><router-link to="/">{{ $t('shop.home') }}</router-link></li>
          <li><router-link to="/products">{{ $t('shop.products') }}</router-link></li>
          <li><router-link to="/contact">{{ $t('shop.contact') }}</router-link></li>
          <li><router-link to="/privacy">{{ $t('shop.privacyPolicy') }}</router-link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>{{ $t('shop.contactUs') }}</h3>
        <p>{{ $t('shop.shopUrl') }}: https://mercari-shops.com/shops/BhS5pWgQ78xT8ZDctLCgLe</p>
        <p>{{ $t('shop.phone') }}: 080-3417-8322</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>{{ $t('shop.copyright', { year: 2024 }) }}</p>
      <div class="trust-badges">
        <font-awesome-icon icon="lock" />
        <font-awesome-icon icon="check-circle" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    subscribeNewsletter() {
      // ニュースレター登録のロジックをここに実装
      console.log('Subscribed:', this.email);
      this.email = '';
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: rgba(42, 42, 42, 0.8);
  color: white;
  padding: 40px 0 20px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  flex: 1;
  margin: 0 20px;
  min-width: 200px;
}

.footer-section h3 {
  margin-bottom: 15px;
  font-size: 1.2em;
}

.footer-section ul {
  list-style-type: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #ddd;
  text-decoration: none;
}

.social-icons a {
  color: white;
  font-size: 1.5em;
  margin-right: 15px;
}

.newsletter-form {
  display: flex;
  margin-top: 10px;
}

.newsletter-form input {
  flex-grow: 1;
  padding: 8px;
  border: none;
  border-radius: 4px 0 0 4px;
}

.newsletter-form button {
  padding: 8px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.footer-bottom {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #555;
}

.trust-badges svg {
  height: 30px;
  margin: 0 10px;
}
</style>
