
import './App.css';
import Home from './Home';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Create from './Create';
import Update from './Update';
import Reducers from './Reducers';
import Quote from './Quote';




function App() {

  const store = configureStore({
    reducer:{
      todos:Reducers

    }
  })
  return (
  
    <Provider store={store}>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        <Route path='/edit/:id' element={<Update></Update>}></Route>
      </Routes>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
