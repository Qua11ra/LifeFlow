import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import SearchIcon from "../icons/SearchIcon";

const meta: Meta<typeof Input> = {
    title: "Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    args: {
        placeholder: "Type something...",
    },
};

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithValue: Story = {
    args: {
        defaultValue: "Some text",
    },
};

export const WithIcon: Story = {
    args: {
        icon: <SearchIcon />,
        placeholder: "Search...",
    },
};

export const WithError: Story = {
    args: {
        error: "This field is required",
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        defaultValue: "Disabled input",
    },
};

export default meta;
