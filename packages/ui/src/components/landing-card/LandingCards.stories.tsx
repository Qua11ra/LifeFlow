import type { Meta, StoryObj } from "@storybook/react";
import LandingCard from "./LandingCards";

const meta: Meta<typeof LandingCard> = {
    title: "LandingCard",
    component: LandingCard,
    parameters: {
        layout: "centered",
    },
    args: {
        label: "Dream",
        text: "Set your biggest goals and achieve them step by step",
        iconBackgroundColor: "#e0e7ff",
    },
};

type Story = StoryObj<typeof LandingCard>;

export const WithIcon: Story = {
    args: {
        icon: { src: "/icons/star_rating-icon.svg" },
    },
};

export const WithoutIcon: Story = {
    args: {
        icon: undefined,
    },
};

export const PurpleBackground: Story = {
    args: {
        icon: { src: "/icons/star_rating-icon.svg" },
        iconBackgroundColor: "#f3e8ff",
        label: "Step",
        text: "Break down your dream into manageable steps",
    },
};

export default meta;
