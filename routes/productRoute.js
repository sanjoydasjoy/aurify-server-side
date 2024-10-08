import express from "express"
import  {addProduct,listProducts,removeProducts,singleProductInfo} from '../controllers/productController.js'

const productRouter = express.Router()

productRouter.post('/add',addProduct)
productRouter.post('/remove',removeProducts)
productRouter.post('/single',singleProductInfo)
productRouter.get('/list',listProducts)


export default productRouter