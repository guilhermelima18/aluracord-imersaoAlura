import Head from "next/head";
import AvatarCard from "../components/AvatarCard";
import FormLogin from "../components/FormLogin";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aluracord | Imersão React da Alura</title>
      </Head>
      <section className={styles.section}>
        <FormLogin />
        <AvatarCard />
      </section>
    </div>
  );
};

export default Home;
