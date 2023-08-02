import './button.style.scss'

const Button = ({value,buttonType,onClick}) =>{
    return(
        <button className={buttonType? `calButton ${buttonType}` : 'calButton'} onClick={onClick} value={value}> {value} </button>
    )
}

export default Button;