import { useEffect } from 'react';

import NavBar from './NavBar';
 import Banner from './Banner';
 import Slide from './Slide';
 import { styled,Box } from '@mui/material';

 import { getProducts } from '../../redux/actions/ProductActions';

 import { useDispatch,useSelector } from 'react-redux';
 import MidSlide from './MidSlide';

 import MidSection from './MidSection';


const Component=styled(Box)`
padding: 10px 10px;
background: #F2F2F2`


const Home=()=>{

      const getProd  = useSelector(state => state.getProducts);   // this is from returning value of
                                                                     // product actions component not getProduct function
      const {products}=getProd;


    

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch]);

    return(
        <>
       
        <NavBar/>
     <Component> 
        <Banner/> 
                <MidSlide products={products} />

                <MidSection />
               <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />


                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                /> 

     </Component> 
        
        </>
    )
}
export default Home;