import '../styles/App.css';
import { useEffect, useState } from "react";
import QuoteList from "./QuoteList.jsx";
import { fetchQuotes, fetchTags } from "../services/api.js";

function App() {
  const QUOTES_KEY = "quotesCache";
  const TAGS_KEY = "tagsCache";

  const [quotes, setQuotes] = useState([]);
  const [tags, setTags] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p className="text-primary">Loading quotes and tags...</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (
    <div className="container mt-4">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1>Breaking Bad Quotes</h1>
        <button onClick={fetchAndCacheQuotes} className="btn btn-primary">
          Get New Quotes
        </button>
      </header>
      <QuoteList quotes={quotes} tags={tags} />
      
    </div>
  );
}

export default App;
