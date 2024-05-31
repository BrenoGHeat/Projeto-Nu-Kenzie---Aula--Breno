
import styles from "./style.module.scss";

export const Total = () => {
    return(
        <div className={styles.total}>
            <h3>Valor Total:</h3>
            <span>R$ 8184,00</span>
            <p>O valor se refere ao saldo</p>

        </div>
    )
}