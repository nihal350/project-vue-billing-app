const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://nihal350:ninini@cluster0.bpsuzdw.mongodb.net/product-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model('Product', {
  name: String,
  price: Number,
  // Add more fields as needed
});

app.use(express.json());

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
