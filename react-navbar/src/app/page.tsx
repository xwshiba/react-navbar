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
          <h1>Lorem ipsum </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem quidem aut cumque harum, illum, alias temporibus ipsum quibusdam, accusamus et nobis eius saepe ut amet tenetur nam odio delectus?</p>
        </main>
      </div>
    </div>
  );
};
