import '../styles/TagList.css'

function TagList({ tags }) {
  return (
    <ul className="tag-list">
      {tags.map((tag, index) => (
        <li key={index} className="tag-item">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default TagList;
