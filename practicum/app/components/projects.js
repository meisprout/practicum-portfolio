import styles from "../styles/projects.module.css";
import Image from "next/image";

const imageStyle = {
  width:'100%',
  height:'100%',
  border: '3px solid #5D3D87',
  borderRadius:'25px',
  objectFit:'cover'
}

function ProjectContent({...props}){
  let skillListItem = props.skills.map(function(skill) {
    return <li className={`${styles.skill} p-2`}>{skill}</li>;
  });

  return(
    <div className={`${styles["project-content"]} p-4 mb-4 d-flex flex-lg-row flex-column align-items-lg-start align-items-center`}>
      <div className={`${styles["project-text"]} w-lg-50 pe-4`}>
        <p className={`fs-3 fw-semibold ${styles["project-name"]}`}>{props.name}</p>
        <ul className={`d-flex gap-3 list-unstyled`}>
          {skillListItem}
        </ul>
        <p>{props.description}</p>
      </div>
     <div>
      <div className={`${styles["project-img"]}`}>
        <img
            src={props.img}
            width={0}
            height={0}
            style={imageStyle}
            placeholder="empty"
            loading="lazy"
        />
      </div>
     </div>
    </div>
    
  )
}

export default function Projects() {
    
    return (
      <section id="projects" className={`${styles.projects} d-flex flex-column align-items-center`}>
        <h1>Projects</h1>
        <div>
          <ProjectContent
            name="Product Image Labels"
            description="A new feature in the Prosperna merchant platform."
            skills={["Front-end Development"]}
            img="/images/project_preview/product-image-labels.png"
            button
            />
            <ProjectContent
            name="e-ganapp Web Application"
            description="A seamless event management system for Mapua MCL event organizers and attendees."
            skills={["Front-end Development", "UI Design"]}
            img="/images/project_preview/e-ganapp.png"
            button
            />
            <ProjectContent
            name="Art Portfolio"
            description="A web portfolio showcasing my illustrations, along with my commission procedures. Integrated Notion API to retrieve data from my Notion teamspace for a more convenient content management. In the process of redesigning."
            skills={["Front-end Development", "UI Design"]}
            img="/images/project_preview/loafsproutartportfolio.png"
            button
            />
            <ProjectContent
            name="Wheein Day 2023"
            description="(unfinished) A tribute for Jung Wheein’s birthday. Used this personal mini-project to practice GSAP animations by implementing scroll animations for dynamic web experiences."
            skills={["Front-end Development", "UI Design"]}
            img="/images/project_preview/wheeinday.png"
            button
            />
        </div>
      </section>
    )
  }
  