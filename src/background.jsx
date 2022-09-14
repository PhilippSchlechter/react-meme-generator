import styles from './App.css';

const Background = () => {
  return (
    <article
      className={styles.article}
      style={{ backgroundImage: `https://api.memegen.link/images/doge.jpg` }}
    >
      <h1 className={styles.header}>React Is Awesome</h1>
    </article>
  );
};

export default Background;
