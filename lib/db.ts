import type { Counter } from "@/models/counter"
import Dexie, { type EntityTable } from "dexie"

export const db = new Dexie("counter") as Dexie & {
    counters: EntityTable<
        Counter,
        "id"
    >
}

db.version(1).stores({
    counters: "id, title, count, createdAt"
})