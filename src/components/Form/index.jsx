import { useState } from "react";
import styles from "./style.module.css";
import { v4 as uuid } from "uuid";
export function Form({ listTransactions, setListTransactions }) {
  const [description, setDescripton] = useState("");
  const [value, setValue] = useState("");
  const [type, setTypeOfValor] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const obj = {
      description,
      value: type == "entry" ? parseFloat(value) : parseFloat(value) * -1,
      type,
      id: uuid(),
    };

    setListTransactions((oldUsers) => [...oldUsers, obj]);
    setDescripton("");
    setValue("");
    setTypeOfValor("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className="body" htmlFor="description">
        Descrição
      </label>
      <input
        className="input"
        placeholder="Digite aqui sua descrição"
        type="text"
        id="description"
        onChange={(event) => setDescripton(event.target.value)}
        value={description}
        required
      />
      <span className="body">Ex: compra de roupas</span>

      <div className={styles.valorETipo}>
        <div className={styles.valor}>
          <label className="body" htmlFor="value">
            Valor
          </label>
          <input
            className="input"
            name="value"
            type="number"
            onChange={(event) => setValue(event.target.value)}
            value={value}
            required
          />
        </div>
        <div className={styles.tipo}>
          <label className="body" htmlFor="type">
            Tipo de valor
          </label>
          <select
            className="input"
            id="type"
            onChange={(event) => setTypeOfValor(event.target.value)}
            value={type}
            required
          >
            <option value="">Selecione um tipo</option>
            <option value="entry">Entrada</option>
            <option value="out">Saída</option>
          </select>
        </div>
      </div>
      <button className="button button--main" type="submit">
        Inserir valor
      </button>
    </form>
  );
}
