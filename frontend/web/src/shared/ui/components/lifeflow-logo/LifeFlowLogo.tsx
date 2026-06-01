import Image from "next/image";
import fullLogo from "@/../public/icons/LifeFlow-full_logo.png";
import logo from "@/../public/icons/LifeFlow-logo.png";

type LogoSize = "small" | "big";

interface LifeFlowLogoProps {
    width?: number;
    heigth?: number;
    size?: LogoSize;
}

const BIG_LOGO_WIDTH = 200,
    BIG_LOGO_HEIGHT = 75,
    LOGO_WIDTH = 50,
    LOGO_HEIGHT = 35;

export default function LifeFlowLogo({
    width,
    heigth,
    size = "big",
}: LifeFlowLogoProps) {
    const DEFAULT_LOGO_WIDTH =
            width || (size === "big" ? BIG_LOGO_WIDTH : LOGO_WIDTH),
        DEFAULT_LOGO_HEIGHT =
            heigth || (size === "big" ? BIG_LOGO_HEIGHT : LOGO_HEIGHT);

    return (
        <Image
            src={size === "big" ? fullLogo : logo}
            alt=""
            width={DEFAULT_LOGO_WIDTH}
            height={DEFAULT_LOGO_HEIGHT}
            priority
        />
    );
}
