<!-- BillingForm.vue: This component likely contains the form for adding products to the cart. -->
<template>
    <div class="container mt-3">
      <div class="form-row">
        <div class="col-md-5 mb-3">
          <label for="productSelect">Select Product:</label>
          <select class="form-control" v-model="selectedProduct">
            <option value="">-- Select Product --</option>
            <option v-for="product in products" :key="product.id" :value="product.id">{{ product.name }}</option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
            <label for="quantityInput">Quantity:</label>
            <input type="number" class="form-control" id="quantityInput" v-model="quantity" min="1">
            <div v-if="quantityError" class="text-danger">{{ quantityError }}</div>
        </div>
        <div class="col-md-3 mb-3 align-self-end">
            <button class="btn btn-primary btn-block" @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  

  <script>
  export default {
    props: {
      products: Array,
      cart: Array,
    },
    data() {
      return {
        selectedProduct: null,
        quantity: 1,
        quantityError: '',
      };
    },
    methods: {
      addToCart() {
        this.quantityError = '';
  
        if (!this.selectedProduct) {
          // Handle case when no product is selected
          return;
        }
  
        const selectedProduct = this.products.find(product => product.id === this.selectedProduct);
        if (!selectedProduct) {
          // Handle case when selected product is not found in the products list
          return;
        }
  
        if (this.quantity < 1) {
          this.quantityError = 'Quantity must be a positive integer.';
          return;
        }
  
        const existingCartItem = this.cart.find(item => item.product.id === selectedProduct.id);
        if (existingCartItem) {
          // If the same product already exists in the cart, update its quantity
          existingCartItem.quantity += this.quantity;
        } else {
          // If the product is not in the cart, add it as a new item
          this.cart.push({
            product: selectedProduct,
            quantity: this.quantity,
          });
        }
  
        // Reset form fields after adding to cart
        this.selectedProduct = null;
        this.quantity = 1;
      },
    },
  };
  </script>
  
  