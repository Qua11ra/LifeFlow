"use client";
import Image from "next/image";
import GoUpIcon from "@/../public/icons/goUp-icon.svg";
import styles from "./GoUpButton.module.css";

const ICON_WIDTH = 30,
    ICON_HEIGHT = 30;

export default function GoUpButton() {
    function handleClick() {
        if (!window) return;

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className={styles.goUp}>
            <button onClick={handleClick} className={styles.goUp_button}>
                <Image
                    src={GoUpIcon}
                    width={ICON_WIDTH}
                    height={ICON_HEIGHT}
                    alt="go up"
                />
            </button>
            <p className={styles.clue}>click to go up</p>
        </div>
    );
}
