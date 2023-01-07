const { categoryModel } = require('../models/index')

const allCategories = async (req, res) => {
    const category = await categoryModel.find({})
    if(category){
        res.status(200).json(category)
    }else {
        res.status(400).json({msj: 'something went wrong'})
    }
}

const createCategory = async (req, res) => {
    const { name } = req.body
    if(name){
        const category = await categoryModel.find({})
        const filter = category.filter((f) => f.name === name)
        if(filter === []) {
            res.status(400).json({msj: 'the category already exists'})
        }else {
            try{
                const newCategory = new categoryModel({
                    name: name,
                })
                const result = await newCategory.save()
                res.status(200).json({msj: 'category successfully created'})
            }catch(error) {
                res.status(400).json({msj: 'createCategory', error: error})
            }
        }
    }else {
    } 
}

module.exports = {
    allCategories,
    createCategory
}