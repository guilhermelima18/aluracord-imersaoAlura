import Button from "./Button";
import Input from "./Input";
import styles from "./styles.module.scss";

const FormLogin = () => {
  return (
    <form className={styles.form}>
      <h1>Boas vindas de volta!</h1>
      <h4>Aluracord - Alura Matrix</h4>
      <div className={styles.inputGroup}>
        <Input type="text" placeholder="Username" />
        <Button text="Entrar" />
      </div>
    </form>
  );
};

export default FormLogin;
