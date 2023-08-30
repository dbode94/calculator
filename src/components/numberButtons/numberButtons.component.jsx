import Button from "../button/button.component";
import './numberButtons.style.scss'

const NumberButtons = ({handleClick,isPortrait}) =>{
    return(
        <div className={isPortrait? "numberButton-container": "numberButton-container landscapeNumber-containe"}>
        {
          Array.from(Array(9)).map((_,i) =>{
            return <Button value={i+1} key={i+1} onClick = {handleClick}/>
          })
        }           
        <Button value={"+/-"} key={10} onClick = {handleClick}/> {/*change this*/}
        <Button value={0} key={0} onClick = {handleClick}/>
        <Button value={'.'} key={11} onClick = {handleClick}/>
      </div>   
    );
}

export default NumberButtons;