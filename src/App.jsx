import { useState } from "react";
import "./styles/index.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
import img from "./assets/home-img.svg";

function App() {
  const [page, setPage] = useState("landing");

  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      {page === "landing" ? (
        <div className="landing__container">
          <div className="site-description">
            <p className="logo title title--2">
              <span>Nu</span> Kenzie
            </p>
            <p className="title title--1">
              Centralize o controle das suas finanças
            </p>
            <p className="headline">de forma rápida e segura</p>
            <button
              className="button button--main headline"
              type="button"
              onClick={() => setPage("home")}
            >
              Iniciar
            </button>
          </div>
          <img className="main-img" src={img} />
        </div>
      ) : (
        <div className="home__container">
          <header>
            <p className="logo title title--2">
              <span>Nu</span> Kenzie
            </p>
            <button
              className="button"
              type="button"
              onClick={() => setPage("landing")}
            >
              Inicio
            </button>
          </header>
          <main>
            <div className="complete__container">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <TotalMoney listTransactions={listTransactions} />
            </div>
            <section className="financia-summary__container">
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            </section>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
