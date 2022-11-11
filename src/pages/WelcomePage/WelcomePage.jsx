import React from 'react';
import logo from "../../logo.png";
import {Loader} from "../../components/Loader/Loader";
import styles from './WelcomePage.module.css';

export const WelcomePage = () => {
  return (
    <div>
      <header>
        <h1> ANDERSEN LAB - Warsaw 15.11.2022 </h1>
        <img src={logo} className={styles.appLogo} alt="logo"/>
      </header>
      <main className={styles.appMain}>
        <div><Loader/></div>
        <div><button>123</button></div>
      </main>
    </div>
  );
};