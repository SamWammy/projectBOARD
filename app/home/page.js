"use client" 

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import styles from "./style.module.css";
import gitPNG from "../../public/git-icon.png"
import MDNPNG from "../../public/MDN-icon.png"
import npmPNG from "../../public/npm-icon.png"
import vercelIcon from "../../public/vercel-icon.png"
import Image from 'next/image'

// ../ moves up one dir use it multiple times to continue moving up

export default function Page() {
    
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

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
          backgroundAlpha:1.0,
        });
        setVantaEffect(effect);
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className={styles.background}>
          <div  className={styles.bgContainer}>
        <div ref={vantaRef} className={styles.vantabg}> 
            <h1 className={styles.backgroundHeader} >Welcome!
            <p className={styles.headerP}>What contribution will you make today?</p>
            </h1>
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

       {/* 
       The section below is the react code for the resoruces section,this is the grid with the 4 images, 
       each image on click directs user to an external link
       */}
       <div className={styles.resourcesSection}>
        <h1> Resources </h1>
        <div className={styles.resources}>
          <a href="https://github.com/public-apis/public-apis" target="_blank" rel="noopener noreferrer">
         <div className={styles.resourceBox}> <Image src={gitPNG} alt="github image" /> </div>
         </a>
         <a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer">
          <div className={styles.resourceBox}> <Image src={MDNPNG} alt="mdn image" /> </div>
          </a>
          <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
          <div className={styles.resourceBox}> <Image src={npmPNG} alt="npm image" /> </div>
          </a>
          <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer"> 
          <div className={styles.resourceBox}> <Image src={vercelIcon} alt="vercel image" /> </div>
          </a>
         
       </div>
       </div>
       </div>



    </div>
  );
}
