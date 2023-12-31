import "./buttonPanel.style.scss"
import { useContext } from "react";
import AdvancedOperationsButtons from "../advancedOperationsButtons/advancedOpertaionsButtons.component";
import NumberButtons from "../numberButtons/numberButtons.component";
import BasicOprationsButtons from "../basicOperationsButtons/basicOprationsButtons.component";
import { CalculationContex } from "../../context/calculation.context";
import {validFormula, executeFormula, deleteLastChar, oppositeNumber} from '../../utils/calculation.ustil'
import { OrientationContext } from "../../context/orientation.context";


//Refactoring needed
const ButtonPanel = () =>{
  const {portrait, setPortrait} = useContext(OrientationContext)
  const {currentCalculation,setCurrentCalculation, isResult, setIsResult} = useContext(CalculationContex);
  
  const handleClick = (event) => {

    switch(event.target.value){
      
      case 'c':
        setIsResult(true);
        setCurrentCalculation('0');
        break;

      case '⬅':
        setCurrentCalculation(deleteLastChar(currentCalculation))
        break;

      case '=':
        if(!validFormula(currentCalculation)){
          alert('Syntax Error - Please correct syntax');
          break;
        }
        setIsResult(true);
        setCurrentCalculation(executeFormula(currentCalculation));
        break;

      case '(':
        if(currentCalculation.length < 56){
          if(!isNaN(currentCalculation[currentCalculation.length - 1]) && !isResult)
            setCurrentCalculation(currentCalculation + '*(');
          else if(isNaN(currentCalculation[currentCalculation.length - 1]))
            setCurrentCalculation(currentCalculation + '(');
          else if(isResult){
            setCurrentCalculation('(');
            setIsResult(false);
          }          
          else alert('wrong syntax');
        }
        break

      case '+/-':
        if(currentCalculation.length < 56){
          if(currentCalculation === '0') setCurrentCalculation('(-');
          else
            setCurrentCalculation(oppositeNumber(currentCalculation));
        }
        break;

      case '√':
        if(currentCalculation.length < 56){
          console.log(isResult)
          if((!isNaN(currentCalculation[currentCalculation.length - 1]) || currentCalculation[currentCalculation.length - 1] === ')') && !isResult)
            setCurrentCalculation(currentCalculation + '*' + event.target.value + '(');
          else if(isResult){
            setCurrentCalculation(event.target.value + '(');    
            setIsResult(false)
          }    
          else setCurrentCalculation(currentCalculation + event.target.value + '(');
        }
        break;

      case 'x^y':
        if(currentCalculation.length < 56){
          if((!isNaN(currentCalculation[currentCalculation.length - 1]) && !isResult ) || currentCalculation[currentCalculation.length -1] === ')')
            setCurrentCalculation(currentCalculation+ '^(');
          else alert('wrong syntax');
          setIsResult(false);
        }
        break;

      case 'square':
        if((!isNaN(currentCalculation[currentCalculation.length - 1]) && !isResult ) || currentCalculation[currentCalculation.length -1] === ')')
          setCurrentCalculation(currentCalculation+ '^(2)');
        else alert('wrong syntax');
        setIsResult(false);
        break;

      case '|x|':
        if(currentCalculation.length < 56){
          setIsResult(false);
          if(isResult)
            setCurrentCalculation('abs(');
          else if(!isNaN(currentCalculation[currentCalculation.length - 1]) || currentCalculation[currentCalculation.length - 1] === ')')setCurrentCalculation(currentCalculation + "*abs(");
          else setCurrentCalculation(currentCalculation + "abs(");
        } 
        break;
      
      case 'log':
        if(currentCalculation.length < 56){
          setIsResult(false);
          if(isResult)
            setCurrentCalculation('log(');
          else if(!isNaN(currentCalculation[currentCalculation.length - 1]) || currentCalculation[currentCalculation.length - 1] === ')') setCurrentCalculation(currentCalculation + "*log(");
          else setCurrentCalculation(currentCalculation + "log(");
        }
        break;

      default:
        if(currentCalculation.length < 56){
          if(currentCalculation === '0' || isResult) {
            setIsResult(false)
            if(event.target.value === '.')
            setCurrentCalculation(currentCalculation + event.target.value);
            else setCurrentCalculation(event.target.value);
          }
          else if(currentCalculation[currentCalculation.length - 1] === ')' && [0,1,2,3,4,5,6,7,8,9].includes(Number(event.target.value)))
            setCurrentCalculation(currentCalculation + '*' +event.target.value)            
          else setCurrentCalculation(currentCalculation + event.target.value)            
        }
        break;
    }
  }

  return( 
    <div className="buttonPanel-container">
      {
        !portrait? <AdvancedOperationsButtons handleClick={handleClick}/>: null
      }
      <NumberButtons handleClick={handleClick} isPortrait={portrait}/>
      <BasicOprationsButtons handleClick={handleClick} isPortrait={portrait}/>
    </div>
  )
}

export default ButtonPanel;