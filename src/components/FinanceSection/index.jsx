import { useState } from "react";
import { FinanceForm } from "../FinanceForm";
import { FinanceList } from "../FinanceList";
import { Total } from "../Total";

import styles from "./style.module.scss";

export const FinanceSection = () => {
  const [text, setText] = useState("");
  const [type, setType] = useState("Entrada");
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const calcularSaldo = (acumulador, item) => {
    const valor = parseFloat(item.value);
    return item.type === "Entrada" ? acumulador + valor : acumulador - valor;
  };

  const valorTotal = list.reduce(calcularSaldo, 0);

  const submit = (e) => {
    e.preventDefault();

    if (text != "" && value != "") {
      const data = {
        id: crypto.randomUUID(),
        text: text,
        value: parseFloat(value),
        type: type,
      };
      list.push(data);
      setType("Entrada");
      setText("");
      setValue("");
    }
  };

  const removeItem = (id) => {
    const filters = list.filter((item) => item.id !== id);
    setList(filters);
  };

  return (
    <section className={styles.section}>
      <div className="container one">
        <FinanceForm
          setText={setText}
          text={text}
          setValue={setValue}
          value={value}
          setType={setType}
          type={type}
          submit={submit}
        />
        <Total valorTotal={valorTotal} list={list} />
      </div>
      <FinanceList list={list} removeItem={removeItem} />
    </section>
  );
};
