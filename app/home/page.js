"use client"
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import styles from "./style.module.css";
import gitPNG from "../../public/git-icon.png"
import MDNPNG from "../../public/MDN-icon.png"
import npmPNG from "../../public/npm-icon.png"
import vercelIcon from "../../public/vercel-icon.png"
import Image from 'next/image'

export default function Page() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [isVantaReady, setIsVantaReady] = useState(false);

  useEffect(() => {
    if (!vantaEffect) {
      import("vanta/dist/vanta.rings.min").then((VANTA) => {
        const effect = VANTA.default({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0,
          color: 0x98ff00,
          backgroundAlpha: 1.0,
        });
        setVantaEffect(effect);
        setIsVantaReady(true); // Set ready state when Vanta is loaded
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // Show loading state or nothing until Vanta is ready
  if (!isVantaReady) {
    return (
      <div className={styles.background}>
        <div className={styles.bgContainer}>
          <div ref={vantaRef} className={styles.vantabg}>
            {/* Vanta will load here */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.background}>
      <div className={styles.bgContainer}>
        <div ref={vantaRef} className={styles.vantabg}>
          <h1 className={styles.backgroundHeader}>Welcome!</h1>
          <p className={styles.headerP}>What contribution will you make today?</p>
        </div>
      </div>

      <div className={styles.navBar}>
      </div>

      <div className={styles.projectsAndResources}>
        <div className={styles.savedProjects}>
          <h1 className={styles.savedProjectsH}> Saved Projects</h1>
          <div className={styles.projectContainer}>
          </div>
        </div>

        <div className={styles.resourcesSection}>
          <h1> Resources </h1>
          <div className={styles.resources}>
            <a href="https://github.com/public-apis/public-apis" target="_blank" rel="noopener noreferrer">
              <div className={styles.resourceBox}>
                <Image src={gitPNG} alt="github image" />
                <h1 className={styles.resourceBoxHeader}> GIT</h1>
              </div>
            </a>
            <a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer">
              <div className={styles.resourceBox}>
                <Image src={MDNPNG} alt="mdn image" />
                <h1 className={styles.resourceBoxHeader}> Web Docs</h1>
              </div>
            </a>
            <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
              <div className={styles.resourceBox}>
                <Image src={npmPNG} alt="npm image" />
                <h1 className={styles.resourceBoxHeader}>NPM </h1>
              </div>
            </a>
            <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
              <div className={styles.resourceBox}>
                <Image src={vercelIcon} alt="vercel image" />
                <h1 className={styles.resourceBoxHeader}>Vercel </h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}