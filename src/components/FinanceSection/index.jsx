import { useState } from "react";
import { FinanceForm } from "../FinanceForm";
import { FinanceList } from "../FinanceList";
import { Total } from "../Total";

import styles from "./style.module.scss";


export const FinanceSection = () => {

   
  const [text, setText] = useState ("");
  const [type, setType] = useState("entrada");
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  
  const calcularSaldo = (acumulador, item) =>{
    const valor = parseFloat(item.value);
    return item.type === "entrada" ? acumulador + valor : acumulador - valor;
  }

  const valorTotal = list.reduce(calcularSaldo, 0);


  const submit = (e) => {
    e.preventDefault();
   
    if ( text != "" && value != "") {
      const data = {
        text: text,
        value: parseFloat(value),
        type: type,
      }
      list.push(data);
      setType("entrada");
      setText("");
      setValue("");
  
    }

  }

  return (
    <section className={styles.section}>
      <div className="container one">
        <FinanceForm setText={setText} text={text} setValue={setValue} value={value} setType={setType} type={type} submit={submit} />
        <Total valorTotal={valorTotal} />
      </div>
      <FinanceList list={list}  />
    </section>
  );
};
