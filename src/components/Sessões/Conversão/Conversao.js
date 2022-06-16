import Depoimentos from '../../Layout/Depoimentos/Depoimentos'
import styles from './Conversao.module.css'
import MulherDepoimento from '../../../imgs/MulherDepoimento.jpg'
import HomemDepoimento from '../../../imgs/HomemDepoimento.jpg'


function Conversao(){
    return (
        <div className={styles.teste}>
            <Depoimentos 
            imagemDepoimento={MulherDepoimento} 
            nome="Maria" 
            cidade="Curitiba - PR"
            depoimento="“Participei do College Prep. A viagem que mudou o rumo da minha vida. Depois disso não pude perder a chance de fazer o High School. Ambos os programas me trouxeram uma ampla visão de mundo e abriram meu olhar para oportunidades de maneira global, tanto que hoje tenho a minha empresa e trabalho com clientes do mundo inteiro!”"  />
    
            <Depoimentos 
            imagemDepoimento={HomemDepoimento} 
            nome="Italo Melo" 
            cidade="São Paulo - SP"
            depoimento="“O momento que decidi de fato que meu objetivo era uma faculdade americana foi durante o programa Flex na University of Nevada, Reno. A Flex me ajudou a ver que eu, de fato, queria estudar fora do país. Me ajudou a ver como o sistema americano funciona e, com ajuda da minha professora Alessandra e coordenadora Marianna Cenni, eu aprendi e amadureci muito.”" />
        </div>
    )
}

export default Conversao