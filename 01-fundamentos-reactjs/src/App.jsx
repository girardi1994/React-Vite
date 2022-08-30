import "./global.css";
import { Header } from "./components/Header";

import { Post } from "./Post";
import styles from "../src/App.module.css";

import { Sidebar } from "./components/Sidebar";
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Ricardo Girardi" content="fsdgsfgsfgdfg" />
          <Post author="Gabriel Buzzi" content="Um post muito legal" />
        </main>
      </div>
    </div>
  );
}
