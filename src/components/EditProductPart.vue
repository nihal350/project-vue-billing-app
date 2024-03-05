<!-- EditProductPart.vue: This component might handle editing individual products. -->
<template>
    <div v-if="product">
      <h2>Edit Product</h2>
      <form @submit.prevent="updateProduct">
        <div class="form-group">
          <label for="productName">Product Name:</label>
          <input type="text" class="form-control" id="productName" v-model="updatedProduct.name" disabled>
        </div>
        <div class="form-group">
          <label for="productPrice">Product Price:</label>
          <input type="number" step="0.01" class="form-control" id="productPrice" v-model="updatedProduct.price" required>
        </div>
        <button type="submit" class="btn btn-primary">Update Product</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object
    },
    data() {
      return {
        updatedProduct: {
          id: this.product.id,
          name: this.product.name,
          price: this.product.price
        }
      };
    },
    methods: {
      updateProduct() {
        this.$emit('updateProduct', this.updatedProduct);
      }
    }
  };
  </script>
  