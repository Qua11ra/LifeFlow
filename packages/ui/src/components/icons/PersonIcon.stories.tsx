import type { Meta, StoryObj } from "@storybook/react";
import PersonIcon from "./PersonIcon";

const meta: Meta<typeof PersonIcon> = {
    title: "Icons/PersonIcon",
    component: PersonIcon,
    parameters: {
        layout: "centered",
    },
};

type Story = StoryObj<typeof PersonIcon>;

export const Default: Story = {};

export const CustomSize: Story = {
    args: {
        size: 48,
    },
};

export const CustomColor: Story = {
    args: {
        fill: "#5a9bf5",
    },
};

export default meta;
