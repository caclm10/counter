"use client";

import dayjs from "dayjs";
import { useStore } from "@nanostores/react";
import { MinusIcon, PlusIcon, RotateCcwIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { $counters } from "@/stores/counter-store";
import type { Counter } from "@/models/counter";

interface Props {
    id: string;
}

export default function Counter({ id }: Props) {
    const items = useStore($counters);

    const counters = JSON.parse(JSON.stringify(items)) as Counter[];
    const counterIndex = items.findIndex((item) => item.id === id);
    const counter = items[counterIndex];

    function setCounters() {
        counters[counterIndex] = counter;
        $counters.set(counters);
    }

    function handleClickIncrement() {
        counter.count++;
        setCounters();
    }

    function handleClickDecrement() {
        counter.count--;
        setCounters();
    }

    function handleClickReset() {
        counter.count = 0;
        setCounters();
    }

    return (
        <>
            <h1 className="text-xl font-medium">{counter?.title}</h1>
            <p className="text-xs italic text-muted-foreground">
                {dayjs(counter?.createdAt).format("DD MMMM YYYY, HH:mm")}
            </p>

            <div className="flex items-center justify-center px-5 py-20">
                <span className="text-9xl">{counter?.count}</span>
            </div>

            <div className="grid mb-4">
                <Button
                    type="button"
                    variant="outline"
                    className="h-20"
                    onClick={handleClickIncrement}
                >
                    <PlusIcon className="size-10" />
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Button
                    type="button"
                    variant="outline"
                    className="h-12"
                    onClick={handleClickDecrement}
                >
                    <MinusIcon className="size-10" />
                </Button>
                <Button
                    type="button"
                    variant="outline"
                    className="h-12"
                    onClick={handleClickReset}
                >
                    <RotateCcwIcon className="size-6" />
                </Button>
            </div>
        </>
    );
}
