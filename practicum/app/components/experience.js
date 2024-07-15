import styles from "../styles/experience.module.css";

export default function Experience() {
    
    return (
      <section id="experience" className={`${styles.experience} d-flex flex-lg-row flex-column`}>
        
        <div className={`${styles["experience-list"]} w-lg-50 p-4`}>
            <h2>Experiences</h2>
            <ul className={"list-unstyled mt-4"}>
                <li className={`d-flex gap-4`}>
                    <img src="../sparkle.svg"
                        className={`${styles["sparkle-bullet"]} mt-1`}
                        width={25}
                        height={25}
                    />
                    <div>
                        <p className={`mb-0 pb-0 fw-bold`}>Front-end Development Intern</p>
                        <p>Prosperna</p>
                    </div>
                </li>
                <li className={`d-flex gap-4`}>
                    <img src="../sparkle.svg"
                        className={`${styles["sparkle-bullet"]} mt-1`}
                        width={25}
                        height={25}
                    />
                    <div>
                        <p className={`mb-0 pb-0 fw-bold`}>Web Developer and User-interface Designer</p>
                        <p>e-ganapp - A Seamless Event Management System for Mapúa MCL (Thesis Project)</p>
                    </div>
                </li>
                <li className={`d-flex gap-4`}>
                    <img src="../sparkle.svg"
                        className={`${styles["sparkle-bullet"]} mt-1`}
                        width={25}
                        height={25}
                    />
                    <div>
                        <p className={`mb-0 pb-0 fw-bold`}>Art/Merch Director</p>
                        <p>Mapúa Malayan Colleges Laguna Cup 2024 (Mapúa MCL Cup 2024)</p>
                    </div>
                </li>
                <li className={`d-flex gap-4`}>
                    <img src="../sparkle.svg"
                        className={`${styles["sparkle-bullet"]} mt-1`}
                        width={25}
                        height={25}
                    />
                    <div>
                        <p className={`mb-0 pb-0 fw-bold`}>Creatives Director</p>
                        <p>Mapúa Malayan Colleges Laguna Supreme Student Council (MMCL-SSC)</p>
                    </div>
                </li>
                <li className={`d-flex gap-4`}>
                    <img src="../sparkle.svg"
                        className={`${styles["sparkle-bullet"]} mt-1`}
                        width={25}
                        height={25}
                    />
                    <div>
                        <p className={`mb-0 pb-0 fw-bold`}>Creatives Volunteer</p>
                        <p>Mapúa Malayan Colleges Laguna College of Computer Science Student Council (MMCL-CCIS SC)</p>
                    </div>
                </li>
            </ul>
        </div>

        <div className={` w-lg-50 p-4`}>
            <h2>Skills</h2>
            <ul className={`${styles["skills-list"]} list-unstyled mt-4 gap-3`}>
                <li className={`${styles.skills} p-2 text-center`}>
                    HTML/CSS/SCSS
                </li>
                <li className={`${styles.skills} p-2 text-center`}>
                    Javascript/Jquery
                </li>
                <li className={`${styles.skills} p-2 text-center`}>
                    PHP
                </li>
                <li className={`${styles.skills} p-2 text-center`}>
                    ReactJS
                </li>
                <li className={`${styles.skills} p-2 text-center`}>
                    NextJS
                </li>
                <li className={`${styles.skills} p-2 text-center`}>
                    Bootstrap
                </li>
                <li className={`${styles.skills} p-2 text-center`}>
                    GSAP
                </li>
                <li className={`${styles.skills} p-2 text-center`}>
                    Figma
                </li>
            </ul>
        </div>   
      </section>
    )
  }
  