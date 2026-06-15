import type { Meta, StoryObj } from "@storybook/react";
import LifeFlowLogo from "./LifeFlowLogo";

const meta: Meta<typeof LifeFlowLogo> = {
    title: "LifeFlowLogo",
    component: LifeFlowLogo,
    parameters: {
        layout: "centered",
    },
    args: {
        src: "/icons/LifeFlow-full_logo.png",
        alt: "LifeFlow",
    },
};

type Story = StoryObj<typeof LifeFlowLogo>;

export const Big: Story = {
    args: {
        size: "big",
    },
};

export const Small: Story = {
    args: {
        size: "small",
    },
};

export default meta;
