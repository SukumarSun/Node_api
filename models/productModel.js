const mongoose=require("mongoose")

const productSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required: [true, "please enter product name"],
            unique: true
        },
        quantity:{
            type: Number, 
            required: true,
        },
        price:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:true,
        }
    },
    {
        timestamps: true 
    }
)

const Product = mongoose.model("Product", productSchema)

module.exports= Product