import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/practicum.module.css";


export default function TOC() {
    
    return (
      <div className={`${styles.toc} p-3`}>
        <ul className={"gap-3"}>
            <li><Link className={"text-reset text-decoration-none"} href="#introduction">Introduction</Link></li>
            <li><Link className={"text-reset text-decoration-none"} href="#outputs">Outputs</Link></li>
            <li><Link className={"text-reset text-decoration-none"} href="#synthesis">Synthesis</Link></li>
            <li><Link className={"text-reset text-decoration-none"} href="#appendices">Appendices</Link></li>
        </ul>
      </div>
    )
  }
  