import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ComponentButton } from './components/ComponentButton/ComponentButton';
import { ComponentText } from './components/ComponentText/ComponentText';
import { ComponentHeader } from './components/ComponentHeader/ComponentHeader';

function App() {
  return (
	
    <div className="App">
		
      <NavBar/>
		<ComponentHeader/>
      <ComponentText/>
      <ComponentButton variant='contained'>Я Кнопка </ComponentButton>
    
    </div>

  );
}

export default App;
