import { FaTrash } from "react-icons/fa";
import styles from "./style.module.css";

export function Card({ transaction, listTransactions, setListTransactions }) {
  function handleCards(props) {
    const filterList = listTransactions.filter((iten) => {
      return iten.id !== props;
    });
    setListTransactions(filterList);
  }

  return (
    <li id={transaction.id}>
      {transaction.type === "out" ? (
        <div className={styles.liOut}>
          <div className={styles.titleType}>
            <p className="title title--3">{transaction.description}</p>
            <p className="body">Despesa</p>
          </div>
          <div className={styles.valueButton}>
            <p className="body">R$ {transaction.value}</p>
            <FaTrash
              className="button--trash"
              onClick={(event) => handleCards(transaction.id)}
            />
          </div>
        </div>
      ) : (
        <div className={styles.liIn}>
          <div className={styles.titleType}>
            <p className="title title--3">{transaction.description}</p>
            <p className="body">Entrada</p>
          </div>
          <div className={styles.valueButton}>
            <p className="body">R$ {transaction.value}</p>
            <FaTrash
              className="button--trash"
              onClick={(event) => handleCards(transaction.id)}
            />
          </div>
        </div>
      )}
    </li>
  );
}
