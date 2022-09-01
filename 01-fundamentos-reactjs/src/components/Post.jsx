import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Coment } from "./Coment";
import styles from "./Post.module.css";

export function Post({ author, publishedAT, content }) {
  const [coments, setComents] = useState(["Post muito bacana, hein?"]);
  const [newComentText, setNewComentText] = useState("");
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
  });

  function handleCreateNewComent() {
    event.preventDefault()

    setComents([...coments, newComentText]);
    setNewComentText("");
  }

  function handleNewComentChange() {
    event.target.setCustomValidity("");
    setNewComentText(event.target.value);
  }
  function handleNewComentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }
  function deleteComent(comentToDelete) {
    const comentWithoutDeleteOne = coments.filter((coment) => {
      return coment !== comentToDelete;
    });
    setComents(comentWithoutDeleteOne);
  }

  const isNewComentEmpty = newComentText.length === 0;
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
        {content.map((line, index) => {
          if (line.type == "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type == "link") {
            return (
              <p key={index}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComent} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="coment"
          placeholder="Deixe um comentário"
          value={newComentText}
          onChange={handleNewComentChange}
          onInvalid={handleNewComentInvalid}
          required={true}
        />
        <footer>
          <button type="submit" disabled={isNewComentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.comentList}>
        {coments.map((coment) => {
          return (
            <Coment
              key={coment}
              content={coment}
              onDeleteComent={deleteComent}
            />
          );
        })}
      </div>
    </article>
  );
}
