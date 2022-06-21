import styles from './FormContato.module.css'

function FormContato(){
    return (
        <div className={styles.contato_container}>
            <h1>Ainda tem alguma dúvida?</h1>
            <p>contate a gente, e nós responderemos todas as suas dúvidas!</p>

            <div className={styles.contato}>
                <form>
                    <input type="text" placeholder='Seu email...'></input>
                    <textarea placeholder='Sua mensagem...'></textarea>
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default FormContato