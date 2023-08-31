import Calculator from './components/calculator/calculator.component';
import './App.css';
import { useContext } from 'react';
import { OrientationContext } from './context/orientation.context';
import RotateButton from './components/rotateButton/rotateButton.component';


function App() {

  const {portrait, setPortrait} = useContext(OrientationContext);

  const rotationHandler = (event) =>{   
    setPortrait(event.matches);
  }

  const rotateClickHandler = () =>{
    setPortrait(!portrait);
}

  window.matchMedia('(Orientation: portrait)').addEventListener('change',rotationHandler);
  const nonRotatingDevice = window.matchMedia('(pointer: fine)').matches;
  console.log(nonRotatingDevice);
  return (
    <div>
      {
        nonRotatingDevice? <RotateButton className='rotateB' handleClick={rotateClickHandler}/> : null
      }
      <Calculator/>
      <br />
      <p className='signatureText'>-Made with ❤️ by DNIS-</p>
    </div>
  );
}

export default App;
