import avaliacao from '../../../imgs/5estrelas.png'
import mulherAvaliacao from '../../../imgs/MulherDepoimento.jpg'

import styles from './Depoimentos.module.css'

function Depoimentos(){
    return (
        <div>
            <div>
                <img className={styles.img_depoimento} src={mulherAvaliacao}/>
                <h3>Maria Eduarda</h3>
                <p>Curitiba - PR</p>
                <img src={avaliacao}/>
                <p>“Participei do College Prep. A viagem que mudou o rumo da minha vida. Depois disso não pude perder a chance de fazer o High School. Ambos os programas me trouxeram uma ampla visão de mundo e abriram meu olhar para oportunidades de maneira global, tanto que hoje tenho a minha empresa e trabalho com clientes do mundo inteiro!”</p>
            </div>
            <div>
                <img />
                <h3>Pedro Ferreira</h3>
                <p>São Paulo - SP</p>
                <img src={avaliacao}/>
                <p>“O momento que decidi de fato que meu objetivo era uma faculdade americana foi durante o programa Flex na University of Nevada, Reno. A Flex me ajudou a ver que eu, de fato, queria estudar fora do país. Me ajudou a ver como o sistema americano funciona e, com ajuda da minha professora Alessandra e coordenadora Marianna Cenni, eu aprendi e amadureci muito.”</p>
            </div>
        </div>
    )
}

export default Depoimentos