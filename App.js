import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ComponentButton } from './components/ComponentButton/ComponentButton';
import { ComponentText } from './components/ComponentText/ComponentText';
import { ComponentHeader } from './components/ComponentHeader/ComponentHeader';

function App() {
  return (
	
    <div className="App">	
      <NavBar/>
		<ComponentHeader headerTextName="Cервис по поиску публикаций о компании по его ИНН"/>
      <ComponentText textName="Комплексный анализ публикаций, получение данных в формате PDF на электронную почту."/>
      <ComponentButton variant='contained'>Я Кнопка </ComponentButton>
    </div>

  );
}

export default App;
