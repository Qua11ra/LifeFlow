import type { Meta, StoryObj } from "@storybook/react";
import UploadIcon from "./UploadIcon";

const meta: Meta<typeof UploadIcon> = {
    title: "Icons/UploadIcon",
    component: UploadIcon,
    parameters: {
        layout: "centered",
    },
};

type Story = StoryObj<typeof UploadIcon>;

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
