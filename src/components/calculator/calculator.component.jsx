import "./calculator.styles.scss"
import ButtonPanel from "../buttonPanel/buttonPanel.component";
import Screen from "../screen/screen.component";
import { OrientationContext} from "../../context/orientation.context";
import { useContext } from "react";

const Calculator = () =>{

    const {portrait} = useContext(OrientationContext);
    return(
        <div className={portrait? "calculator-container": "calculator-container landscape"}>
            <Screen fontSize={!portrait? 'lowerFont' : ''}/>
            <ButtonPanel/>
        </div>
    )
};

export default Calculator;