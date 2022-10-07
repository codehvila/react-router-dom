import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styles from "./Post.module.css";

export default function Post() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const {
    data: article,
    isPending,
    error,
  } = useFetch(`http://localhost:3005/articles/${postId}`);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/posts");
      }, 3000);
    }
  }, [error, navigate]);

  return (
    <div className={styles.post}>
      <h2>Post</h2>
      {isPending && <div>Loading Post...</div>}
      {error && <div>{error}</div>}

      {article && (
        <>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
          <p>
            <span className={styles.author}>{article.author}</span>
          </p>
        </>
      )}
    </div>
  );
}
