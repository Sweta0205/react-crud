import './App.css';
import Home from './Components/Home';
import AxionsFetch from './Components/AxionsFetch';
import Create from './Components/Create';
import LifeEffect from './Components/LifeEffect';
import Counter from './Components/Counter';

function App() {
  return (
    <div>
      <AxionsFetch />
      <Home />
      <Create />
      <LifeEffect />
      <Counter />
     
    </div>
  );
}

export default App;
