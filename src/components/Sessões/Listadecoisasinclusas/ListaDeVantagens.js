import {CgEditBlackPoint} from 'react-icons/cg'
import styles from './ListaDeVantagens.module.css'
import formados from '../../../imgs/formados.png'

function ListaDeVantagens(){
    return (
        <div className={styles.}>
            <div className={styles.vantagens_container}>
                <h1>O que está Incluso?</h1>

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
                    <CgEditBlackPoint /><p>Seguro Saúde</p>
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
                <div className={styles.vantagens}>
                    <CgEditBlackPoint /><p>Moletom College Prep</p>
                </div>  
            </div>

            <div clasName={styles.formados}>
                <img src={formados} alt="imagem de pessoas formadas"/>
            </div>
        </div>
    )
}

export default ListaDeVantagens