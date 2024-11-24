import '../styles/TagList.css'

function TagList({ tags }) {
  return (
    <div className="d-flex flex-wrap justify-content-start gap-2">
      {tags.map((tag, index) => (
        <div 
          key={index} 
          className="d-flex border rounded-pill shadow-sm tag-item"
        >
          <div className="bg-primary text-white text-center px-2 py-1 small rounded-start tag-item">
            {tag.label}
          </div>
          <div className="bg-light text-center px-2 py-1 small rounded-end tag-item">
            {tag.score.toFixed(3)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TagList;
