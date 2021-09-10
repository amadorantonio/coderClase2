import './App.css';
import NavBar from './components/NavBar/NavBar';
import Box from '@material-ui/core/Box';

function App() {
  return ( //JSX
    <div className="App">
      <NavBar/>
      <Box borderTop={50} color='#ffffff'></Box>
      <p>
        Tienda de bicicletas de Antonio Amador / React / CODERHOUSE
      </p>
    </div>
  );
}

export default App;
