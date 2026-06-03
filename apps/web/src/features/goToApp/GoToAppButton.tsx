"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/shared";

export default function GoToUpButton() {
    const router = useRouter();
    return (
        <Button size="medium" onClick={() => router.push("/app")}>
            Begin the road
        </Button>
    );
}
