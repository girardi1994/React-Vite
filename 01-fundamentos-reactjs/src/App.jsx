import "./global.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from "../src/App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://scontent.ffbe2-1.fna.fbcdn.net/v/t1.18169-9/11059866_1028176560587442_821567955355049011_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHIvz9hQq1QcF8cZMZekMzp6wlzhUyX8j_rCXOFTJfyPyOboJOmIzwrVlBvqEDDEbFyCq-Ar58T8Ef5xvNOQMoY&_nc_ohc=AAluPfk2g9cAX8u9Iry&_nc_ht=scontent.ffbe2-1.fna&oh=00_AT_auUZk0thrcYRMrPCDIt3a6J-0ulH2bph4tAFJRSZ4jw&oe=6335D1F7",
      name: "Armando A Joergensen",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋",},

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: 'jane.design/doctorcare' },
    ],
    publishedAT: new Date("2022-08-30 18:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl:
        "https://scontent.ffbe2-1.fna.fbcdn.net/v/t39.30808-6/243045240_4389147671203816_6899883649056193417_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGynUE3Rb6v5c0J_Ub-DRXahJQ4Uy5ktxOElDhTLmS3Eycl9_8kKiNJDda5wFc3X9sj2Y8UgPWMcuQsoxyabUZz&_nc_ohc=tFn8wavFh2oAX99-YIq&_nc_ht=scontent.ffbe2-1.fna&oh=00_AT-OczGOfelxMjmY_LhH0lZ6y5bw93-kSTUt1sQ9tHtm0g&oe=63129E61",
      name: "Laudemir Link",
      role: "Representante comercial",
    },
    content: [
      { type: "paragraph", content: "Lulaaa",},

      { type: "paragraph", content: "Juntos podemos mais! 13🚀" },

      { type: "link", content: 'jane.design/doctorcare' },
    ],
    publishedAT: new Date("2022-08-20 18:30:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAT={post.publishedAT}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
