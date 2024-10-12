import { v2 as cloudinary } from "cloudinary"
import productModel from  '../models/productModel.js'


// function for adding product
const addProduct = async (req,res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller, date} = req.body

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];
        const image5 = req.files.image5 && req.files.image5[0];

        const images = [image1,image2,image3,image4,image5].filter((item)=> item !== undefined)

        const imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url
            })
        )

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes), //  String to Array
            bestseller: bestseller === "true" ? true : false, 
            image: imagesUrl,
            date: Date.now(),
        }

        console.log(productData)
        const product = new productModel(productData)
        await product.save()

        res.json({
            success: true,
            message: "Product Added"
            /*  data: {
                name,
                description,
                price,
                category,
                subCategory,
                sizes,
                bestseller,
                imagesUrl, 
            } */
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:error.message})
    }
}

//function for list product
const listProducts = async (req,res) => {
    try {
        const products = await productModel.find({});
        res.json({success:true,products})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// function for removing product
const removeProduct = async (req,res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({sucess:true,message:"Product Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// function for single product info
const singleProduct = async (req,res) => {
    try {
        const {productId} = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})
    } catch (error) {
        
    }
}

export {listProducts,addProduct,removeProduct,singleProduct}