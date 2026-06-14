"use client";
import { SwitchThemeButton } from "@/features";
import { LOGIN_FIELDS } from "@/features/auth/consts";
import useAuth from "@/shared/hooks/useAuth";
import { AuthForm, Button, Input } from "@repo/ui";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const TOTAL_STEPS = LOGIN_FIELDS.length;
    const [step, _] = useState(1);
    const { login, errors } = useAuth();
    

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData);
        
        const result = await login(data, step);
        console.log(errors)
        if (!result) return;
    }

    return (
        <AuthForm
            title="Login"
            onSubmit={handleSubmit}
            step={step}
            stepsCount={TOTAL_STEPS}
            bottomLink={
                <>
                    <SwitchThemeButton />
                    <p>
                        Don&apos;t have an account?{" "}
                        <Link href="/register">Register</Link>
                    </p>
                </>
            }
        >
            {LOGIN_FIELDS.map(({ type, placeholder, name }) => (
                <Input
                    error={errors?.[name]}
                    key={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                />
            ))}
            <Button type="submit" size="medium">
                Login
            </Button>
        </AuthForm>
    );
}
