type IInfo = {
    label: string;
    to: string;
};

interface IInfoSection {
    label: string;
    texts: IInfo[];
}

export const INFOS: IInfoSection[] = [
    {
        label: "Product",
        texts: [
            { label: "About app", to: "#about-app" },
            { label: "Features", to: "#features" },
            { label: "How It works", to: "#how-it-works" },
        ],
    },
    {
        label: "Company",
        texts: [
            { label: "About us", to: "#" },
            { label: "Blog", to: "#" },
            { label: "Career", to: "#" },
            { label: "Contacts", to: "#" },
        ],
    },
    {
        label: "Support",
        texts: [
            { label: "Help", to: "#" },
            { label: "Support center", to: "#" },
            { label: "Confidentiality", to: "#" },
            { label: "Use condition", to: "#" },
        ],
    },
];
