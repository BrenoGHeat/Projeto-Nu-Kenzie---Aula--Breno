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
  
  const submit = (e) => {
    e.preventDefault();
   
    if ( text != "" && value != "") {
      const data = {
        text: text,
        value: value,
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
        <Total />
      </div>
      <FinanceList list={list} />
    </section>
  );
};
