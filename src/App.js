import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemList/ItemList';

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
