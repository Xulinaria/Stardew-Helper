import cookingData from '@/data/cooking.json'
import Image from 'next/image'

export default function Cooking() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {cookingData.map((cook) => (
        <div
          className="flex items-center border rounded-md py-2 px-4"
          key={cook.id}
        >
          <Image
            src={'/assets/items/' + cook.id + '.png'}
            width={40}
            height={40}
            alt={'cook recept'}
          />
          <div className="ml-4 min-w-0">
            <p className="truncate">{cook.name}</p>
            <p className="truncate text-neutral-500 text-sm">Description</p>
          </div>
        </div>
      ))}
    </div>
  )
}
