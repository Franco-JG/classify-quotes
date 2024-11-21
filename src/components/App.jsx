import '../styles/App.css'
import { useEffect, useState } from "react";
import QuoteList from "./QuoteList.jsx";
import { fetchQuotes } from "../services/api.js";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadQuotes = async () => {
      try {
        const data = await fetchQuotes();
        setQuotes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadQuotes();
  }, []);

  if (loading) return <p>Loading quotes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default App;
