import styles from './page.module.css';
import { Component } from './Component';

export default function Home() {
  return (
    <>
      <Component/>
      <div className={styles.topLevel}>/</div>
    </>
  );

}
