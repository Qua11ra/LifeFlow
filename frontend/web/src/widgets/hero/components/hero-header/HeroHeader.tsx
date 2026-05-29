import Image from "next/image";
import logo from "@/../public/icons/LifeFlow-logo.svg"
import styles from "./HeroHeader.module.css"
import NavList from "../nav-list/NavList";
import Button from "@/shared/ui/components/button/Button";

const LOGOWEIGHT = 50
const LOGOHEIGHT = 50

export default function HeroHeader() {
    return (
        <div className={styles.hero_header}>
            <div className={styles.logo}>
                <Image src={logo} alt="Logo" width={LOGOWEIGHT} height={LOGOHEIGHT} />
                <p className={styles.logo__text}>LifeFlow</p>
            </div>
            <NavList />
            <Button>
                <p>Begin the road</p>
            </Button>
        </div>
    );
};