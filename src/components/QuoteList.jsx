import Quote from "./Quote.jsx";

function QuoteList({ quotes }) {
  return (
    <section>
      {quotes.map((quote, index) => (
        <Quote key={index} quote={quote} />
      ))}
    </section>
  );
}

export default QuoteList;
