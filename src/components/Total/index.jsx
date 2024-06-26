import styles from "./style.module.scss";

export const Total = ({ valorTotal , list }) => {
  return (
    <>
    {list.length > 0 && (
      <div className={styles.total}>
      <h3>Valor Total:</h3>
      <span>R${valorTotal.toFixed(2)}</span>
      <p>O valor se refere ao saldo</p>
    </div>
    )}
    </>
  );
};
