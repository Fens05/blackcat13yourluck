const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll(res.send('product'))
  
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
 res.send('product_id')
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
