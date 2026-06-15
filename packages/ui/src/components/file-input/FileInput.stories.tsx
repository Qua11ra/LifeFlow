import type { Meta, StoryObj } from "@storybook/react";
import FileInput from "./FileInput";

const meta: Meta<typeof FileInput> = {
    title: "FileInput",
    component: FileInput,
    parameters: {
        layout: "centered",
    },
};

type Story = StoryObj<typeof FileInput>;

export const Default: Story = {};

export const WithLabel: Story = {
    args: {
        label: "Upload your avatar",
    },
};

export const WithError: Story = {
    args: {
        label: "Upload your avatar",
        error: "File is too large. Max size is 5MB",
    },
};

export default meta;
