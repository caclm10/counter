"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { MinusIcon, PlusIcon, RotateCcwIcon } from "lucide-react";
import type { Counter } from "@/models/counter";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import DeleteCounterConfirmation from "@/app/[id]/delete-confirmation";

interface Props {
    id: string;
}

export default function Counter({ id }: Props) {
    const counter = useLiveQuery(async () => {
        const counter = await db.counters.get(id);

        return counter;
    }, [id]);

    const [count, setCount] = useState(0);
    const [initialized, setInitialized] = useState(false);

    function handleClickIncrement() {
        setCount((count) => count + 1);
    }

    function handleClickDecrement() {
        setCount((count) => count - 1);
    }

    function handleClickReset() {
        setCount(0);
    }

    useEffect(() => {
        if (initialized) {
            db.counters.update(id, { count });
        }
    }, [count, initialized]);

    useEffect(() => {
        if (counter && !initialized) {
            setCount(counter?.count || 0);
            setInitialized(true);
        }
    }, [counter, initialized]);

    if (!counter) return null;

    return (
        <>
            <div className="mb-2">
                <h1 className="text-xl font-medium">{counter?.title}</h1>
                <p className="text-xs italic text-muted-foreground">
                    {dayjs(counter?.createdAt).format("DD MMMM YYYY, HH:mm")}
                </p>
            </div>

            <div className="flex justify-end">
                <DeleteCounterConfirmation id={id} />
            </div>

            <div className="flex items-center justify-center px-5 py-20">
                <span className="text-9xl">{count || counter?.count}</span>
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
