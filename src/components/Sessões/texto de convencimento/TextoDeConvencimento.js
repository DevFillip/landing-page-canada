import styles from './TextoDeConvencimento.module.css'

function TextoDeConvencimento(){
    return (
        <div className={styles.texto_container}>
            <h1>VIVA O SONHO DA EXPERIÊNCIA INTERNACIONAL</h1>
            <div className={styles.borda_em_baixo}></div>
            <p>
                Você tem um sonho de ter uma experiência internacional? Conhecer lugares que são completamente diferentes da sua realidade, treinar a proficiência na língua inglesa, fazer um forte trabalho no seu networking pessoal e adquirir conhecimentos que vão permitir a você atingir patamares nunca imaginados?
            </p>
            <p>
                A imersão do College Prep foi criada para você! Uma experiência única que acontece apenas uma vez ao ano e que permite uma verdadeira transformação pessoal e acadêmica ao aluno participante, abrindo seus horizontes, num intercâmbio que não compromete o ano letivo escolar com excelente custo-benefício.
            </p>
        </div>
    )
}

export default TextoDeConvencimento