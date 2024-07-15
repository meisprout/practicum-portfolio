import styles from "../styles/contact.module.css";
import Image from "next/image";

export default function Contact() {
    
    return (
      <section id="contact" className={`d-flex flex-lg-row flex-column`}>
        
        <div className={`w-50 p-4`}>
            <h1>Let's connect together!</h1>
            <ul className={`${styles["skills-list"]} list-unstyled mt-4`}>
              <li><button className={`btn mb-2`}>CV</button></li>
              <li><button className={`btn mb-2`}>Github</button></li>
              <li><button className={`btn mb-2`}>Linkedin</button></li>
              <li><button className={`btn mb-2`}>eahxmaala@gmail.com</button></li>
              <li><button className={`btn`}>09260310012</button></li>
            </ul>
            
        </div>
        <form className={`w-50 p-4`}>
            <label>Email</label>
            <input className={`${styles.input} form-control w-75 mb-4`}/>

            <label>Subject</label>
            <input className={`${styles.input} form-control w-75 mb-4`}/>

            <label>Message</label>
            <textarea className={`${styles.input} form-control w-75 mb-4`}/>

            <input type="submit" className={`btn`}></input>
        </form>
      </section>
    )
  }
  