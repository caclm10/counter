"use client";

import { Loader2Icon, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { db } from "@/lib/db";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
    id: string;
}

export default function DeleteCounterConfirmation({ id }: Props) {
    const [processing, setProcessing] = useState(false);

    const router = useRouter();

    async function handleClickDelete() {
        setProcessing(true);
        try {
            await db.counters.delete(id);

            toast("Success.", {
                description: "A counter deleted successfully",
            });

            router.push("/");
        } catch (error) {
            console.log(error);

            setProcessing(false);
        }
    }

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button type="button" size="icon" variant="ghost">
                    <TrashIcon className="size-4" />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>
                        Are you sure to delete this counter?
                    </DrawerTitle>
                    <DrawerDescription>
                        This action cannot be undone.
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button
                        type="button"
                        variant="destructive"
                        onClick={handleClickDelete}
                        disabled={processing}
                    >
                        {processing && (
                            <Loader2Icon className="mr-2 size-4 animate-spin" />
                        )}
                        Delete
                    </Button>
                    <DrawerClose asChild>
                        <Button type="button" variant="outline">
                            Cancel
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
