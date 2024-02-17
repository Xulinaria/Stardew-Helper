import { useState, useEffect } from 'react'

import { Player } from '@/types/player'
import BooleanCard from '@/components/cards/BooleanCard'

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
        <BooleanCard
          id={fish.id}
          name={fish.name}
          quantity={fish.quantity}
          description={fish.description}
          key={fish.id}
        />
      ))}
    </div>
  )
}
