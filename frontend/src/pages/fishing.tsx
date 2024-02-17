import { useState, useEffect } from 'react'

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
      {Object.values(player.fishes).map((fish) => (
        <div
          className={
            fish.quantity >= 1
              ? 'flex items-center border rounded-md py-2 px-4 bg-green-500/20 border-green-700'
              : fish.quantity >= 0
                ? 'flex items-center border rounded-md py-2 px-4 bg-orange-500/20 border-orange-800'
                : 'flex items-center border rounded-md py-2 px-4 border-neutral-700'
          }
          key={fish.id}
        >
          <Image
            src={'/assets/items/' + fish.id + '.png'}
            width={40}
            height={40}
            alt={'fish image'}
          />
          <div className="ml-4 min-w-0">
            <p className="truncate">{fish.name}</p>
            <p className="truncate text-neutral-500 text-sm">
              {fish.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
