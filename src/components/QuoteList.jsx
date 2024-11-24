import Quote from "./Quote.jsx";

function QuoteList({ quotes, tags }) {
  return (
    <div className="row">
      {quotes.map((quote, index) => (
        <div key={index} className="col-md-12 mb-4">
          <Quote 
            quote={quote} 
            tags={tags[quote.quote] || []} 
          />
        </div>
      ))}
    </div>
  );
}

export default QuoteList;
