"use client";

import dayjs from "dayjs";
import { nanoid } from "nanoid";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStore } from "@nanostores/react";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { db } from "@/lib/db";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

const formSchema = z.object({
    title: z.string().min(1, {
        message: "The title field is required.",
    }),
});

export default function CreateCounterForm() {
    const [processing, setProcessing] = useState(false);

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        },
    });

    async function onSubmit({ title }: z.infer<typeof formSchema>) {
        setProcessing(true);
        try {
            const id = nanoid();
            await db.counters.add({
                id,
                title,
                count: 0,
                createdAt: dayjs().format(),
            });

            router.push(`/${id}`);
        } catch (error) {
            setProcessing(false);

            console.log(error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-6">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Counter's title"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end">
                        <Button type="submit" disabled={processing}>
                            {processing && (
                                <Loader2Icon className="mr-2 size-4 animate-spin" />
                            )}
                            Create
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
}
