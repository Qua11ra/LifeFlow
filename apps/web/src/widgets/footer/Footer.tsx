import { LifeFlowLogo } from "@repo/ui";
import Image from "next/image";
import instagramIcon from "@/../public/icons/instagram-icon.svg";
import telegramIcon from "@/../public/icons/telegram-icon.svg";
import xIcon from "@/../public/images/x-logog.png";
import styles from "./Footer.module.css";
import { INFOS } from "./infos";

const FOOTER_LOGO_WIDTH = 20,
    FOOTER_LOGO_HEIGHT = 20;

export default function Footer() {
    return (
        <footer className={styles.footer_section}>
            <div className={styles.main}>
                <div className={styles.logos}>
                    <LifeFlowLogo
                        src="/icons/LifeFlow-full_logo.png"
                        alt="LifeFlow"
                        width={200}
                        height={55}
                    />
                    <p>Your compass on the way to the dreams and big goals</p>
                    <div className={styles.icons}>
                        <Image
                            src={xIcon}
                            alt="x-icon"
                            width={FOOTER_LOGO_WIDTH}
                            height={FOOTER_LOGO_HEIGHT}
                            loading="lazy"
                        />
                        <Image
                            src={instagramIcon}
                            alt="instagram-icon"
                            width={FOOTER_LOGO_WIDTH}
                            height={FOOTER_LOGO_HEIGHT}
                            loading="lazy"
                        />
                        <Image
                            src={telegramIcon}
                            alt="telegram-icon"
                            width={FOOTER_LOGO_WIDTH}
                            height={FOOTER_LOGO_HEIGHT}
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className={styles.info}>
                    {INFOS.map(({ label, texts }) => (
                        <nav key={label} aria-label={label}>
                            <h3>{label}</h3>
                            {texts.map(({ label, to }) => (
                                <a href={to} key={label}>
                                    {label}
                                </a>
                            ))}
                        </nav>
                    ))}
                </div>
            </div>
            <p>© 2026 LiteFlow. All rights reserved.</p>
        </footer>
    );
}
