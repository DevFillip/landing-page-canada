import styles from './FormContato.module.css'

function FormContato(){
    return (
        <div className={styles.contato_container}>
            <h1>Ainda tem alguma dúvida?</h1>
            <p>contate a gente, e nós responderemos todas as suas dúvidas!</p>

            <div className={styles.contato}>
                <form>
                    <label for="email">Email:</label>
                    <br></br>
                    <input type="text" placeholder='Email' id='email'></input>
                    <br></br>
                    <label for="mensagem">Sua mensagem:</label>
                    <br></br>
                    <textarea placeholder='Mensagem' id='mensagem'></textarea>
                    <br></br>
                    <button>Enviar mensagem</button>
                </form>
            </div>
        </div>
    )
}

export default FormContato