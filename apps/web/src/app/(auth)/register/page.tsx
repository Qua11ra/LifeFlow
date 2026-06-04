"use client";
import { AuthForm, Button, Input } from "@repo/ui";
import Link from "next/link";
import { useRef, useState } from "react";
import styles from "./page.module.css";

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const fileRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    function handleNext() {
        setStep(2);
    }

    function handleBack() {
        setStep(1);
    }

    if (step === 1) {
        return (
            <AuthForm
                title="Registration"
                onSubmit={handleSubmit}
                bottomLink={
                    <p>
                        Already have an account?{" "}
                        <Link href="/login">Login</Link>
                    </p>
                }
            >
                <Input placeholder="Name" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Password" type="password" />
                <Input placeholder="Confirm password" type="password" />
                <Button type="button" size="medium" onClick={handleNext}>
                    Next
                </Button>
            </AuthForm>
        );
    }

    return (
        <AuthForm
            title="Registration"
            onSubmit={handleSubmit}
            bottomLink={
                <p>
                    Already have an account? <Link href="/login">Login</Link>
                </p>
            }
        >
            <div className={styles.avatar}>
                <label htmlFor="avatar">Avatar (optional)</label>
                <input
                    ref={fileRef}
                    id="avatar"
                    type="file"
                    accept="image/*"
                    className={styles.fileInput}
                />
            </div>
            <div className={styles.buttons}>
                <Button type="button" variant="outline" onClick={handleBack}>
                    Back
                </Button>
                <Button type="submit" size="medium">
                    Create account
                </Button>
            </div>
        </AuthForm>
    );
}
