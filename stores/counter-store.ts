import type { Counter } from "@/models/counter";
import { nanoid } from "nanoid";
import { deepMap } from "nanostores";

export const $counter = deepMap({
    items: [] as Counter[]
})

$counter.set({
    items: [
        {
            id: nanoid(),
            title: "Current Conan Chapter",
            count: 13,
            createdAt: "2024-06-22T20:38:52+07:00",
        },
        {
            id: nanoid(),
            title: "Current Mushishi Episode",
            count: 26,
            createdAt: "2024-06-21T20:50:07+07:00",
        },
    ]
})
