import './App.css';
import NavBar from './components/NavBar/NavBar';
import Box from '@material-ui/core/Box';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return ( //JSX
    <div className="App">
      <NavBar/>
      <Box borderTop={50} color='#ffffff'></Box>
      <p>
        Tienda de bicicletas de Antonio Amador / React / CODERHOUSE
      </p>
      {/* <ItemListContainer greeting={"Sección Contenedor de productos"}></ItemListContainer> */}
      <ItemDetailContainer></ItemDetailContainer>
    </div>
  );
}

export default App;
