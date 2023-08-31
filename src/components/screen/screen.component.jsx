import "./screen.style.scss"
import { useContext } from "react";
import { CalculationContex } from "../../context/calculation.context";

const Screen = ({formula, fontSize}) =>{
    const {currentCalculation} = useContext(CalculationContex);
    return(
        <div className="screen-container">
            <p className={currentCalculation.length > 9? 'screen smallFont': fontSize? `screen ${fontSize}`: `screen`}> {currentCalculation} </p>
        </div>   
    )
}

export default Screen;     