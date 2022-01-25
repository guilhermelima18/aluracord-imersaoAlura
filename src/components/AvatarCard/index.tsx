/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

const AvatarCard = () => {
  return (
    <article className={styles.article}>
      <img src="https://github.com/guilhermelima18.png" alt="Avatar" />
      <span>guilhermelima18</span>
    </article>
  );
};

export default AvatarCard;
