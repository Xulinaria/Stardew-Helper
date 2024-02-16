import { useState, useEffect } from 'react'

import fishingData from '@/data/fishing.json'
import Image from 'next/image'
import { Player } from '@/types/player'

export default function Fishing() {
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
      {Object.values(fishingData)

        .map((fishData) => (
          <div
            className={
              player.fishes.find((fish) => fish.id === fishData.id)
                ? 'flex items-center border rounded-md py-2 px-4 bg-green-500 dark:bg-green-800 border-green-600'
                : 'flex items-center border rounded-md py-2 px-4 border-neutral-700'
            }
            key={fishData.id}
          >
            <Image
              src={'/assets/items/' + fishData.id + '.png'}
              width={40}
              height={40}
              alt={'fish image'}
            />
            <div className="ml-4 min-w-0">
              <p className="truncate">{fishData.name}</p>
              <p className="truncate text-neutral-500 text-sm">
                {fishData.description}
              </p>
            </div>
          </div>
        ))}
    </div>
  )
}
