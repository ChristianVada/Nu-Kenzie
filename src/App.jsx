import { useState } from "react";
import "./styles/index.css";
import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {
  const [page, setPage] = useState("index");

  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      {page === "index" ? (
        <div className="index__container">
          <p>index page</p>
          <button type="button" onClick={() => setPage("home")}>
            Iniciar
          </button>
        </div>
      ) : (
        <div className="home__container">
          <button type="button" onClick={() => setPage("index")}>
            Voltar
          </button>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <section className="financia-summary__container">
            <h2>Resumo Financeiro</h2>
            <ul>
              <List listTransactions={listTransactions} />
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
