import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Coment } from "./Coment";
import styles from "./Post.module.css";

export function Post({ author, publishedAT, content }) {
  const [coments, setComents] = useState([
    1,

  ])
  const publishedDateFormatted = format(
    publishedAT,
    "d 'de' LLLL 'às' HH:MM'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAT, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComent(){
    event.preventDefault()
    setComents([...coments, coments.length + 1]);
  };
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAT.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type == "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type == "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComent} className={styles.comentForm}>
        <strong>Deixe sei feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.comentList}>
        {coments.map(coment => {
          return <Coment/>
          })}
      </div>
    </article>
  );
}
