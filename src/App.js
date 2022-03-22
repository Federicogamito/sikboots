import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App(props) {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer>
      </ItemListContainer>
    </div>
  );
}

export default App;
