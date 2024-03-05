<!-- AddProduct.vue: This component, based on your previous messages, manages adding and editing products. -->
<template>
    <div>
      <EditProductPart v-if="selectedProduct" :product="selectedProduct" @updateProduct="updateProduct" />
      <AddProductPart v-else @addProduct="addProduct" />
      <ViewProductList :products="products" @editProduct="editProduct" @deleteProduct="deleteProduct" />
    </div>
  </template>
  
  <script>
  import AddProductPart from './AddProductPart.vue';
  import EditProductPart from './EditProductPart.vue';
  import ViewProductList from './ViewProductList.vue';
  
  export default {
    components: {
      AddProductPart,
      EditProductPart,
      ViewProductList
    },
    props: {
      products: Array
    },
    data() {
      return {
        selectedProduct: null
      };
    },
    methods: {
      addProduct(product) {
        this.products.push(product);
      },
      editProduct(product) {
        this.selectedProduct = product;
      },
      updateProduct(updatedProduct) {
        const index = this.products.findIndex(product => product.id === updatedProduct.id);
        if (index !== -1) {
          this.products.splice(index, 1, updatedProduct);
          this.selectedProduct = null;
        }
      },
      deleteProduct(productId) {
      const index = this.products.findIndex(product => product.id === productId);
      this.selectedProduct = null
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    }
    }
  };
  </script>
  