import { useState } from "react";

function QuoteCard({ quote }) {

  const [mostrar, setMostrar] = useState(false);

  function cambiarEstado() {
    setMostrar(!mostrar);
  }

  return (
    <article className="quote-card">

      <div className="quote-icon">
        GOT
      </div>

      <h2>{quote.character.name}</h2>

      <p className="quote">
        "{quote.sentence}"
      </p>

      <p>
        <strong>Casa:</strong> {quote.character.house.name}
      </p>

      <button className="button" onClick={cambiarEstado}>
        {mostrar ? "Ocultar detalles" : "Mostrar detalles"}
      </button>

      {mostrar && (
        <div className="details">

          <p>
            <strong>Personaje:</strong> {quote.character.name}
          </p>

          <p>
            <strong>Casa:</strong> {quote.character.house.name}
          </p>

          <p>
            <strong>Identificador:</strong> {quote.character.slug}
          </p>

        </div>
      )}

    </article>
  );
}

export default QuoteCard;