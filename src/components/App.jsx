import '../styles/App.css';
import { useEffect, useState } from "react";
import QuoteList from "./QuoteList.jsx";
import { fetchQuotes, fetchTags, fetchTranslate } from "../services/api.js";

function App() {
  const QUOTES_KEY = "quotesCache";
  const TAGS_KEY = "tagsCache";

  const [quotes, setQuotes] = useState([]);
  const [tags, setTags] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState(""); // Estado para el input del usuario

  useEffect(() => {
    const cachedQuotes = localStorage.getItem(QUOTES_KEY);
    const cachedTags = localStorage.getItem(TAGS_KEY);

    if (cachedQuotes) {
      setQuotes(JSON.parse(cachedQuotes));
      setLoading(false);
    }

    if (cachedTags) {
      setTags(JSON.parse(cachedTags));
    }

    if (!cachedQuotes || !cachedTags) {
      fetchAndCacheQuotes();
    }
  }, []);

  const fetchAndCacheQuotes = async () => {
    setLoading(true);
    setError(null);

    try {
      const newQuotes = await fetchQuotes();
      setQuotes(newQuotes);
      localStorage.setItem(QUOTES_KEY, JSON.stringify(newQuotes));

      const newTags = {};
      for (const quote of newQuotes) {
        const tagsForQuote = await fetchTags(quote.quote);
        newTags[quote.quote] = tagsForQuote;
      }
      setTags(newTags);
      localStorage.setItem(TAGS_KEY, JSON.stringify(newTags));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddQuote = async () => {
    if (!searchText.trim()) return;

    const {translation_text} = await fetchTranslate(searchText)
    console.table({
      original: searchText,
      translate: translation_text
    })
    
    try {
      const newQuote = {
        author: "Translated quote",
        quote: translation_text,
      };

      const newTags = await fetchTags(translation_text);

      setQuotes([newQuote, ...quotes]);
      setTags({ ...tags, [translation_text]: newTags });

      // Actualizar localStorage
      localStorage.setItem(QUOTES_KEY, JSON.stringify([newQuote, ...quotes]));
      localStorage.setItem(TAGS_KEY, JSON.stringify({ ...tags, [translation_text]: newTags }));

      setSearchText(""); // Limpiar el campo de búsqueda
    } catch (err) {
      console.error("Error al agregar la cita:", err);
    }
  };

  if (loading) return <p className="text-primary">Loading quotes and tags...</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (
    <div className="container mt-4">
      <header className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Breaking Bad Quotes</h1>
          <button onClick={fetchAndCacheQuotes} className="btn btn-primary">
            Get New Quotes
          </button>
        </div>
        <div className="input-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a custom quote in Spanish..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="btn btn-success"
            onClick={handleAddQuote}
          >
            Add Quote
          </button>
        </div>
      </header>
      <QuoteList quotes={quotes} tags={tags} />
    </div>
  );
}

export default App;
