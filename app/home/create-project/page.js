"use client"
import styles from "./style.module.css";
import { redirect } from 'next/navigation';

export default function CreateProj() {
    return(
        <div className={styles.frame}>
            <div className={styles.navbar}></div>
            <div className={styles.formBack}></div>
        </div>
    );
}