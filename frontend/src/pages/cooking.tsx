import { useEffect, useState } from 'react'

import { Player } from '@/types/player'
import BooleanCard from '@/components/cards/BooleanCard'

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
        <BooleanCard
          id={cook.id}
          name={cook.name}
          quantity={cook.quantity}
          description={cook.description}
          key={cook.id}
        />
      ))}
    </div>
  )
}
