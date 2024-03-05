<!-- ViewProductList.vue: This component displays a list of products, possibly for editing/deleting. -->
<template>
    <div>
      <h2>Product List</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>₹{{ product.price}}</td>
            <td>
              <button class="btn btn-sm btn-primary" @click="editProduct(product)">Edit</button>
              <button class="btn btn-sm btn-danger" @click="deleteProduct(product.id)" :disabled="selectedProduct">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      products: Array
    },
    methods: {
      editProduct(product) {
        this.$emit('editProduct', product);
      },
      deleteProduct(productId) {
        this.$emit('deleteProduct', productId);
      }
    }
  };
  </script>
  