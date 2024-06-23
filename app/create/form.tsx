"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    title: z.string().min(1, {
        message: "The title field is required.",
    }),
});

export default function CreateCounterForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        },
    });

    function onSubmit({ title }: z.infer<typeof formSchema>) {
        alert(title);
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
                        <Button type="submit">Create</Button>
                    </div>
                </div>
            </form>
        </Form>
    );
}
