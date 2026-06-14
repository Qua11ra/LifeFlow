"use client";
import { AuthForm, Button, Input } from "@repo/ui";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";
import { REGISTRATION_FIELDS } from "@/features/auth/consts";
import { SwitchThemeButton } from "@/features";
import useAuth from "@/shared/hooks/useAuth";

export default function RegisterPage() {
    const TOTAL_STEPS = Object.entries(REGISTRATION_FIELDS).length;
    const [step, setStep] = useState(1);
    const { errors, registration } = useAuth();

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        setStep(TOTAL_STEPS);
    }

    function handleNext(e: React.MouseEvent<HTMLButtonElement>) {
        if (step >= TOTAL_STEPS) return;

        console.log(e.currentTarget);

        const formData = new FormData();
        const data = Object.fromEntries(formData);

        registration(data, step);

        setStep((prev) => prev + 1);
    }

    function handleBack() {
        if (step < 2) return;

        setStep((prev) => prev - 1);
    }

    return (
        <AuthForm
            step={step}
            stepsCount={TOTAL_STEPS}
            title="Registration"
            onSubmit={handleSubmit}
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
            {REGISTRATION_FIELDS[step]!.map(({ type, placeholder, name }) => (
                <Input
                    key={name}
                    type={type}
                    placeholder={placeholder}
                    error={errors?.[name]}
                />
            ))}
            <div className={styles.buttons}>
                <Button type="button" variant="outline" onClick={handleBack}>
                    Back
                </Button>

                {step === TOTAL_STEPS ? (
                    <Button type="submit" size="medium">
                        Create account
                    </Button>
                ) : (
                    <Button
                        type="button"
                        disabled={step >= TOTAL_STEPS}
                        onClick={handleNext}
                    >
                        Next
                    </Button>
                )}
            </div>
        </AuthForm>
    );
}
