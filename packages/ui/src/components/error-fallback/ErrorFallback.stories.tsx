import type { Meta, StoryObj } from "@storybook/react";
import ErrorFallback from "./ErrorFallback";
import LifeFlowLogo from "../lifeflow-logo/LifeFlowLogo";

const meta: Meta<typeof ErrorFallback> = {
    title: "ErrorFallback",
    component: ErrorFallback,
    parameters: {
        layout: "fullscreen",
    },
    args: {
        title: "Something went wrong",
    },
};

type Story = StoryObj<typeof ErrorFallback>;

export const Default: Story = {
    args: {
        onGoBack: () => alert("Go back"),
        onRefresh: () => alert("Refresh"),
    },
};

export const WithLogo: Story = {
    args: {
        onGoBack: () => alert("Go back"),
        onRefresh: () => alert("Refresh"),
        logo: <LifeFlowLogo src="/icons/LifeFlow-full_logo.png" alt="LifeFlow" size="small" />,
    },
};

export const Minimal: Story = {
    args: {
        onRefresh: () => alert("Refresh"),
    },
};

export default meta;
