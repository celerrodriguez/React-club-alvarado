import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from'./components/NavBar/NavBar.jsx';
import img from "./assets/club-atletico-alvarado.png"
import ItemListContaines from './components/ItemListContainer/ItemListContaines';
import Card from "./components/Card/Card.jsx";


function App() {
  return (
    <div>
      <header>
      <NavBar/>
      <div className='d-flex bg-light'>
        <img src={img} className='img-logo' alt='Logo Club Atlético Alvarado' />
        <h1 className='title'>Alva Shop</h1>
      </div>
      </header>
      <main>
      <ItemListContaines greeting="¡Hola!" />
      <Card/>
      </main>
      
      

      
      

    </div>
  );
}

export default App;
