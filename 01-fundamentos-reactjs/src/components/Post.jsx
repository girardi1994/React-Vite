import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://scontent.ffbe2-1.fna.fbcdn.net/v/t1.6435-9/41436397_1845928575488338_3530429809840619520_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE6kUmcpNB2KA4ZVanD9T4H7eZmJz45imDt5mYnPjmKYHu0oWuETnuwlk48bis_2drusWF59mbPiXRfDi5XjRsg&_nc_ohc=08bUKLL_VNUAX8nyUM1&_nc_ht=scontent.ffbe2-1.fna&oh=00_AT-PH-Y14FRVZ5B24khsdXYMb37t8NEow6HBMsR8mhdhLg&oe=633289BE"
          />
          <div className={styles.authorInfo}>
            <span>Developer</span>
          </div>
        </div>

        <time title="30 de Agosto às 10:10h" dataTime="2022-08-30 10:10:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉{''}<a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a>{''}
          <a href="">#nlw</a>{''}
          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
