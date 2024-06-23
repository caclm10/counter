import { nanoid } from "nanoid";
import { PlusIcon } from "lucide-react";
import CounterList from "@/components/counter/counter-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="mb-6 flex items-center justify-end">
                <Button asChild>
                    <Link href="/create">
                        <PlusIcon className="mr-2 size-4" /> New Counter
                    </Link>
                </Button>
            </div>

            <CounterList
                items={[
                    {
                        id: nanoid(),
                        title: "Current Conan Chapter",
                        count: 13,
                    },
                    {
                        id: nanoid(),
                        title: "Current Mushishi Episode",
                        count: 26,
                    },
                ]}
            />
        </>
    );
}
