import styles from './Comparacao.module.css'
import {CgEditBlackPoint} from 'react-icons/cg'

function Comparacao(){
    return (

    
        <div className={styles.container_comparacao}>
            <h1>College Prep x Outros intercâmbios</h1>
            <div className={styles.borda_em_baixo}></div>
            <div className={styles.card_container}>
                <div className={styles.card_comparacao}>
                    <h3>College Prep</h3>
                    <div className={styles.vantagens}>
                        <CgEditBlackPoint /><p>Faça sua inscrição</p>
                    </div>
                    <div className={styles.vantagens}> 
                        <CgEditBlackPoint /><p>Compre as passagens</p>
                    </div>
                    <div className={styles.vantagens}>   
                        <CgEditBlackPoint /><p>Tire seu Visto</p>
                    </div>
                    <div className={styles.vantagens}>
                        <CgEditBlackPoint /><p>Prepare suas Malas</p>
                    </div>
                    <div className={styles.vantagens}>
                        <CgEditBlackPoint /><p>Viva o intercâmbio</p>
                    </div>
                </div>
                
                <span>X</span>
            
                <div className={styles.card_comparacao}>
                    <h3>Outros intercâmbios</h3>
                            <div className={styles.vantagens}>
                                <CgEditBlackPoint /><p>Procure uma agência</p>
                            </div>
                            <div className={styles.vantagens}> 
                                <CgEditBlackPoint /><p>Decida onde ficar</p>
                            </div>
                            <div className={styles.vantagens}>   
                                <CgEditBlackPoint /><p>Estipule um orçamento</p>
                            </div>
                            <div className={styles.vantagens}>
                                <CgEditBlackPoint /><p>Prepare os passeios</p>
                            </div>
                            <div className={styles.vantagens}>
                                <CgEditBlackPoint /><p>Compre as passagens</p>
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default Comparacao