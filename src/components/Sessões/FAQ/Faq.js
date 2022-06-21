import styles from './Faq.module.css'

function Faq(){
    

    
    return(
        <div className={styles.faq_container}>
            <h2>PERGUNTAS FREQUENTES</h2>
            <div className={styles.faq_perguntas}>
                <div className={styles.faq_pergunta}>
                    <span>Até quando posso fazer a inscrição?</span>
                </div>

                <div className={styles.faq_pergunta}>
                    <span>Quais são as formas de pagamento?</span>
                </div>

                <div className={styles.faq_pergunta}>
                    <span>Quem pode ir?</span>
                </div>

                <div className={styles.faq_pergunta}>
                    <span>Qual a data de partida e de chegada?</span>
                </div>

                <div className={styles.faq_pergunta}>
                    <span>O que está incluso no valor de C$ 3700?</span>
                </div>

                <div className={styles.faq_pergunta}>
                    <span>A passagem está inclusa no valor?</span>
                </div>
            </div>
        </div>
    )
}

export default Faq