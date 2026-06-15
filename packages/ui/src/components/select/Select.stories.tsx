import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
    title: "Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    args: {
        options: [
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
        ],
    },
};

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
    args: {
        options: [
            { value: "", label: "Choose an option" },
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
        ],
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export default meta;
