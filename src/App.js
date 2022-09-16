import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>  
  );
};

export default App;
