import logo from "../../logo.png";
import styles from './WelcomePage.module.css';
import {Loader} from "../../components/Loader/Loader";
import {Button, ButtonVariant} from "../../components/Button/Button";

export const WelcomePage = () => {
  return (
    <div>
      <header>
        <h1> ANDERSEN LAB - Warsaw 15.11.2022 </h1>
        <img src={logo} className={styles.appLogo} alt="logo"/>
      </header>
      <main className={styles.appMain}>
        <div><Loader/></div>
        <div>
          <Button variant={ButtonVariant.OUTLINE}>Test button</Button>
        </div>
        <div>
          <Button variant={ButtonVariant.CLEAR}>Test button</Button>
        </div>
        <div>
          <Button variant={ButtonVariant.BACKGROUND}>Test button</Button>
        </div>
      </main>
    </div>
  );
};