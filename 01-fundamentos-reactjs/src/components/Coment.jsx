import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Coment.module.css";

export function Coment() {
  return (
    <div className={styles.coment}>
      <Avatar hasBorder={false} src="https://scontent.ffbe2-1.fna.fbcdn.net/v/t1.6435-9/41436397_1845928575488338_3530429809840619520_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE6kUmcpNB2KA4ZVanD9T4H7eZmJz45imDt5mYnPjmKYHu0oWuETnuwlk48bis_2drusWF59mbPiXRfDi5XjRsg&_nc_ohc=08bUKLL_VNUAX8nyUM1&_nc_ht=scontent.ffbe2-1.fna&oh=00_AT-PH-Y14FRVZ5B24khsdXYMb37t8NEow6HBMsR8mhdhLg&oe=633289BE" />
      <div className={styles.comentBox}>
        <div className={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ricardo Girardi</strong>
              <time
                title="30 de Agosto às 10:10h"
                dataTime="2022-08-30 10:10:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
