import styles from "./HeroHeader.module.css";
import NavList from "../nav-list/NavList";
import Button from "@/shared/ui/components/button/Button";
import LifeFlowLogo from "@/shared/ui/components/lifeFlowLogo/LifeFlowLogo";

export default function HeroHeader() {
    return (
        <div className={styles.hero_header}>
            <LifeFlowLogo />
            <NavList />
            <Button>
                <p>Begin the road</p>
            </Button>
        </div>
    );
}
