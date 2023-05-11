import axios from 'axios';

// const URL='http://localhost:8000';
const URL='';


export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${URL}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error.response;
    }
}
export const authenticateSignup=async(data)=>{

      console.log(data);
    try{
         return await axios.post(`${URL}/signup`,data);
        // console.log('no error');
    }catch(error){
        console.log('Error while calling signup api ',error);
    }
}



export const getProductById = async (id) => {
    try {
        return await axios.get(`${URL}/product/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
    }
}

export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error', error);
    }
}