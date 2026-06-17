"use client";
import { AuthForm, Button, Input, PasswordInput } from "@repo/ui";
import Link from "next/link";
import type { FormEvent } from "react";
import { SwitchThemeButton, useLoginForm } from "@/features";
import { LOGIN_FIELDS } from "@/features/auth/consts";
import type { FieldType } from "@/features/auth/types";

const PASSWORD_TYPES: FieldType[] = ["password"];

export default function LoginPage() {
    const { errors, progress, submit } = useLoginForm();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        submit(new FormData(e.currentTarget));
    }

    return (
        <AuthForm
            title="Login"
            onSubmit={handleSubmit}
            progress={progress}
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
            {LOGIN_FIELDS.map(({ name, type, placeholder }) =>
                PASSWORD_TYPES.includes(type) ? (
                    <PasswordInput
                        key={name}
                        name={name}
                        placeholder={placeholder}
                        error={errors?.[name]}
                    />
                ) : (
                    <Input
                        key={name}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        error={errors?.[name]}
                    />
                ),
            )}
            <Button type="submit" size="medium">
                Login
            </Button>
        </AuthForm>
    );
}
