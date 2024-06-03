
import styles from "./style.module.scss";

export const FinanceForm = () => {
  return (
   
      


      <form className={styles.finance}>
      
          <div className="mini container">
          <label htmlFor="text">Descrição</label>
          <input id="text"  type="text" placeholder="Digite aqui sua descrição" />
          <p>Ex: Compra de roupas</p>
          </div>

          <div className="mini container">
          <label htmlFor="valor">Valor (R$) </label>
          <input type="number" name="" id="valor" class="value" />
          </div>

          <div className="container option"> 
          <label htmlFor="type">Tipo de Valor</label>
          <select id="type">
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
      
          </div>

          <button class="btn">Inserir Valor</button>
         
          </form>
     
    
  );
};
