import styles from "./SquareLine.module.css";

export default function SquareLine() {
    return (
        <div className={styles.square_line}>
            <div className={styles.left}></div>
            <div className={styles.center}></div>
            <div className={styles.right}></div>
        </div>
    );
}
