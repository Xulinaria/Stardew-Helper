import { useEffect, useState } from 'react'

import Image from 'next/image'
import { Player } from '@/types/player'

export default function Cooking() {
  const [player, setPlayer] = useState<Player>({
    name: 'test',
    experience: [],
    cooking: [],
    crafting: [],
    fishes: [],
  })

  useEffect(() => {
    fetch('https://localhost:7039/player')
      .then((response) => response.json())
      .then((data) => setPlayer(data))
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4">
      {Object.values(player.cooking).map((cook) => (
        <div
          className={
            cook.quantity >= 0
              ? 'flex items-center border rounded-md py-2 px-4 bg-orange-500 dark:bg-orange-950 border-orange-800'
              : cook.quantity >= 1
                ? 'flex items-center border rounded-md py-2 px-4 bg-green-500 dark:bg-green-800 border-green-600'
                : 'flex items-center border rounded-md py-2 px-4 border-neutral-700'
          }
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
