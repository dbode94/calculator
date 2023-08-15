import './button.style.scss'

const Button = ({value,buttonType,onClick, children}) =>{
    return(
        <button className={buttonType? `calButton ${buttonType}` : 'calButton'} onClick={onClick} value={value}> {children? children : value} </button>
    )
}

export default Button;