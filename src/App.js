import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from'./components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { CartProvider } from './store/cartContext';
import CartWidget from './components/CartWidget/CartWidget';





function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
          <Route path='categorias/:idCategory' element={ <ItemListContainer/>}/>
          <Route path='cart' element={ <CartWidget/>}/>
        </Routes>
        
      </BrowserRouter>
      
      
     
      
      

      
      

    </div>
  );
}

export default App;
