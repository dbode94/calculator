import Calculator from './components/calculator/calculator.component';
import './App.css';
import { useContext } from 'react';
import { OrientationContext } from './context/orientation.context';

function App() {

  const {setPortrait} = useContext(OrientationContext);

  const rotationHandler = (event) =>{   
    setPortrait(event.matches);
  }

  window.matchMedia('(Orientation: portrait)').addEventListener('change',rotationHandler);
  
  return (
    <div>
      <Calculator/>
      <br />
      <p className='signatureText'>-Made with ❤️ by DNIS-</p>
    </div>
  );
}

export default App;
