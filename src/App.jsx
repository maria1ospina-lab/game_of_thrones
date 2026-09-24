import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import QuoteCard from "./components/QuoteCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  function obtenerFrases() {
    setLoading(true);

    fetch("https://api.gameofthronesquotes.xyz/v1/random/5")
      .then(response => response.json())
      .then(data => {
        setQuotes(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    obtenerFrases();
  }, []);

  const frasesFiltradas = quotes.filter(quote =>
    quote.character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      <Header />

      <main>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="new-quote-container">
          <button className="new-button" onClick={obtenerFrases}>
            Nueva frase
          </button>
        </div>

        {loading ? (
          <p className="loading">Cargando frases...</p>
        ) : (

          <section className="quotes-container">

            {frasesFiltradas.map((quote, index) => (
              <QuoteCard
                key={index}
                quote={quote}
              />
            ))}

          </section>

        )}

        {!loading && frasesFiltradas.length === 0 && (
          <p className="no-results">
            No se encontraron frases.
          </p>
        )}


      </main>

      <Footer />

    </div>
  );
}

export default App;