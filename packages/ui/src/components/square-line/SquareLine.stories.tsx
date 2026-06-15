import type { Meta, StoryObj } from "@storybook/react";
import SquareLine from "./SquareLine";

const meta: Meta<typeof SquareLine> = {
    title: "SquareLine",
    component: SquareLine,
    parameters: {
        layout: "centered",
    },
};

type Story = StoryObj<typeof SquareLine>;

export const Default: Story = {};

export default meta;
