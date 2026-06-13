"use client";
import { AuthForm, Button, Input } from "@repo/ui";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";
import { REGISTRATION_FIELDS } from "@/features/auth/consts";
import { SwitchThemeButton } from "@/features";

export default function RegisterPage() {
    const TOTAL_STEPS = Object.entries(REGISTRATION_FIELDS).length;
    const [step, setStep] = useState(1);

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        setStep(TOTAL_STEPS)
    }

    function handleNext() {
        if (step >= TOTAL_STEPS) return;

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
            {REGISTRATION_FIELDS[step]!.map(({ type, placeholder, value }) => (
                <Input
                    key={placeholder}
                    type={type}
                    placeholder={placeholder}
                    value={value}
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
