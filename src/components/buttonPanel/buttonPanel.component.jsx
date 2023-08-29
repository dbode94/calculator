import Button from "../button/button.component";
import "./buttonPanel.style.scss"
import { useContext } from "react";
import { ReactComponent as Arrow} from "../../assets/left-arrow-svgrepo-com.svg";
import { ReactComponent as Square} from "../../assets/superscript-x-elevated-to-the-power-of-two-svgrepo-com.svg";

import { CalculationContex } from "../../context/calculation.context";
import {validFormula, executeFormula, deleteLastChar, oppositeNumber} from '../../utils/calculation.ustil'
import { OrientationContext } from "../../context/orientation.context";


//I do not like it - Highly chance it will be refactored
const ButtonPanel = () =>{
  const {portrait} = useContext(OrientationContext)
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
        if(!isNaN(currentCalculation[currentCalculation.length - 1]) && !isResult)
          setCurrentCalculation(currentCalculation + '*(');
        else if(isNaN(currentCalculation[currentCalculation.length - 1]))
          setCurrentCalculation(currentCalculation + '(');
        else if(isResult){
          setCurrentCalculation('(');
          setIsResult(false);
        }          
        else alert('wrong syntax');
        break

      case '+/-':
        if(currentCalculation === '0') setCurrentCalculation('(-');
        else
          setCurrentCalculation(oppositeNumber(currentCalculation));
        break;

      case '√':
        console.log(isResult)
        if((!isNaN(currentCalculation[currentCalculation.length - 1]) || currentCalculation[currentCalculation.length - 1] === ')') && !isResult)
          setCurrentCalculation(currentCalculation + '*' + event.target.value + '(');
        else if(isResult){
          setCurrentCalculation(event.target.value + '(');    
          setIsResult(false)
        }    
        else setCurrentCalculation(currentCalculation + event.target.value + '(');
        break;

      case 'x^y': 
        if((!isNaN(currentCalculation[currentCalculation.length - 1]) && !isResult ) || currentCalculation[currentCalculation.length -1] === ')')
          setCurrentCalculation(currentCalculation+ '^(');
        else alert('wrong syntax');
        setIsResult(false);
        break;

      case 'square':
        if((!isNaN(currentCalculation[currentCalculation.length - 1]) && !isResult ) || currentCalculation[currentCalculation.length -1] === ')')
          setCurrentCalculation(currentCalculation+ '^(2)');
        else alert('wrong syntax');
        setIsResult(false);
        break;

      case '|x|':
        setIsResult(false);
        if(isResult)
          setCurrentCalculation('abs(');
        else if(!isNaN(currentCalculation[currentCalculation.length - 1]) || currentCalculation[currentCalculation.length - 1] === ')')setCurrentCalculation(currentCalculation + "*abs(");
        else setCurrentCalculation(currentCalculation + "abs(");
        break;
      
      case 'log':
        setIsResult(false);
        if(isResult)
          setCurrentCalculation('log(');
        else if(!isNaN(currentCalculation[currentCalculation.length - 1]) || currentCalculation[currentCalculation.length - 1] === ')') setCurrentCalculation(currentCalculation + "*log(");
        else setCurrentCalculation(currentCalculation + "log(");
        break;

      default:
        if(currentCalculation === '0' || isResult) {
          setIsResult(false)
          if(event.target.value === '.')
          setCurrentCalculation(currentCalculation + event.target.value);
          else setCurrentCalculation(event.target.value);
        }
        else if(currentCalculation[currentCalculation.length - 1] === ')' && [0,1,2,3,4,5,6,7,8,9].includes(Number(event.target.value)))
          setCurrentCalculation(currentCalculation + '*' +event.target.value)            
        else
          setCurrentCalculation(currentCalculation + event.target.value)            
        break;
    }
  }
  return( 
    <div className="buttonPanel-container">
      {
        !portrait? <div className="otherOperations-container">
          <Button value={'√'} key={21} onClick = {handleClick}/> 
          <Button value={'x^y'} key={22} onClick = {handleClick}/>
          <Button value={'square'} key={23} buttonType={'specialButton'} onClick = {handleClick}><Square style={{pointerEvents: 'none'}}/></Button> 
          <Button value={'|x|'} key={24} onClick = {handleClick}/>
          <Button value={'log'} key={25} onClick = {handleClick}/> 
        </div> : null
      }
      <div className={portrait? "numberButton-container": "numberButton-container landscapeNumber-containe"}>
        {
          Array.from(Array(9)).map((_,i) =>{
            return <Button value={i+1} key={i+1} onClick = {handleClick}/>
          })
        }           
        <Button value={"+/-"} key={10} onClick = {handleClick}/> {/*change this*/}
        <Button value={0} key={0} onClick = {handleClick}/>
        <Button value={'.'} key={11} onClick = {handleClick}/>
      </div>   
      <div className={portrait? "oprationButton-container" : "oprationButton-container landscapeOperation-container"}>
          <Button value={'c'} key={16} buttonType={'specialButton'} onClick = {handleClick}/> 
          <Button value={'⬅'} key={20} buttonType={'specialButton'} onClick = {handleClick}><Arrow style={{pointerEvents: 'none'}}/></Button> 
          <Button value={'+'} key={12} onClick = {handleClick}/>
          <Button value={'-'} key={13} onClick = {handleClick}/> 
          <Button value={'*'} key={14} onClick = {handleClick}/> 
          <Button value={'/'} key={15} onClick = {handleClick}/>
          <div className="parenthesisButton-container">
            <Button value={'('} key={17} onClick = {handleClick}/> 
            <Button value={')'} key={18} onClick = {handleClick}/> 
          </div>      
          <Button value={'='} key={19} onClick = {handleClick}/> 
      </div>
    </div>
  )
}

export default ButtonPanel;