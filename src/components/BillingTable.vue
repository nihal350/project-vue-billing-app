<!-- BillingTable.vue: This component probably displays the products in a table format. -->
<template>
    <div>
      <h3>Cart</h3>
      <table class="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in cart" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.product.name }}</td>
          <td>₹{{ item.product.price.toFixed(2) }}</td>
          <td>
            <input
              type="number"
              v-model.number="item.quantity"
              min="1"
              @change="updateQuantity(index)"
              class="form-control"
              :class="{ 'is-invalid': item.quantity <= 0 }"
            >
            <div v-if="item.quantity <= 0" class="invalid-feedback">
              Quantity must be a positive integer.
            </div>
          </td>
          <td>₹{{ (item.product.price * item.quantity).toFixed(2) }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="removeItem(index)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <strong>Grand Total: ₹{{ grandTotal.toFixed(2) }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  computed: {
    grandTotal() {
      // Calculate the total price of all items in the cart
      return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    },
  },
  methods: {
    updateQuantity(index) {
      if (this.cart[index].quantity <= 0) {
        // Reset quantity to 1 if it's zero or negative
        this.cart[index].quantity = 1;
      }
    },
    removeItem(index) {
      this.cart.splice(index, 1);
    },
  },
};
</script>