import styles from "./style.module.css";

export function TotalMoney({ listTransactions }) {
  const reduce = listTransactions.reduce(
    (accumulator, currentValue) => accumulator + currentValue.value,
    0
  );

  return (
    <section className="total-value__container">
      {listTransactions.length === 0 ? (
        <>
          <p>Você ainda não possui nenhum lançamento</p>
        </>
      ) : (
        <>
          <div className={styles.saldo}>
            <div>
              <h2 className="title tile--3">Valor total:</h2>
              <p className="title title-3">R$ {reduce}</p>
            </div>
            <p className="body">O valor se refere ao saldo</p>
          </div>
        </>
      )}
    </section>
  );
}
