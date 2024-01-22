import craftingData from "@/data/crafting.json";
import Image from "next/image";

export default function Crafting() {
    return (

        <div className="grid grid-cols-4 gap-4">
            {
                craftingData.map(craft =>
                    <div className="flex items-center border rounded-md py-2 px-4" key={craft.id}>
                        <Image
                            src={"/assets/items/" + craft.id + ".png"}
                            width={40}
                            height={40}
                            alt={"craft recept"}
                        />
                        <div className="ml-4 min-w-0">
                            <p className="truncate">{craft.name}</p>
                            <p className="truncate text-neutral-500 text-sm">{craft.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}