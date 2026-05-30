import Image from "next/image";
import logo from "@/../public/icons/LifeFlow-logo.png";

const LOGOWEIGHT = 200,
    LOGOHEIGHT = 50;

export default function LifeFlowLogo() {
    return (
        <Image
                src={logo}
                alt="Logo"
                width={LOGOWEIGHT}
                height={LOGOHEIGHT}
            />
    );
};