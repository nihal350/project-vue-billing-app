<!-- AddProductPart.vue: This component probably contains the form for adding/editing products. -->
<template>
    <div>
      <h2>Add Product</h2>
      <form @submit.prevent="addProduct">
        <div class="form-group">
          <label for="productName">Product Name:</label>
          <input type="text" class="form-control" id="productName" v-model="productName" required>
        </div>
        <div class="form-group">
          <label for="productPrice">Product Price:</label>
          <input type="number" step="0.01" class="form-control" id="productPrice" v-model="productPrice" required>
        </div>
        <div class="text-right">
            <button type="submit" class="btn btn-primary">Add Product</button>
        </div>
      <!-- Display error message if product name is empty -->
      <div v-if="errors.name" class="text-danger">{{ errors.name }}</div>
      <!-- Display error message if product price is invalid -->
      <div v-if="errors.price" class="text-danger">{{ errors.price }}</div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productName: '',
      productPrice: '',
      errors: {
        name: '',
        price: '',
      },
    };
  },
  methods: {
    addProduct() {
      // Validate product name and price
      this.errors.name = this.productName ? '' : 'Product name is required.';
      this.errors.price = this.productPrice > 0 ? '' : 'Invalid product price.';

      if (!this.errors.name && !this.errors.price) {
        // Product is valid, emit addProduct event and reset form fields
        const newProduct = {
          name: this.productName,
          price: parseFloat(this.productPrice),
        };
        this.$emit('addProduct', newProduct);
        this.productName = '';
        this.productPrice = '';
      }
    },
  },
};
</script>