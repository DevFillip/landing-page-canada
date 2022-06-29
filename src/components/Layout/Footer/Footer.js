import {FaFacebook, FaInstagram, FaYoutube, FaWhatsapp} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
        <div className={styles.containerDireitos}>
            <p className={styles.copy_rigth}> <span>Todos os direitos reservados a Empresa fictícia &copy; Desenvolvido por Fillip H. para portfólio</span> </p>
        </div>

        <ul className={styles.list}>
            <li className={styles.item} onClick={scrollHome}>Home</li>
            <li className={styles.item} onClick={scrollIntercambio}>Intercâmbio</li>
            <li className={styles.item} onClick={scrollDepoimentos}>Depoimentos</li>
            <li className={styles.item} onClick={scrollContato}>Contato</li>
        </ul>

        <ul className={styles.social}>
            <li><FaInstagram /></li>
            <li><FaFacebook /></li>
            <li><FaYoutube /></li>
            <li><FaWhatsapp /></li>
        </ul>
    </footer>
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
        top: 4230,
        behavior: "smooth"
    })
}

export default Footer