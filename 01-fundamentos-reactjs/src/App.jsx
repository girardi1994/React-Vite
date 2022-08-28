import { Header } from './components/Header';
import {Post} from './Post';
import "./global.css";
export function App() {

  return (
    <div>
      <Header />
    <Post
      author="Ricardo Girardi"
      content="fsdgsfgsfgdfg"
    />
    <Post
    author="Gabriel Buzzi"
    content="Um post muito legal"
    />
    
    
  </div>
  );
}


