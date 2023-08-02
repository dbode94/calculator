import "./calculator.styles.scss"
import ButtonPanel from "../buttonPanel/buttonPanel.component";
import Screen from "../screen/screen.component";

const Calculator = () =>{
    return(
        <div className="calculator-container">
            <Screen/>
            <ButtonPanel/>
        </div>
    )
};

export default Calculator;