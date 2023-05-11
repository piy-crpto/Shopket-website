import Products from "../model/productSchema.js";
;
export const getProducts = async (request, response) => {
    try {
        const products = await Products.find({});

        response.json(products);
    }catch (error) {

    }
}



export const getProductById = async (request, response) => {
    try {
        const product = await Products.findOne({ 'id': request.params.id });
        response.json(product);
    }catch (error) {

    }
}























