const express= require("express")
const Product=require('../models/productModel')
const router=express.Router()
const {getProducts,getProduct, updateProduct,createProduct,deleteProduct}=require('../controllers/productController')

router.get('/',getProducts)
 
 
 router.get('/:id',getProduct)
 
 
 router.put('/:id',updateProduct)
 
 router.post('/', createProduct)
 
  router.delete('/:id', deleteProduct)

  module.exports=router