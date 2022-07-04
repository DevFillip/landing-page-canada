import logo from '../../../imgs/logo-Canada.png'
import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'
import {AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import {useEffect, useState} from 'react'

function NavBar(){
    const [navAtiva, setNavAtiva] = useState(`${styles.list}`)
    const [esconderMenu, setEsconderMenu] = useState(false)

    const navToggle = () =>{
    navAtiva === `${styles.list}` ? setNavAtiva(`${styles.list} ${styles.active}`) : setNavAtiva(`${styles.list}`)

    setEsconderMenu(!esconderMenu)
 }


    return (
        <nav className={styles.navbar}>
            <Link to="/"><img className={styles.imagem} src={logo} alt="Canadá" /></Link>
            <ul className={navAtiva}>
                <li className={styles.item} onClick={scrollHome}>Home</li>
                <li className={styles.item} onClick={scrollIntercambio}>Intercâmbio</li>
                <li className={styles.item} onClick={scrollDepoimentos}>Depoimentos</li>
                <li className={styles.item} onClick={scrollContato}>Contato</li>
            </ul>

            <div className={styles.toggle}>
                {!esconderMenu ? <AiOutlineMenu className={styles.menu} onClick={navToggle}/> : <GrClose className={styles.xzinho} onClick={navToggle}/>}  
            </div>
        </nav>
    )
}

const scrollHome = () => {

    window.scrollTo({
        top: 120,
        behavior: "smooth"
    })
}

function scrollIntercambio(){
    window.scrollTo({
        top: 2000,
        behavior: "smooth"
        })
}

const scrollDepoimentos = () => {
    window.scrollTo({
        top: 2450,
        behavior: "smooth"
    })
}

const scrollContato = () => {
    window.scrollTo({
        top: 4180,
        behavior: "smooth"
    })
}



export default NavBar