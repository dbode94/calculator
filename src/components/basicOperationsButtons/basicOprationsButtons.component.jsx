import Button from "../button/button.component";
import { ReactComponent as Arrow} from "../../assets/left-arrow-svgrepo-com.svg";
import './basicOperationsButtons.style.scss';

const BasicOprationsButtons = ({handleClick, isPortrait}) =>{
    return(
        <div className={isPortrait? "oprationButton-container" : "oprationButton-container landscapeOperation-container"}>
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
    );
}

export default BasicOprationsButtons;