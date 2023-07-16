// latest es 6
import express from 'express'
  import bodyParser from 'body-parser';

 import cors from 'cors';

 import dotenv from 'dotenv'
 import { v4 as uuid } from 'uuid';


  import Connection from './database/db.js';
 
  import DefaultData from './default.js'
    import Routes from './routes/route.js'

   dotenv.config();
const app = express();

const PORT =  8000;

 


  const USERNAME = process.env.DB_USERNAME;
   const PASSWORD = process.env.DB_PASSWORD;
  //  console.log(USERNAME);

//  Connection(USERNAME,PASSWORD);


// const URL =  process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@commerceweb.4avmsvr.mongodb.net/?retryWrites=true&w=majority`

Connection(USERNAME,PASSWORD);


// f(process.env.NODE_ENV==='production')
// {
//   app.use(express.static('client/build'));
// }i
app.listen(PORT,()=>
{
    console.log(`server is running on port ${PORT}`);
})

  DefaultData();


 app.use(bodyParser.json({extended:true}));    // here we have to use body request in json format 
 app.use(bodyParser.urlencoded({extended:true}));    // here we are  parsing url 
 app.use(cors());
 app.use('/',Routes);





 export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID
paytmParams['TXN_AMOUNT'] = '100',
// paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['CALLBACK_URL'] = 'callback'

paytmParams['EMAIL'] = 'kunaltyagi@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'





//  "client-install":"cd client && npm install",
//     "client-build":"cd client && npm run build",
//     "heroku-postbuild":"npm run client install && npm run client-build"



















