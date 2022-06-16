import logo from '../../../imgs/logo-Canada.png'
import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar(){
    return (
        <nav className={styles.navbar}>
                <Link to="/"><img className={styles.imagem} src={logo} alt="Canadá" /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}>Home</li>
                    <li className={styles.item}>Intercâmbio</li>
                    <li className={styles.item}>Depoimentos</li>
                    <li className={styles.item}>Contato</li>
                </ul>
        </nav>
    )
}

export default NavBar