import type { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"

const meta: Meta = {
    title: "Button",
    component: Button,
    parameters: {
        layout: "centered"
    },
    args: {
        children: "TEST"
    }
}

type Story = StoryObj<typeof Button>

export const primarySmall: Story = {
    args: {
        variant: "secondary",
        size: "medium",
        children: "TES"
    },
}

export const primaryMedium: Story = {
    args: {
        variant: "primary",
        size: "medium",
    }
}

export const primaryLarge: Story = {
    args: {
        variant: "primary",
        size: "large",
    }
}

export const secondarySmall: Story = {
    args: {
        variant: "secondary",
        size: "small",
    }
}

export const secondaryMedium: Story = {
    args: {
        variant: "secondary",
        size: "medium",
    }
}

export const secondaryLarge: Story = {
    args: {
        variant: "secondary",
        size: "large",
    }
}

export const outlineSmall: Story = {
    args: {
        variant: "outline",
        size: "small",
    }
}

export const outlineMedium: Story = {
    args: {
        variant: "outline",
        size: "medium",
    }
}

export const outlineLarge: Story = {
    args: {
        variant: "outline",
        size: "large",
    }
}

export default meta