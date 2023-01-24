const productSchema = require('../models/product')

const products = async (req,res) => {
    const { name } = req.query    
    const allProducts = await productSchema.find({})
    if(allProducts){
    if(name){
        const product = allProducts?.filter((p) => p.name.toLowerCase().includes(name.toLowerCase()))
        product? res.status(200).json(product) : res.status(400).json('Producto inexistente')
    }else{
        res.status(200).json(allProducts)
    }
}
}

module.exports = {
    products
}