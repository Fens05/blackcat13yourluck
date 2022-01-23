const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tangs` endpoint
// find all tags
router.get('/', (req, res) =>{
res.send('tag')
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  res.send("hello")
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  
});

router.put('/:id', (req, res) => {
 res.send('tag')
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
