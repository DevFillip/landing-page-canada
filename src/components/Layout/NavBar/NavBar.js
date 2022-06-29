import logo from '../../../imgs/logo-Canada.png'
import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar({props}){

    return (
        <nav className={styles.navbar}>
                <Link to="/"><img className={styles.imagem} src={logo} alt="Canadá" /></Link>
                <ul className={styles.list}>
                    <li className={styles.item} onClick={scrollHome}>Home</li>
                    <li className={styles.item} onClick={scrollIntercambio}>Intercâmbio</li>
                    <li className={styles.item} onClick={scrollDepoimentos}>Depoimentos</li>
                    <li className={styles.item} onClick={scrollContato}>Contato</li>
                </ul>
        </nav>
    )
}

const scrollHome = () => {
    window.scrollTo({
        top: 120,
        behavior: "smooth"
    })
}

const scrollIntercambio = () => {
    window.scrollTo({
        top: 2040,
        behavior: "smooth"
    })
}

const scrollDepoimentos = () => {
    window.scrollTo({
        top: 2500,
        behavior: "smooth"
    })
}

const scrollContato = () => {
    window.scrollTo({
        top: 4260,
        behavior: "smooth"
    })
}



export default NavBar