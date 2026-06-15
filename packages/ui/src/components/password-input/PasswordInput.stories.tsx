import type { Meta, StoryObj } from "@storybook/react";
import PasswordInput from "./PasswordInput";

const meta: Meta<typeof PasswordInput> = {
    title: "PasswordInput",
    component: PasswordInput,
    parameters: {
        layout: "centered",
    },
    args: {
        placeholder: "Enter password",
    },
};

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {};

export const WithValue: Story = {
    args: {
        defaultValue: "secret123",
    },
};

export const WithError: Story = {
    args: {
        error: "Password must be at least 8 characters",
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        defaultValue: "secret123",
    },
};

export default meta;
