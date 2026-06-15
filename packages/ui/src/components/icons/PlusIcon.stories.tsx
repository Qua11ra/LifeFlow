import type { Meta, StoryObj } from "@storybook/react";
import PlusIcon from "./PlusIcon";

const meta: Meta<typeof PlusIcon> = {
    title: "Icons/PlusIcon",
    component: PlusIcon,
    parameters: {
        layout: "centered",
    },
};

type Story = StoryObj<typeof PlusIcon>;

export const Default: Story = {};

export const CustomSize: Story = {
    args: {
        size: 48,
    },
};

export const CustomColor: Story = {
    args: {
        fill: "#8224f6",
    },
};

export default meta;
