type LogoSize = "small" | "big";

interface LifeFlowLogoProps {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    size?: LogoSize;
}

const BIG_LOGO_WIDTH = 200,
    BIG_LOGO_HEIGHT = 75,
    LOGO_WIDTH = 50,
    LOGO_HEIGHT = 35;

export default function LifeFlowLogo({
    src = "",
    alt = "",
    width,
    height,
    size = "big",
}: LifeFlowLogoProps) {
    const DEFAULT_LOGO_WIDTH =
            width || (size === "big" ? BIG_LOGO_WIDTH : LOGO_WIDTH),
        DEFAULT_LOGO_HEIGHT =
            height || (size === "big" ? BIG_LOGO_HEIGHT : LOGO_HEIGHT);

    return (
        <img
            src={src}
            alt={alt}
            width={DEFAULT_LOGO_WIDTH}
            height={DEFAULT_LOGO_HEIGHT}
        />
    );
}
