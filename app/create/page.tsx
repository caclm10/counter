import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import CreateCounterForm from "@/app/create/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Create() {
    return (
        <>
            <div className="mb-6">
                <Button variant="ghost" asChild>
                    <Link href="/">
                        <ArrowLeftIcon className="mr-2 size-4" />
                        Back
                    </Link>
                </Button>
            </div>

            <Card>
                <CardContent className="pt-6">
                    <CreateCounterForm />
                </CardContent>
            </Card>
        </>
    );
}
