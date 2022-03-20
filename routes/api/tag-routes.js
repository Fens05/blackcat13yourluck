const router = require('express').Router();
const { Tag, Product, } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  
  Tag.findAll({
      include: [
        {
          model: Product,
          attributes: ['id', 
          'product_name', 
          'price', 
          'stock',
          'category_id']
        }
      ]
    })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });
  // router.get('/:id', (req, res) => {
//   // find a single tag by its `id`
//   // be sure to include its associated Product data

  router.get('/:id', (req, res) => {
    
    Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Product,
          attributes: ['id', 
          'product_name', 
          'price', 
          'stock', 
          'category_id']
        }
      ]
    })
    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: 'Nope no tag with suposed id'})
      }
      res.json(dbTagData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });





router.post('/', (req, res) => {
  //create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err =>{
    console.log();
      res.status(500).json(err);
    
  })
});





// router.put('/:id', (req, res) => {
//   // update a tag's name by its `id` value
// });

// router.delete('/:id', (req, res) => {
//   // delete on tag by its `id` value
// });

module.exports = router;
