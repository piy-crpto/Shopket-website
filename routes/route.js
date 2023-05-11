import express from "express";
import { userSignup,userLogin } from "../controller/user-controller.js";
import { getProductById, getProducts } from "../controller/product-controller.js";
import { addPaymentGateway, paymentResponse } from "../controller/payment-controller.js";
// import { addPaymentGateway } from "../controller/payment-controller.js";

// import { addPaymentGateway } from '../controller/payment-controller.js';
// paymentResponse

const router = express.Router();
//  console.log('in route folder')
router.post('/signup', userSignup);
router.post('/login', userLogin);

//  console.log('out route folder')



router.get('/products', getProducts);
router.get('/product/:id', getProductById);


router.post('/payment',addPaymentGateway );
router.post('/callback', paymentResponse);
export default router;











// import express from  'express';
// import { getProductById, getProducts } from '../controller/product-controller.js';
// import { userSignUp, userLogIn } from '../controller/user-controller.js';
// // import { addItemInCart } from '../controller/cart-controller.js';
// import { addPaymentGateway, paymentResponse } from '../controller/payment-controller.js';

// const router = express.Router();

// //login & signup
// router.post('/signup', userSignUp);
// router.post('/login', userLogIn);

// router.get('/products', getProducts);
// router.get('/product/:id', getProductById);

// // router.post('/cart/add', addItemInCart);

// router.post('/payment', addPaymentGateway);
// router.post('/callback', paymentResponse);

// export default router;