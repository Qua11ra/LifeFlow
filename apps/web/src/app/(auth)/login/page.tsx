"use client";
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
            bottomLink={
                <div>
                    <p>
                        Don&apos;t have an account?{" "}
                        <Link href="/register">Register</Link>
                    </p>
                </div>
            }
        >
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button type="submit" size="medium" disabled={pending}>
                Login
            </Button>
        </AuthForm>
    );
}
