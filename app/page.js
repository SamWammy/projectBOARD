
"use client";
import Image from 'next/image'
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import mainLogo from "../public/maintext2.svg"
import logo from "../public/logo.svg"
import middlePhoto from "../public/kermit.webp"
import instaIcon from "../public/instagram-2-1-logo-svgrepo-com.svg"
import emailIcon from "../public/gmail-icon-logo-svgrepo-com.svg"
// import landing from "../app/landingBack/landing.php"
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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const clickRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  // const signinRef = useRef(null);
  // const signupRef = useRef(null);
  // const instaRef = useRef(null);
  // const emailRef = useRef(null);

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);

  try {
    const res = await fetch('/landing.php', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Failed to send. Please try again.');
    }
  } catch (err) {
    console.error('Error submitting form:', err);
  }
};
  return (
    <main>
      <div className={styles.frame}>
      <div className={styles.navbar}>
        <Image src={logo} className={styles.logo} alt="logo"></Image>
        <div className={styles.navSection}>
        <div className={styles.nav1} onClick={() => {
          clickRef.current?.scrollIntoView({behavior: 'smooth'});
        }}>About</div>
        <div className={styles.nav2} onClick={() => {
          blogRefRef.current?.scrollIntoView({behavior: 'smooth'});
        }}>Blog</div>
        <div className={styles.nav3} onClick={() => {
          contactRef.current?.scrollIntoView({behavior: 'smooth'});
        }}>Contact</div>
        </div>
        <div className={styles.buttonSection}>
        <p className={styles.signin}>Sign in</p>
        <p className={styles.signup}>Login</p>
        </div>
      </div>
      <div ref={vantaRef} className={styles.contentBackground}>
        <Image src={mainLogo} className={styles.maintext} alt="Main Text"></Image>
        <p className={styles.topText}>Looking for your next project to work on?</p>
        <p className={styles.bottomTitleText}>You can apply to development teams looking for talent like yours for the next big project!</p>
        <p className={styles.linkText} onClick={() => {
          clickRef.current?.scrollIntoView({behavior: 'smooth'});
        }}>More Info</p>
      </div>
      <div ref={clickRef} className={styles.middleBackground}>
        <div className={styles.textSect}>

          <div className={styles.textSection}>
            <div className={styles.titleText}>What do we provide?</div>
            {/* <div className={styles.bottomText}>We provide a dynamic platform that connects developers, designers, and technical talent with real-world projects seeking collaborators. 
              Whether you're looking to contribute to a startup, an open-source tool, or a portfolio-building side project, our platform offers curated opportunities for every skill level and interest. 
              Users can discover projects, apply to join development teams, and build experience through hands-on collaboration in a structured, transparent environment.</div> */}
              <div className={styles.bottomText}>We offer a platform that connects developers, designers, and creatives with active projects looking for team members. 
                From early-stage startups to open-source tools, you can find opportunities that match your skills and interests. 
                It's a place to gain experience, contribute to real work, and grow your portfolio.
              </div>
          </div>

          <div className={styles.textSection}>
            <div className={styles.titleText}>Why should you use TaskMatch?</div>
            {/* <div className={styles.bottomText}>Unlike traditional job boards, our platform focuses on project-based collaboration rather than long-term employment. 
              This means you can build your resume, grow your skills, and connect with like-minded creators on your own terms. 
              Whether you're a seasoned developer or just starting out, our site helps you gain practical experience, expand your network, and join projects that align with your passions. 
              It's the ideal space for anyone who wants to build, contribute, and grow in the world of tech.</div> */}
              <div className={styles.bottomText}>Our platform is built for those who want to build, not just apply. 
                Instead of traditional job listings, we focus on real projects you can join and help develop. 
                Whether you're new to the field or a seasoned pro, it's a flexible way to grow your skills, collaborate, and make meaningful contributions.</div>
          </div>
          
          <div className={styles.textSection}>
            <div className={styles.titleText}>What is our story?</div>
            <div className={styles.bottomText}>
              We, like millions of other students, search for real world experience to include in our resumes.
               We saw a gap between learning the code and applying those skills in real world projects. So we built this platform to
               to help others, like us, to find hands on work to apply their skillsets and grow their portfolios.
               </div>
          </div>
        </div>
        <Image src={middlePhoto} className={styles.middlePhoto} alt='photo'></Image>
        </div>
      
      <div ref={contactRef} className={styles.bottomBackground}>
        <div className={styles.bottomOrg}>
        <div className={styles.bottomLink}>
          {/*to be linked to other pages*/}
          <div className={styles.link1}>About us</div>
          <div className={styles.link1}>FAQ</div>
          <div className={styles.link1}>IDK</div>
          </div>
        <div className={styles.svgGroup}>
          <Image src={instaIcon} className={styles.svgIcon} alt='insta'></Image>
          <Image src={emailIcon} className={styles.svgIcon} alt='email'></Image>
        </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.formSect}>
          <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" 
          className={styles.nameSection} required/>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" 
          className={styles.nameSection} required/>
          <textarea type="message" name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" 
          className={styles.messSection} required/>
          <button type="submit" className={styles.submitButton}>Send</button>
          {submitted && <p className={styles.successMessage}>Thank you! Your message has been sent.</p>}
        </form>
      </div>
      </div>
    </main>
  );

}