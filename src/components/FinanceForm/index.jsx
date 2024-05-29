
import styles from "./style.module.scss";

export const FinanceForm = () => {
  return (
   
      <div className={styles.finance}>
      <div className="container lg">
        <div className="container sm">
          <label htmlFor="">Descrição</label>
          <input type="text" placeholder="Digite aqui sua descrição" />
          <p>Ex: Compra de roupas</p>

          <label htmlFor="Valor">Valor (R$) </label>
          <input type="number" name="" id="" />

          <label htmlFor="">Tipo de Valor</label>
          <input type="text" name="" id="" />

          <button class="btn">Inserir Valor</button>
          </div>
        </div>
      </div>
    
  );
};
