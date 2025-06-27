"use client";
import next from "next";
import styles from "./style.module.css";
import { redirect } from "next/navigation";
import Image from 'next/image'; 
import logo from "../../../public/logo.svg";

export default function CreateProj() {
  return (
    <div className={styles.frame}>
      <div className={styles.navbar}>
        <Image src={logo} className={styles.logo} alt="logo" ></Image>
       
        <div className={styles.navsection}>
          <div className={styles.nav}>option</div>
          <div className={styles.nav}>option</div>
          <div className={styles.nav}>option</div>
        </div>
      </div>

      <div className={styles.formBack}></div>
    </div>
  );
}
