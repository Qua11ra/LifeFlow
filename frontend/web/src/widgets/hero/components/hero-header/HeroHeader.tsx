import styles from "./HeroHeader.module.css";
import NavList from "../nav-list/NavList";
import Button from "@/shared/ui/button/Button";
import LifeFlowLogo from "@/shared/ui/lifeflow-logo/LifeFlowLogo";

export default function HeroHeader() {
    return (
        <div className={styles.hero_header}>
            <LifeFlowLogo />
            <NavList />
            <Button>
                Begin the road
            </Button>
        </div>
    );
}
