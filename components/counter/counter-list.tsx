import type { Counter } from "@/models/counter";
import CounterListItem from "@/components/counter/counter-list-item";

interface Props {
    items?: Counter[];
}

export default function CounterList({ items = [] }: Props) {
    if (items.length === 0) {
        return (
            <div className="flex items-center justify-center text-center py-8">
                <p className="text-sm italic text-muted-foreground">
                    No counter found. Create a new one to start counting.
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {items.map((item) => (
                <CounterListItem key={item.id} {...item} />
            ))}
        </div>
    );
}
