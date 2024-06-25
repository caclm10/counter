"use client";

import { useLiveQuery } from "dexie-react-hooks";
import CounterList from "@/components/counter/counter-list";
import { db } from "@/lib/db";

export default function MainCounterList() {
    const items = useLiveQuery(() => db.counters.toArray());

    return <CounterList items={items} />;
}
