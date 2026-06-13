"use client";
import { SwitchThemeButton } from "@/features";
import { LOGIN_FIELDS } from "@/features/auth/consts";
import { AuthForm, Button, Input } from "@repo/ui";
import Link from "next/link";
import { useFormStatus } from "react-dom";

export default function LoginPage() {
    const { pending } = useFormStatus();

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
    }
    return (
        <AuthForm
            title="Login"
            onSubmit={handleSubmit}
            step={1}
            stepsCount={1}
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
            {LOGIN_FIELDS.map(({ type, placeholder, value }) => (
                <Input
                    error={"error"}
                    key={placeholder}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                />
            ))}
            <Button type="submit" size="medium" disabled={pending}>
                Login
            </Button>
        </AuthForm>
    );
}
