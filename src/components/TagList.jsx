import '../styles/TagList.css'

function TagList({ tags }) {
  return (
    <ul className="tag-list">
      {tags.map((tag, index) => (
        <li key={index} className="tag-style tag-item">
          {tag.label} - {tag.score.toFixed(3)}
        </li>
      ))}
    </ul>
  );
}

export default TagList;
