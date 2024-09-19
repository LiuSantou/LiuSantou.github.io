import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/generator/views/MainLayout.vue'
import ProductList from '@/shop/components/ProductList.vue'
import RdGenerator from '@/generator/views/RdGenerator.vue'
import ShopPortal from '@/ShopPortal.vue'
import PrivacyPolicy from '@/generator/views/PrivacyPolicy.vue'
import TermsOfService from '@/generator/views/TermsOfService.vue'
import AboutUs from '@/generator/views/AboutUs.vue'
import ContactUs from '@/generator/views/ContactUs.vue'

const routes = [
  { path: '/shop', component: ShopPortal },
  { path: '/category/:id', name: 'ProductList', component: ProductList, props: true },
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: RdGenerator },
      { path: 'privacy', component: PrivacyPolicy },
      { path: 'terms', component: TermsOfService },
      { path: 'about', component: AboutUs },
      { path: 'contact', component: ContactUs },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router