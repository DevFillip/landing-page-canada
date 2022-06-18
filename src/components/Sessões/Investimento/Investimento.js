import styles from './Investimento.module.css'


function Investimento(){
    return (
        <div className={styles.investimento_container}>
            <div className={styles.texto_container}>
                <h1>Um investimento com risco zero!</h1>
            <p>Agora vamos pensar juntos, fazer um intercâmbio por conta própria, ou mesmo que organizado por uma agência, não sai barato. Só a estadia em um hotel não sai por menos de 1500 dólares para duas semanas. Além dos custos com alimentação (cerca de 450 dólares para esse prazo), transporte, seguro e de um curso de inglês (que deve sair por mais ou menos 1000 dólares). Sem contar com os passeios para outras cidades, jogos, festivais, etc.
            </p>
            <p>
                Com certeza tudo isso daria, no mínimo, 5 mil dólares canadenses. Mas com a Flex, além de todo o suporte da nossa equipe, seu filho leva uma experiência para a vida por 3700 dólares. Uma viagem que abre portas para cidadãos do mundo.
            </p>
            </div>
        </div>
    )
}

export default Investimento