"use client";

import CounterList from "@/components/counter/counter-list";
import { $counter } from "@/stores/counter-store";
import { useStore } from "@nanostores/react";

export default function MainCounterList() {
    const { items } = useStore($counter);

    return <CounterList items={items} />;
}
