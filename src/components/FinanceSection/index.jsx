import { FinanceForm } from "../FinanceForm";
import { FinanceList } from "../FinanceList";
import { Total } from "../Total";

import styles from "./style.module.scss";


export const FinanceSection = () => {
  return (
    <section className={styles.section}>
      <div>
        <FinanceForm />
        <Total />
      </div>
      <FinanceList />
    </section>
  );
};
