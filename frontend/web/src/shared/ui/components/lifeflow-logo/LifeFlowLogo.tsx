import Image from "next/image";
import logo from "@/../public/icons/LifeFlow-full_logo.png";

interface LifeFlowLogoProps {
    width?: number;
    heigth?: number;
}

export default function LifeFlowLogo({ width = 200, heigth = 50 }) {
    return (
        <Image src={logo} alt="Logo" width={width} height={heigth} priority />
    );
}
