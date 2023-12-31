
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './context/DataProvider';
import { Box } from '@mui/material'
import DetailView from './components/item-detail/DetailView';
import Cart from './components/Cart/Cart';
// import Cart from './components/Cart/Cart';


function App() {
  return (
    <DataProvider>
  <BrowserRouter>
 <Header/>
 <Box style={{marginTop:54}}>
  


          <Routes>
              <Route path= '/' element={<Home />} />
              {/* <Route path= '/cart' element={<Cart />} /> */}

                             {/* :id -> means it is variable */}
              <Route path= '/product/:id' element={<DetailView />} />
              <Route path= '/cart' element={  <Cart />} />
             
             
            </Routes>
 </Box>

 </BrowserRouter>
    </DataProvider>
    
  );
}

export default App;
