import styles from "./App.module.css";
import { Header } from "./components/Header";
import { List } from "./components/List";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
        <List />
      </main>
    </div>
  );
}

export default App;
