import type { Meta, StoryObj } from "@storybook/react";
import AuthForm from "./AuthForm";
import Input from "../input/Input";
import Button from "../button/Button";

const meta: Meta<typeof AuthForm> = {
    title: "AuthForm",
    component: AuthForm,
    parameters: {
        layout: "centered",
    },
};

type Story = StoryObj<typeof AuthForm>;

export const Login: Story = {
    args: {
        title: "Welcome back",
        progress: 100,
        bottomLink: (
            <p>
                Don&apos;t have an account? <a href="#">Sign up</a>
            </p>
        ),
        onSubmit: (e) => {
            e.preventDefault();
            alert("Submitted");
        },
    },
    render: (args) => (
        <AuthForm {...args}>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button type="submit" variant="primary" size="medium">
                Log in
            </Button>
        </AuthForm>
    ),
};

export const Register: Story = {
    args: {
        title: "Create account",
        progress: 50,
        bottomLink: (
            <p>
                Already have an account? <a href="#">Log in</a>
            </p>
        ),
        onSubmit: (e) => {
            e.preventDefault();
            alert("Submitted");
        },
    },
    render: (args) => (
        <AuthForm {...args}>
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button type="submit" variant="primary" size="medium">
                Sign up
            </Button>
        </AuthForm>
    ),
};

export default meta;
