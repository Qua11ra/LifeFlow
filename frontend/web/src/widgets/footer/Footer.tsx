import LifeFlowLogo from "@/shared/ui/components/lifeFlowLogo/LifeFlowLogo";
import styles from "./Footer.module.css";
import Image from "next/image";
import xIcon from "@/../public/images/x-logog.png";
import instagramIcon from "@/../public/icons/instagram-icon.svg";
import telegramIcon from "@/../public/icons/telegram-icon.svg";

const FOOTER_LOGO_WIDTH = 20,
    FOOTER_LOGO_HEIGHT = 20;

export default function Footer() {
    return (
        <footer className={styles.footer_section}>
            <div className={styles.footer_section__main}>
                <div className={styles.footer_section__main__logos}>
                    <LifeFlowLogo />
                    <p>Your compass on the way to the dreams and big goals</p>
                    <div className={styles.footer_section__main__logos__icons}>
                        <Image
                            src={xIcon}
                            alt="x-icon"
                            width={FOOTER_LOGO_WIDTH}
                            height={FOOTER_LOGO_HEIGHT}
                        />
                        <Image
                            src={instagramIcon}
                            alt="instagram-icon"
                            width={FOOTER_LOGO_WIDTH}
                            height={FOOTER_LOGO_HEIGHT}
                        />
                        <Image
                            src={telegramIcon}
                            alt="telegram-icon"
                            width={FOOTER_LOGO_WIDTH}
                            height={FOOTER_LOGO_HEIGHT}
                        />
                    </div>
                </div>
                <div className={styles.footer_section__main__info}>
                    <div>
                        <strong>Product</strong>
                        <a href="#about-app">About app</a>
                        <a href="#features">Features</a>
                        <a href="#how-it-works">How It works</a>
                    </div>
                    <div>
                        <strong>Company</strong>
                        <a href="#">About us</a>
                        <a href="#">Blog</a>
                        <a href="#">Career</a>
                        <a href="#">Contacts</a>
                    </div>
                    <div>
                        <strong>Support</strong>
                        <a href="#">Help</a>
                        <a href="#">Support center</a>
                        <a href="#">About app</a>
                        <a href="#">Confidentiality</a>
                        <a href="#">Use condition</a>
                    </div>
                </div>
            </div>
            <p>© 2026 LiteFlow. All rights reserved.</p>
        </footer>
    );
}
