import Image from "next/image"
import { RoomBundle } from "@/types/bundle";
import { GetStaticProps } from "next";

export const getStaticProps = (async () => {
    const response = await fetch('https://localhost:7039/room');
    const data = await response.json();
    return {
        props: { data }
    }
}) satisfies GetStaticProps<{
    data: RoomBundle
}>


export default function Bundles() {
    return (
        <div className="">
            <Image
                src={"/assets/images/1.png"}
                width={48}
                height={48}
                alt="mem"

            />
        </div>
    )
}