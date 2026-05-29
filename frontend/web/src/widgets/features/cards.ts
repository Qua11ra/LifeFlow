import flagIcon from "@/../public/icons/flag-icon.svg";
import checkIcon from "@/../public/icons/check-icon.svg";
import documentIcon from "@/../public/icons/document-icon.svg";
import chartIcon from "@/../public/icons/chart-icon.svg";
import { ICard } from "@/shared/types/card.interface";

export const FEATURES_CARDS_LIST: ICard[] = [
    {
        icon: flagIcon,
        iconBackgroundColor: "#ecb9ff20",
        label: "Dreams and goals",
        text: "Create a big dreams, split they on the possible stages",
    },
    {
        icon: checkIcon,
        iconBackgroundColor: "#00660010",
        label: "Stages and actions",
        text: "Plan steps and daily actions, that bring you closer to your goal",
    },
    {
        icon: documentIcon,
        iconBackgroundColor: "#0066ff20",
        label: "Notes",
        text: "Fix thoughts, ideas and important notes on each stage of way"
    },
    {
        icon: chartIcon,
        iconBackgroundColor: "#cc339920",
        label: "Tracking progress",
        text: "Visualize your progress and take a motivation to move on",
    },
];
