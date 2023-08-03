import Button from "../button/button.component";
import "./buttonPanel.style.scss"
import { useContext } from "react";
import { CalculationContex } from "../../context/calculation.context";
import {validFormula,executeFormula} from '../../utils/calculation.ustil'




const ButtonPanel = () =>{
    const {currentCalculation,setCurrentCalculation} = useContext(CalculationContex);
    
    const handleClick = (event) => {

      switch(event.target.value){
        case 'c':
          setCurrentCalculation('0');
          break;
        case '=':
          // if(!validFormula()){
          //   alert('Syntax Error');
          //   break;
          // }
          console.log(validFormula(currentCalculation));
          setCurrentCalculation(executeFormula(currentCalculation));
          break;
        case '+/-':
          //converts the latest number into its oppositive number.
          break;
        default:
          if(currentCalculation === '0') setCurrentCalculation(event.target.value);
          else setCurrentCalculation(currentCalculation + event.target.value)
          break
      }
    }
    return( 
        //use a for to generate all the button in one go.
      <div className="buttonPanel-container">
          <div className="numberButton-container">
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