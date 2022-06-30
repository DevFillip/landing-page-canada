import avaliacao from '../../../imgs/5estrelas.png'
import styles from './Depoimentos.module.css'

function Depoimentos({imagemDepoimento, nome, cidade, depoimento}){
    return (
        <div className={styles.depoimentos_container}>
            <img className={styles.img_depoimento} src={imagemDepoimento} alt="Imagem"/>
            <h2>{nome}</h2>
            <p>{cidade}</p>
            <img className={styles.avaliacao} src={avaliacao} alt="avaliação do usuário"/>
            <p>{depoimento}</p>
        </div>
    )
}

export default Depoimentos