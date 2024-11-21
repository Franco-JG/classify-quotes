import '../styles/App.css';
import { useEffect, useState } from "react";
import QuoteList from "./QuoteList.jsx";
import { fetchQuotes } from "../services/api.js";

function App() {
  const QUOTES_KEY = "quotesCache";

  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedQuotes = localStorage.getItem(QUOTES_KEY);

    if (cachedQuotes) {
      setQuotes(JSON.parse(cachedQuotes));
      setLoading(false);
    } else {
      fetchAndCacheQuotes();
    }
  }, []);

  // Función para obtener y guardar citas
  const fetchAndCacheQuotes = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchQuotes();
      setQuotes(data);
      localStorage.setItem(QUOTES_KEY, JSON.stringify(data));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading quotes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Breaking Bad Quotes</h1>
        <button onClick={fetchAndCacheQuotes} className="tag-style button-style">
          Get New Quotes
        </button>
      </header>
      <QuoteList quotes={quotes} />
    </>
  );
}

export default App;
