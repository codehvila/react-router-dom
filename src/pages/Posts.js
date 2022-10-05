import useFetch from "../hooks/useFetch";

import styles from "./Posts.module.css";

export default function Posts() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3005/articles");

  return (
    <div className={styles.post}>
      <h2>Posts</h2>
      {isPending && <div>Loading Posts...</div>}
      {error && <div>{error}</div>}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className={styles.card}>
            <h3>{article.title}</h3>
            <p>
              <span className={styles.author}>{article.author}</span>
            </p>
          </div>
        ))}

      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, maiores facere totam perferendis officiis suscipit,
          numquam enim debitis repellat consequuntur velit. Nostrum nobis rem
          minus, amet ullam aspernatur sint placeat.
        </span>
      </p>
    </div>
  );
}
