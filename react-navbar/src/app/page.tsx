import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div id="root">
      <div className="app">
        <header className="header">
          <Nav />
        </header>
        <main className={styles.main}>
          <h1>I'm main</h1>
        </main>
      </div>
    </div>
  );
}
