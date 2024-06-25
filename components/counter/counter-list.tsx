import type { Counter } from "@/models/counter";
import CounterListItem from "@/components/counter/counter-list-item";

interface Props {
    items?: Counter[];
}

export default function CounterList({ items = [] }: Props) {
    if (items.length === 0) return null;

    return (
        <div className="flex flex-col gap-4">
            {items.map((item) => (
                <CounterListItem key={item.id} {...item} />
            ))}
        </div>
    );
}
