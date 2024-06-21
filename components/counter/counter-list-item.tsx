"use client";

import { useRouter } from "next/navigation";
import type { Counter } from "@/models/counter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props extends Counter {}

export default function CounterListItem({ id, title, count }: Props) {
    const router = useRouter();

    function handleClick() {
        router.push(`/${id}`);
    }

    return (
        <Card
            role="button"
            className="active:bg-foreground/5"
            onClick={handleClick}
        >
            <CardHeader>
                <CardTitle className="text-lg font-medium select-none">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-center text-center">
                    <span className="text-6xl font-semibold select-none">
                        {count}
                    </span>
                </div>
            </CardContent>
        </Card>
    );
}
