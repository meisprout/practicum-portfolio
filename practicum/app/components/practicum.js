import Link from "next/link";
import styles from "../styles/practicum.module.css";
import Image from "next/image";

export default function Practicum() {
    
    return (
      <section id="practicum" className={`${styles.practicum} d-flex flex-column align-items-center p-4`}>
            <div className={`w-lg-100 w-75 py-4`}>
              <div className={`d-flex flex-column align-items-center text-center`}>
                <h1>Practicum Experience</h1>
                <p className={`mb-0`}>Prosperna</p>
                <p>April 29, 2024 - July 1, 2024</p>
              </div>
              

              <p>For my practicum, I worked as a Front-end Development Intern in an eCommerce company named Prosperna.
              My contributions for this company include Front-end support tasks and Feature Development.</p>

              <p>Working in Prosperna for almost 2 months strengthened my foundations as a developer through
              honing my experience in ReactJS and shaping my skills in teamwork, communication, transparency, and accountability. This practicum
              gave me an opportunity to learn and experience working with technology in a real world setting.</p>
              <div className={`text-center`}><Link href="/practicum"><button className={`btn`}>Read More</button></Link></div>
              
            </div>
      </section>
    )
  }
  