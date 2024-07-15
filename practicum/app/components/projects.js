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
  return(
    <div className={`${styles["project-content"]} p-4 mb-4 d-flex`}>
      <div className={`${styles["project-text"]} pe-4`}>
        <p className={`fs-3 ${styles["project-name"]}`}>{props.name}</p>
        <p>{props.description}</p>
      </div>
     <div>
      <div className={`${styles["project-img"]}`}>
        <Image
            src="/images/me.webp"
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
      <section id="projects" className={`${styles.projects} d-flex flex-column align-items-center p-4`}>
        <h1>Projects</h1>
        <div>
          <ProjectContent
            name="Product Image Labels"
            description="A new feature in the Prosperna merchant platform."
            skills={["Front-end Development"]}
            img=""
            button
            />
            <ProjectContent
            name="e-ganapp Web Application"
            description="A new feature in the Prosperna merchant platform."
            skills={["Front-end Development"]}
            img=""
            button
            />
        </div>
      </section>
    )
  }
  