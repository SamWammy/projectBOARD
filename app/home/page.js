"use client" 

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import styles from "./style.module.css";

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
       <div className={styles.navBar}></div>

       <div className={styles.savedProjects}> 
        <h1 className={styles.savedProjectsH}> Saved Projects</h1>
        <div className={styles.projectContainer}>

        </div>
       </div>
    </div>
  );
}
