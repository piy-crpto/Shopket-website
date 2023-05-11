import {products} from './constants/data.js'

//schema
import Product from './model/productSchema.js';


const DefaultData = async()=>
{
     try{
        
        // await Product.deleteMany();
        await Product.insertMany(products);
        console.log('Data imports successfully');
     }
     catch(err)
        {
            console.log('Error while inserting the data',err.message);
        }
}


export default DefaultData;

