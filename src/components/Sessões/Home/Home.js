import Venda from '../../Layout/Venda/Venda'
import styles from './Home.module.css'
import {FaCalendarDay, FaLock} from 'react-icons/fa'
import {SiGooglemaps} from 'react-icons/si'
import {BiCertification} from 'react-icons/bi'
import {AiFillMessage} from 'react-icons/ai'

function Home(){
    return (
        <div className={styles.home_container}>
            <h1>Que tal fazer um intercâmbio no Canadá?</h1>
            <p className={styles.p}>
                Conheça as principais atrações turísticas do Canadá através de muitas atividades culturais e educacionais, conheça estudantes, professores e funcionários canadenses, aprenda sobre o sistema educacional do país, inglês intensivo diário, muito lazer e certificados de conclusão. E tudo isso por apenas
            </p>
            <Venda />
            <div className={styles.card_container}>
                <div className={styles.card_vantagens}>
                    <FaCalendarDay />
                    <p>Duração de 14 Dias</p>
                </div>
                <div className={styles.card_vantagens}>
                    <SiGooglemaps />
                    <p>Ontário, Canadá</p>
                </div>
                <div className={styles.card_vantagens}>
                    <FaLock />
                    <p>Compra Segura</p>
                </div>
                <div className={styles.card_vantagens}>
                    <BiCertification />
                    <p>Certificado <span>Participação</span></p>
                </div>
                <div className={styles.card_vantagens}>
                    <AiFillMessage />
                    <p>Suporte Guiado</p>
                </div>
            </div>
        </div>
    )
}

export default Home