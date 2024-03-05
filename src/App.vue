<!-- App.vue: This is the main Vue.js component where you likely have your router and other global components. -->

<script>
import NavBar from './components/NavBar.vue'
import Billing from './components/Billing.vue'
import AddProduct from './components/AddProduct.vue'

export default {
  components: {
    NavBar,
    Billing,
    AddProduct
  },
  data() {
    return {
      selectednavitem: 'Billing',
      products: [
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 19.99 },
        { id: 3, name: 'Product 3', price: 5.99 },
        { id: 4, name: 'Product 4', price: 15.99 },
        { id: 5, name: 'Product 5', price: 7.49 },
        { id: 6, name: 'Product 6', price: 12.99 },
        { id: 7, name: 'Product 7', price: 8.29 },
        { id: 8, name: 'Product 8', price: 11.79 },
        { id: 9, name: 'Product 9', price: 6.59 },
        { id: 10, name: 'Product 10', price: 14.99 }
      ],
      cart: []
    };
  },
  methods: {
    NavClick(name) {
      this.selectednavitem = name;
    },
    addProduct(product) {
      this.products = [...this.products, product];
    },
    addToCart(item) {
      this.cart.push(item);
    },
   
  }
}
</script>

<template>
  <section class="container mt-5 pt-5">
    <NavBar @evnt="NavClick" :a="selectednavitem" />
    <component :is="selectednavitem" :products="products" :cart="cart" @addToCart="addToCart" @addProduct="addProduct" @editProduct="editProduct" @deleteProduct="deleteProduct"/>
  </section>
</template>