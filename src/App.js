import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from'./components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemdetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";





function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer/> 
        <ItemDetailContainer/>
      </main>
      
      

      
      

    </div>
  );
}

export default App;
