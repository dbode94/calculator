import Button from "../button/button.component";
import "./buttonPanel.style.scss"
import { useContext } from "react";
import { ReactComponent as Arrow} from "../../assets/left-arrow-svgrepo-com.svg";
import { CalculationContex } from "../../context/calculation.context";
import {validFormula, executeFormula, deleteLastChar, oppositeNumber} from '../../utils/calculation.ustil'
import { OrientationContext } from "../../context/orientation.context";




const ButtonPanel = () =>{
  const {portrait} = useContext(OrientationContext)
  const {currentCalculation,setCurrentCalculation} = useContext(CalculationContex);
  
  const handleClick = (event) => {

    switch(event.target.value){
      case 'c':
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
        setCurrentCalculation(executeFormula(currentCalculation));
        break;
      case '+/-':
        if(currentCalculation === '0') setCurrentCalculation('(-');
        else
          setCurrentCalculation(oppositeNumber(currentCalculation));
        break;
      default:
        if(currentCalculation === '0') setCurrentCalculation(event.target.value);
        else if(currentCalculation[currentCalculation.length - 1] === ')')
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
          <Button value={'√'} key={16} onClick = {handleClick}/> 
          <Button value={'⬅'} key={20} buttonType={'specialButton'} onClick = {handleClick}/>
          <Button value={'+'} key={12} onClick = {handleClick}/>
          <Button value={'-'} key={13} onClick = {handleClick}/> 
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
      <div className="oprationButton-container">
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