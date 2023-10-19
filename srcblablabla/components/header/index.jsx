import './style.css'
import logoIf from '../../assets/montes_claros_vetor.svg'
import logoReact from '../../assets/react.svg'

const Header = () => {
    return (
        <div className='header'>
            <div className='images'>
                <img src={logoIf} className="logo" alt="Logo IFNMG" />
                <img src={logoReact} className='logo react' alt='logo react' />
            </div>
            <h1>Qual é a Palavra?</h1>
        </div>
    )
}

export default Header