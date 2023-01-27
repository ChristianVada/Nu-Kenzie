import { useState } from "react";
import "./style.css";

export function Form({ listTransactions, setListTransactions }) {
  const [description, setDescripton] = useState("");
  const [value, setValue] = useState("");
  const [type, setTypeOfValor] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const obj = {
      description,
      value,
      type,
    };

    setListTransactions((oldUsers) => [...oldUsers, obj]);
    setDescripton("");
    setValue("");
    setTypeOfValor("");
  }

  // console.log(listTransactions);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="description">Descrição</label>
      <input
        type="text"
        id="description"
        onChange={(event) => setDescripton(event.target.value)}
        value={description}
        required
      />
      <span>Ex: compra de roupas</span>

      <label htmlFor="value">Valor</label>
      <input
        name="value"
        type="number"
        onChange={(event) => setValue(event.target.value)}
        value={value}
        required
      />

      <label htmlFor="type">Tipo de valor</label>
      <select
        id="type"
        onChange={(event) => setTypeOfValor(event.target.value)}
        value={type}
        required
      >
        <option>Selecione um tipo</option>
        <option value="entry">Entrada</option>
        <option value="out">Saída</option>
      </select>
      <button type="submit">Inserir valor</button>
    </form>
  );
}
