import { nanoid } from "nanoid";
import CounterList from "@/components/counter/counter-list";

export default function Home() {
    return (
        <>
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
