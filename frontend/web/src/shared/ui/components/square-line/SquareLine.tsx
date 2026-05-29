import Image from "next/image";
import SquareIcon from "@/../public/icons/square-icon.svg"
import styles from "./SquareLine.module.css"

const SQUARE_WIDTH = 15, SQUARE_HEIGHT = 15

export default function SquareLine() {
    return (
        <div className={styles.square_line}>
            <div className={styles.square_line__left}></div>
            <Image src={SquareIcon} alt="" width={SQUARE_WIDTH} height={SQUARE_HEIGHT} className={styles.square_line__center} />
            <div className={styles.square_line__right}></div>
        </div>
    );
};