import imgVenda from '../../../imgs/venda.png'
import styles from './Venda.module.css'

function Venda(){
    return (
        <div className={styles.venda}>
            <img src={imgVenda} alt="venda"/>
            <button>Fale conosco!</button>
        </div>

    )
}

export default Venda