import mongoose from 'mongoose';
import dotenv from 'dotenv';





export const Connection = async(URL)=>
{   
   
// console.log(USERNAME)
    // const URL =  `mongodb+srv://${user}:${pass}@commerceweb.4avmsvr.mongodb.net/?retryWrites=true&w=majority`
     try{  

            await mongoose.connect(URL,{
                useUnifiedTopology:true,
                useNewUrlParser:true
            });
            console.log('DATA base connected successfully')
     }catch(err){
        console.log(`Error while connecting with the database `, err.message);
     }
}


export default Connection