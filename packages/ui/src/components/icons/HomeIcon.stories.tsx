import type { Meta, StoryObj } from "@storybook/react";
import HomeIcon from "./HomeIcon";

const meta: Meta<typeof HomeIcon> = {
    title: "Icons/HomeIcon",
    component: HomeIcon,
    parameters: {
        layout: "centered",
    },
};

type Story = StoryObj<typeof HomeIcon>;

export const Default: Story = {};

export const CustomSize: Story = {
    args: {
        size: 48,
    },
};

export const CustomColor: Story = {
    args: {
        fill: "#00ff4c",
    },
};

export default meta;
