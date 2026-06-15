"use client";

import { AuthForm, Button, FileInput, Input, PasswordInput } from "@repo/ui";
import Link from "next/link";
import { type FormEvent } from "react";
import { SwitchThemeButton, useRegistrationForm } from "@/features";
import { REGISTRATION_FIELDS } from "@/features/auth/consts";
import type { FieldType } from "@/features/auth/types";
import styles from "./page.module.css";

const PASSWORD_TYPES: FieldType[] = ["password"];
const FILE_TYPES: FieldType[] = ["file"];
const TOTAL_STEPS = REGISTRATION_FIELDS.length;

export default function RegisterPage() {
    const { errors, step, progress, next, back, submit } =
        useRegistrationForm();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (step < TOTAL_STEPS) {
            next(new FormData(e.currentTarget));
        } else {
            submit(new FormData(e.currentTarget));
        }
    }

    return (
        <AuthForm
            title="Registration"
            onSubmit={handleSubmit}
            progress={progress}
            bottomLink={
                <>
                    <SwitchThemeButton />
                    <p>
                        Already have an account?{" "}
                        <Link href="/login">Login</Link>
                    </p>
                </>
            }
        >
            {REGISTRATION_FIELDS[step - 1]!.map(
                ({ name, type, placeholder }) => {
                    if (PASSWORD_TYPES.includes(type)) {
                        return (
                            <PasswordInput
                                key={name}
                                name={name}
                                placeholder={placeholder}
                                error={errors?.[name]}
                            />
                        );
                    }

                    if (FILE_TYPES.includes(type)) {
                        return (
                            <FileInput
                                key={name}
                                name={name}
                                label={placeholder}
                                error={errors?.[name]}
                            />
                        );
                    }

                    return (
                        <Input
                            key={name}
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            error={errors?.[name]}
                        />
                    );
                },
            )}
            <div className={styles.buttons}>
                {step > 1 && (
                    <Button
                        type="button"
                        variant="outline"
                        onClick={back}
                    >
                        Back
                    </Button>
                )}

                {step === TOTAL_STEPS ? (
                    <Button type="submit" size="medium">
                        Create account
                    </Button>
                ) : (
                    <Button type="submit">
                        Next
                    </Button>
                )}
            </div>
        </AuthForm>
    );
}
