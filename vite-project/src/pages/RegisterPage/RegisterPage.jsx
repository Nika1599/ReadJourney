import css from "./RegisterPage.module.css";
import Logo from "../../components/Logo/Logo";
import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx";

const RegisterPage = () => {
  return (
    <div>
      <Logo />
      <h1 className={css.mainTitle}>
        Expand your mind, reading <span className={css.titleText}>a book</span>
      </h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
