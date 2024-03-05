<!-- Billing.vue: This component handles the billing functionality, including the form, table, and receipt generation. -->
<template>
    <div>
      <h2>Billing</h2>
      <!-- ... (existing content remains unchanged) ... -->
      <BillingForm @addToCart="addToCart" :products="products" :cart="cart" />
      <BillingTable :cart="cart" @updateQuantity="updateQuantity" @removeItem="removeItem" />
      <button class="btn btn-primary mt-3" @click="checkout">Checkout</button>
      <div v-if="showReceipt">
        <Receipt :receiptContent="receiptContent" />
      </div>
    </div>
  </template>
  
  <script>
  import BillingForm from './BillingForm.vue';
  import BillingTable from './BillingTable.vue';
  import Receipt from './Receipt.vue';
  import jsPDF from 'jspdf';
  
  export default {
    components: {
      BillingForm,
      BillingTable,
      Receipt,
    },
    props: {
      products: Array,
      cart: Array,
    },
    data() {
      return {
        receiptContent: null,
        showReceipt: false,
      };
    },
    computed: {
      grandTotal() {
        return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
      },
    },
    methods: {
      addToCart(item) {
        const existingCartItem = this.cart.find(cartItem => cartItem.product.id === item.product.id);
        if (existingCartItem) {
          existingCartItem.quantity += item.quantity;
        } else {
          this.cart.push(item);
        }
      },
      updateQuantity(payload) {
        const { index, quantity } = payload;
        this.cart[index].quantity = quantity;
      },
      removeItem(index) {
        this.cart.splice(index, 1);
      },
      checkout() {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text('Receipt', 20, 10);
  doc.setFontSize(12);

  let y = 30;
  this.cart.forEach((item, index) => {
    const total = (item.product.price * item.quantity).toFixed(2);
    doc.text(`${index + 1}. ${item.product.name} - Quantity: ${item.quantity} - Price: $${total}`, 20, y);
    y += 10;
  });

  y += 10;
  doc.setFontSize(14);
  doc.text(`Grand Total: $${this.grandTotal.toFixed(2)}`, 20, y);

  const pdfBlob = doc.output('blob'); // Create a Blob object for the PDF content
  const pdfUrl = URL.createObjectURL(pdfBlob); // Create a URL for the Blob object

  // Create a download link
  const downloadLink = document.createElement('a');
  downloadLink.href = pdfUrl;
  downloadLink.download = 'receipt.pdf'; // Set the file name for the downloaded PDF

  // Append the download link to the document body
  document.body.appendChild(downloadLink);

  // Programmatically trigger a click event on the download link
  downloadLink.click();

  // Clean up: remove the download link and revoke the URL
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(pdfUrl);

//   Optionally, set the receipt content to the generated PDF data URL
//   this.receiptContent = pdfUrl;
//   this.showReceipt = true;
}
    },
  };
  </script>
  