import './style.css'
import github from "../../assets/github.svg"

const Footer = ({link}) => {
    return (
        <div id="page-container">
            <div id="content-wrap">
               
            </div>
            <footer id="footer">
                <a href={link} target='_blank'><img className='github' src={github} alt="" /></a>
                <span>Copyright © 2023 Ênio Filipe e Lorena Avelino</span>
            </footer>
        </div>
    )
}

export default Footer