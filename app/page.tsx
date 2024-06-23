import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainCounterList from "@/app/list";

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

            <MainCounterList />
        </>
    );
}
