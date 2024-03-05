<!-- Receipt.vue: This component is responsible for displaying the generated PDF receipt. -->
<template>
    <div class="container mt-3">
      <h2>Receipt</h2>
      <div v-if="receiptContent">
        <pre>{{ receiptContent }}</pre>
        <a :href="pdfUrl" download="receipt.pdf">Download PDF</a>
      </div>
      <div v-else>
        <p>No receipt generated yet.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      receiptContent: String // Pass the receipt content as a prop
    },
    computed: {
      pdfUrl() {
        // Create a data URL for the PDF content
        return `data:application/pdf;base64,${btoa(this.receiptContent)}`;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom styles for the Receipt component here */
  </style>
  