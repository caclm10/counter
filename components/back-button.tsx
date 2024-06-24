import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function BackButton() {
    return (
        <div className="mb-6">
            <Button variant="ghost" asChild>
                <Link href="/">
                    <ArrowLeftIcon className="mr-2 size-4" />
                    Back
                </Link>
            </Button>
        </div>
    );
}
