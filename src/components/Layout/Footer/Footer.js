import {FaFacebook, FaInstagram, FaYoutube, FaWhatsapp} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return (
    <footer className={styles.footer}>
        <div className={styles.containerDireitos}>
            <p className={styles.copy_rigth}> <span>Todos os direitos reservados a Empresa fictícia &copy; Desenvolvido por Fillip H. para portfólio</span> </p>
        </div>

        <ul className={styles.social}>
            <li><FaInstagram /></li>
            <li><FaFacebook /></li>
            <li><FaYoutube /></li>
            <li><FaWhatsapp /></li>
        </ul>

    </footer>
    )
}

export default Footer