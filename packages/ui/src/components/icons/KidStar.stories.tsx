import type { Meta, StoryObj } from "@storybook/react";
import KidStarIcon from "./KidStar";

const meta: Meta<typeof KidStarIcon> = {
    title: "Icons/KidStarIcon",
    component: KidStarIcon,
    parameters: {
        layout: "centered",
    },
};

type Story = StoryObj<typeof KidStarIcon>;

export const Default: Story = {};

export const CustomSize: Story = {
    args: {
        size: 48,
    },
};

export const Colored: Story = {
    args: {
        fill: "#FFD700",
    },
};

export default meta;
