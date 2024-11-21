import Quote from "./Quote.jsx";

function QuoteList({ quotes, tags }) {
  return (
    <section>
      {quotes.map((quote, index) => (
        <Quote 
          key={index} 
          quote={quote}
          tags={tags[quote.quote] || []}
        />
      ))}
    </section>
  );
}

export default QuoteList;
