import Button from "../button/button.component";
import { ReactComponent as RotateArrow } from '../../assets/update-arrows-svgrepo-com.svg';
import './rotateButton.style.scss'

const RotateButton = ({handleClick}) =>{
    return(
        <div className='rotateButton-container'>
            <Button onClick={handleClick}><RotateArrow/></Button>
        </div>
    )
}

export default RotateButton;