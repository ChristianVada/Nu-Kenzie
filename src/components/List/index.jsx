import { Card } from "../Card";
import styles from "./style.module.css";

export function List({ listTransactions, setListTransactions }) {
  const mapList = listTransactions.map((transaction) => (
    <Card
      listTransactions={listTransactions}
      setListTransactions={setListTransactions}
      transaction={transaction}
      key={transaction.id}
    />
  ));
  return (
    <ul className={styles.ul}>
      <h2 className="title title--3">Resumo financiero</h2>
      {mapList}
    </ul>
  );
}
