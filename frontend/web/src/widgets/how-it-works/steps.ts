import { ILandingStepProps } from "./components/HowItWorksStep";
import MountainImage from "@/../public/images/Landing_Mountain.png";
import IslandsImage from "@/../public/images/Landing_Islands.png";

export const HOW_IT_WORKS_STEPS: ILandingStepProps[] = [
    {
        stepNum: 1,
        label: "Create a dream",
        text: "Describe your big goal, you want to achieve",
        image: MountainImage,
    },
    {
        stepNum: 2,
        label: "Split into stages",
        text: "Divide the dream into specific stages with clearly goals",
        image: IslandsImage,
    },
    {
        stepNum: 3,
        label: "Complete the actions",
        text: "Add actions and complete then every day",
        image: IslandsImage,
    },
    {
        stepNum: 4,
        label: "Achieve the dreams",
        text: "Check a progress and have fun from results",
        image: IslandsImage,
    },
];
