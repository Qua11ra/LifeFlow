import starIcon from "@/../public/icons/star-icon.svg"
import flagIcon from "@/../public/icons/flag-icon.svg"
import boltIcon from "@/../public/icons/bolt-icon.svg"

interface ICard {
    icon: string,
    iconBackgroundColor: string,
    label: string,
    text: string
}

export const CARDS_LIST: ICard[] = [
    {icon: starIcon, iconBackgroundColor: "#bbb9ff60", label: "Dreams", text: "Save your big goals in this"},
    {icon: flagIcon, iconBackgroundColor: "#ecb9ff60", label: "Steps", text: "Split the goals into the steps and check your progress"},
    {icon: boltIcon, iconBackgroundColor: "#cbffe460", label: "Actions", text: "Finish the small steps every day"}
]