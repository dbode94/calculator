import "./screen.style.scss"
import { useContext } from "react";
import { CalculationContex } from "../../context/calculation.context";

const Screen = ({formula}) =>{
    const {currentCalculation} = useContext(CalculationContex);
    return(
        <div className="screen-container">{currentCalculation}</div>   
    )
}

export default Screen;     