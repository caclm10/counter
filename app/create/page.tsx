import CreateCounterForm from "@/app/create/form";
import { Card, CardContent } from "@/components/ui/card";
import BackButton from "@/components/back-button";

export default function Create() {
    return (
        <>
            <BackButton />

            <Card>
                <CardContent className="pt-6">
                    <CreateCounterForm />
                </CardContent>
            </Card>
        </>
    );
}
