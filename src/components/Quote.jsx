import { useEffect, useState } from "react";
import TagList from "./TagList.jsx";
import { fetchTags } from "../services/api.js";

function Quote({ quote }) {
  const [tags, setTags] = useState([]);
  const [loadingTags, setLoadingTags] = useState(true);
  const [errorTags, setErrorTags] = useState(null);

  useEffect(() => {
    const loadTags = async () => {
      try {
        // Intentamos cargar los tags de la caché
        const cachedTags = JSON.parse(localStorage.getItem("tagsCache")) || {};
        if (cachedTags[quote.quote]) {
          setTags(cachedTags[quote.quote]);
        } else {
          const tagList = await fetchTags(quote.quote);
          setTags(tagList);
          const updatedCache = { ...cachedTags, [quote.quote]: tagList };
          localStorage.setItem("tagsCache", JSON.stringify(updatedCache));
        }
      } catch (err) {
        setErrorTags(err.message);
      } finally {
        setLoadingTags(false);
      }
    };

    loadTags();
  }, [quote.quote]);

  return (
    <article>
      <h2>{quote.author}</h2>
      <p>"{quote.quote}"</p>
      {loadingTags && <p>Loading tags...</p>}
      {errorTags && <p>Error: {errorTags}</p>}
      {!loadingTags && !errorTags && <TagList tags={tags} />}
    </article>
  );
}

export default Quote;
