import { Component } from "../Component";

import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Component/>
      <div className={styles.test}>/test</div>
    </>
  );
}
