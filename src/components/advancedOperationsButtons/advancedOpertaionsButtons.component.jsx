import Button from "../button/button.component";
import { ReactComponent as Square} from "../../assets/superscript-x-elevated-to-the-power-of-two-svgrepo-com.svg";
import './advancedOperationsButtons.style.scss'

const AdvancedOperationsButtons = ({handleClick}) =>{
    return(
        <div className="advancedOperations-container">
          <Button value={'√'} key={21} onClick = {handleClick}/> 
          <Button value={'x^y'} key={22} onClick = {handleClick}/>
          <Button value={'square'} key={23} buttonType={'specialButton'} onClick = {handleClick}><Square style={{pointerEvents: 'none'}}/></Button> 
          <Button value={'|x|'} key={24} onClick = {handleClick}/>
          <Button value={'log'} key={25} onClick = {handleClick}/> 
        </div>
    );
}

export default AdvancedOperationsButtons;