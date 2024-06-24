import Counter from "@/app/[id]/counter";
import BackButton from "@/components/back-button";

interface PageProps {
    params: {
        id: string;
    };
}

export default function CounterPage({ params }: PageProps) {
    return (
        <>
            <BackButton />

            <Counter id={params.id} />
        </>
    );
}
