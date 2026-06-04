import type { ILink } from "../../types";

interface IBreadcrumbsProps {
    links: ILink[];
}

export default function Breadcrumbs({ links }: IBreadcrumbsProps) {
    return (
        <nav>
            {links.map(({ label, to }) => (
                <a href={to} key={label}>
                    {` ${label} /`}
                </a>
            ))}
        </nav>
    );
}
