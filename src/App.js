import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from'./components/NavBar/NavBar.jsx';
import img from "./assets/club-atletico-alvarado.png";
import img1 from "./assets/camiseta-titular-2022.png"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Card from './components/Card/Card.jsx';



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
      <ItemListContainer greeting="¡Hola!" />
      <Card image={img1} title={"Camiseta titular 2022"} description={"Camiseta titular adulto Lyon. Campeonato Primera Nacional 2022"} price={9800}/>
      </main>
      
      

      
      

    </div>
  );
}

export default App;
