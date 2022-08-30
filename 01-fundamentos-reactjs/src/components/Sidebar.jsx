import {PencilLine} from "phosphor-react"
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css"


export function Sidebar() {
  return(
  <aside className={styles.sidebar}>
    <img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
    <div className={styles.profile}>
     <Avatar src="https://scontent.ffbe2-1.fna.fbcdn.net/v/t1.6435-9/41436397_1845928575488338_3530429809840619520_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE6kUmcpNB2KA4ZVanD9T4H7eZmJz45imDt5mYnPjmKYHu0oWuETnuwlk48bis_2drusWF59mbPiXRfDi5XjRsg&_nc_ohc=08bUKLL_VNUAX8nyUM1&_nc_ht=scontent.ffbe2-1.fna&oh=00_AT-PH-Y14FRVZ5B24khsdXYMb37t8NEow6HBMsR8mhdhLg&oe=633289BE"/>
      <strong>Ricardo Girardi</strong>
      <span>Developer</span>
    </div>
    <footer>
      
      <a href="#">
      <PencilLine size={20}/>
        Editar seu Perfil</a>
    </footer>
  </aside>
);
}
