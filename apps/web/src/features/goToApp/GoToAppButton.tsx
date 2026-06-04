"use client";
import { Button } from "@repo/ui";
import { useRouter } from "next/navigation";

export default function GoToUpButton() {
    const router = useRouter();
    return (
        <Button size="medium" onClick={() => router.push("/app")}>
            Begin the road
        </Button>
    );
}
