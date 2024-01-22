import fishingData from "@/data/fishing.json";
import Image from "next/image";

export default function Fishing() {
    return (
        <div className="grid grid-cols-4 gap-4">
            {
                fishingData.map(fish =>
                    <div className="flex items-center border rounded-md py-2 px-4" key={fish.id}>
                        <Image
                            src={"/assets/items/" + fish.id + ".png"}
                            width={40}
                            height={40}
                            alt={"fish image"}
                        />
                        <div className="ml-4 min-w-0">
                            <p className="truncate">{fish.name}</p>
                            <p className="truncate text-neutral-500 text-sm">{fish.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}