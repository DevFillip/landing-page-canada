import {CgEditBlackPoint} from 'react-icons/cg'
import styles from './ListaDeVantagens.module.css'
import formados from '../../../imgs/formados.png'

function ListaDeVantagens(){
    return (
        <div className={styles.container}>
            <div className={styles.vantagens_container}>
                <h1>UMA EXPERIÊNCIA INESQUECÍVEL </h1>

                <div className={styles.vantagens}>
                    <CgEditBlackPoint /><p>Hospedagem na William Academy</p>
                </div>
                <div className={styles.vantagens}> 
                    <CgEditBlackPoint /><p>3 Refeições por dia</p>
                </div>
                <div className={styles.vantagens}>   
                    <CgEditBlackPoint /><p>Aulas de Inglês</p>
                </div>
                <div className={styles.vantagens}>
                    <CgEditBlackPoint /><p>Atividades dentro e fora da Instituição</p>
                </div>
                <div className={styles.vantagens}>
                    <CgEditBlackPoint /><p>Translado</p>
                </div>
                <div className={styles.vantagens}>
                    <CgEditBlackPoint /><p>Taxa de Inscrição</p>
                </div>
                <div className={styles.vantagens}>
                    <CgEditBlackPoint /><p>Certificado de Participação</p>
                </div>
            </div>

            <div className={styles.formados_img}>
                <img src={formados} alt="imagem de pessoas formadas"/>
                <div className={styles.college_prep}>
                    <h2>College Prep</h2>
                </div>
            </div>
        </div>
    )
}

export default ListaDeVantagens