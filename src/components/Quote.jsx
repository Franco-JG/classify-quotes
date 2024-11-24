import TagList from "./TagList.jsx";

function Quote({ quote, tags }) {
  return (
    <article className="card shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{quote.author}</h2>
        <p className="card-text">"{quote.quote}"</p>
        <hr />
        {tags.length > 0 ? (
          <TagList tags={tags} />
        ) : (
          <p className="text-muted">No tags available</p>
        )}
      </div>
    </article>
  );
}

export default Quote;
