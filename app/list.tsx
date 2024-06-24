"use client";

import CounterList from "@/components/counter/counter-list";
import { $counters } from "@/stores/counter-store";
import { useStore } from "@nanostores/react";

export default function MainCounterList() {
    const items = useStore($counters);

    return <CounterList items={items} />;
}
