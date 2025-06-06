
"use client";
import Image from 'next/image'
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import mainLogo from "../public/maintext2.svg"
import logo from "../public/logo.svg"
import { redirect } from 'next/navigation';

export default function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      Promise.all([
        import("three"),
        import("vanta/dist/vanta.globe.min"),
      ]).then(([THREE, VANTA]) => {
        setVantaEffect(
          VANTA.default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xffffff,
            color2: 0xffffff,
            backgroundColor: 0x23153c,
          })
        );
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const clickRef = useRef(null);
  return (
    <main>
      <div className={styles.frame}>
      <div className={styles.navbar}>
        <Image src={logo} className={styles.logo} alt="logo"></Image>
        <div> <button className="sign-in" onClick={defer}> sign in </button></div>
      </div>
      <div ref={vantaRef} className={styles.contentBackground}>
        <Image src={mainLogo} className={styles.maintext} alt="Main Text"></Image>
        <p className={styles.topText}>Looking for your next project to work on?</p>
        <p className={styles.bottomText}>You can apply to development teams looking for talent like yours for the next big project!</p>
        <p className={styles.linkText} onClick={() => {
          clickRef.current?.scrollIntoView({behavior: 'smooth'});
        }}>More Info</p>
      </div>
      <div ref={clickRef} className={styles.middleBackground}>
      </div>
      <div className={styles.bottomBackground}></div>
      </div>
    </main>
  );
}


function defer(){
  redirect('/sign-in')
}