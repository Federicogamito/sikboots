import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App(props) {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer>
      </ItemListContainer>
      <ItemDetailContainer/>
      </div>

  );
}

export default App;
