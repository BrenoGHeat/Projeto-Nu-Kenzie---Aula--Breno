export const FinanceCard = ({ item , removeItem }) => {
  return (
    <li className={`container month ${item.type === "entrada" ? "entrada" : "saida" } `}>
      <div className="mini div one">
        <h3>{item.text}</h3>
        <p>{item.type}</p>
      </div>

      <div className="mini div two">
        <p>R${item.value.toFixed(2)}</p>
        <button onClick={() => removeItem(item.id)}>Excluir</button>
      </div>
    </li>
  );
};

