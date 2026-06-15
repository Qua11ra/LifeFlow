import type { Meta, StoryObj } from "@storybook/react";
import { VisibilityIcon, VisibilityOffIcon } from "./VisibilityIcon";

const meta: Meta<typeof VisibilityIcon> = {
    title: "Icons/VisibilityIcon",
    component: VisibilityIcon,
    parameters: {
        layout: "centered",
    },
};

type Story = StoryObj<typeof VisibilityIcon>;

export const Visible: Story = {};

export const VisibleCustomSize: Story = {
    args: {
        size: 48,
    },
};

export const Hidden: Story = {
    render: (args) => <VisibilityOffIcon {...args} />,
};

export const HiddenCustomSize: Story = {
    render: (args) => <VisibilityOffIcon {...args} />,
    args: {
        size: 48,
    },
};

export default meta;
