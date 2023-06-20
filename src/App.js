import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ComponentButton } from './components/ComponentButton/ComponentButton';

function App() {
  return (
    <div className="App">
      <NavBar />
    
      // Здесь мы вызвали кнопку и то что передается "Я кнопка" это по сути как дитя children
      <ComponentButton variant='contained'>Я Кнопка </ComponentButton>
    
    </div>
  );
}

export default App;
