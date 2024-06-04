import styles from "./style.module.scss";

export const FinanceForm = ({
  setText,
  setValue,
  setType,
  text,
  value,
  type,
  submit,
}) => {
  return (
    <form onSubmit={submit} className={styles.finance}>
      <div className="mini container">
        <label htmlFor="text">Descrição</label>
        <input
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Digite aqui sua descrição"
        />
        <p>Ex: Compra de roupas</p>
      </div>

      <div className="mini container">
        <label htmlFor="valor">Valor (R$) </label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name=""
          id="valor"
          className="value"
        />
      </div>

      <div className="container option">
        <label htmlFor="type">Tipo de Valor</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Saída</option>
        </select>
      </div>

      <button type="submit" className="btn">
        Inserir Valor
      </button>
    </form>
  );
};
