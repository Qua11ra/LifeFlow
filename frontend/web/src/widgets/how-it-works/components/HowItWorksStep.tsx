import Image, { StaticImageData } from "next/image";
import styles from "./HowItWorksStep.module.css"

export interface ILandingStepProps {
    stepNum: number,
    label: string,
    text: string,
    image: StaticImageData
}

const STEP_IMAGE_WIDTH = 250, STEP_IMAGE_HEIGHT = 250

export default function HowItWorksStep({stepNum, image, label, text}: ILandingStepProps) {
    return (
        <div className={styles.step}>
            <Image className={styles.step__image} src={image} alt={label} width={STEP_IMAGE_WIDTH} height={STEP_IMAGE_HEIGHT} />
            <h4>{label}</h4>
            <p>{text}</p>
            <div className={styles.step__number}>
                <p>{stepNum}</p>
            </div>
        </div>
    );
};