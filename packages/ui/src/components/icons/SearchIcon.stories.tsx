import type { Meta, StoryObj } from "@storybook/react";
import SearchIcon from "./SearchIcon";

const meta: Meta<typeof SearchIcon> = {
    title: "Icons/SearchIcon",
    component: SearchIcon,
    parameters: {
        layout: "centered",
    },
};

type Story = StoryObj<typeof SearchIcon>;

export const Default: Story = {};

export const CustomSize: Story = {
    args: {
        size: 48,
    },
};

export const CustomColor: Story = {
    args: {
        fill: "#4883e4",
    },
};

export default meta;
