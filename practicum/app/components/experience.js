import styles from "../styles/experience.module.css";

function ExperienceList({...props}){
    return(
        <li className={`d-flex gap-4`}>
            <img src="../sparkle.svg"
                className={`${styles["sparkle-bullet"]} mt-1`}
                width={25}
                height={25}
            />
            <div className={`d-flex flex-lg-row flex-column`}>
                <div className={`w-50 w-lg-100 gap-4`}>
                    <p className={`mb-0 pb-0 fw-bold fs-5`}>{props.affiliation}</p>
                    <p>{props.role}</p>
                </div>
                <div className={`w-75 ps-lg-4`}>
                    <p>{props.description}</p>
                </div>
            </div>
            
        </li>
    )
}

export default function Experience() {
    
    return (
      <section id="experience" className={`${styles.experience} d-flex flex-lg-row flex-column`}>
        <div className={`${styles["experience-list"]} w-lg-50 p-4`}>
            <h2>Experiences</h2>
            <ul className={"list-unstyled mt-4"}>
                <ExperienceList
                    affiliation="Prosperna"
                    role="Front-end Development Intern"
                    description="Developed a feature for the merchant web platform, conducted User Interface enhancement in the merchant platform, and conducted website building for potential clients."
                />
                <ExperienceList
                    affiliation="e-ganapp - A Seamless Event Management System for Mapúa MCL (Thesis Project)"
                    role="Web Developer and User-interface Designer"
                    description="Consulted with Mapúa MCL student organization heads and the Center for Student Activities and Discipline head to identify user needs regarding event management.
Designed the entire web application for organizers, attendees, and admins.
Developed the front-end for organizers and attendees features.
Aided event attendees in using the app during the “Technopreneurship: A Journey in Building Your Own Tech Startup” Seminar 2024."
                />
                <ExperienceList
                    affiliation="Mapúa Malayan Colleges Laguna Cup 2024 (Mapúa MCL Cup 2024)"
                    role="Art/Merch Director"
                    description="Collaborate with the Office for Corporate Communications (OCC) and Creatives Director to discuss design approaches and ensure branding consistency for the event.
Design merchandise and awards for Mapúa MCL Cup 2024 such as t-shirts and certificates.
Manage associates to ensure that outputs are of quality and followed the event branding."
                />
                <ExperienceList
                    affiliation="Mapúa Malayan Colleges Laguna Supreme Student Council (MMCL-SSC)"
                    role="Creatives Director"
                    description="Collaborate with the creatives committee and the Office for Corporate Communications (OCC) to discuss design approaches and ensure branding consistency for school events.
Design publication materials appropriate to the requirements of each events and announcement.
Design custom assets such as illustrations and logos for publication materials.
Coordinate with other committees for sudden announcements and additional information related to publication material contents.
Assist the creatives director to further ensure a positive and efficient environment in the committee."
                />
                <ExperienceList
                    affiliation="Mapúa Malayan Colleges Laguna College of Computer Science Student Council (MMCL-CCIS SC)"
                    role="Creatives Volunteer"
                    description="Collaborated with the CCIS Student Council and the CCIS Dean to discuss design approaches and ensure branding consistency for CCIS events.
Designed publication materials appropriate to the requirements of each events.
Designed certificate layouts for CCIS Recognition Ceremony and CCIS Week 2023 awardees.
Designed the department shirt for Mr. and Ms. CCIS in Mr. and Ms. Mapúa MCL 2023 and team shirts for CCIS Week 2023.
Posted Facebook stories during CCIS Week 2023 events to update audiences about ongoing activities."
                />
            </ul>
        </div>
      </section>
    )
  }
  