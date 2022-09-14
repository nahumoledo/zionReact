import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <NavBar  />
      <header className="App-header">
      <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
