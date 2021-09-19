import './App.css';
import NavBar from './components/NavBar/NavBar';
import Box from '@material-ui/core/Box';
import Producto from './components/Product/Product';
import ListProducts from './components/ListProducts/ListProducts'

function App() {
  return ( //JSX
    <div className="App">
      <NavBar/>
      <Box borderTop={50} color='#ffffff'></Box>
      <p>
        Tienda de bicicletas de Antonio Amador / React / CODERHOUSE
      </p>
      {/* <Producto title='Bicicleta Mercurio Ranger 27.5"' price="$7,199 mxn"></Producto> */}
      <ListProducts></ListProducts>
    </div>
  );
}

export default App;
