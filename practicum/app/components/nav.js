import styles from "../styles/nav.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    
    return (
      <div className={`${styles.nav} p-3 d-flex align-items-center justify-content-between`}>
        <Link href="./">
            <Image
                src="../header_logo.svg"
                width={50}
                height={50}
            />
        </Link>
        <ul className={"list-unstyled d-flex gap-3"}>
            <li><Link className={"text-reset text-decoration-none"} href="./#about">About</Link></li>
            <li><Link className={"text-reset text-decoration-none"} href="./#experience">Experience</Link></li>
            <li><Link className={"text-reset text-decoration-none"} href="./#projects">Projects</Link></li>
            <li><Link className={"text-reset text-decoration-none"} href="/practicum">Practicum</Link></li>
            <li><Link className={"text-reset text-decoration-none"} href="./#contact">Contact</Link></li>
        </ul>
      </div>
    )
  }
  