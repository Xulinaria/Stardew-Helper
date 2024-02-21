import { useState, useEffect } from 'react'
import FilterButton from '@/components/FilterButton'

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

  const [filter, setFilter] = useState('all')

  return (
    <div className="">
      <div className="flex gap-2">
        <FilterButton
          title="Incomplete"
          target="incomplete"
          setFilter={setFilter}
        />
        <FilterButton
          title="Complete"
          target="complete"
          setFilter={setFilter}
        />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {Object.values(player.fishes)
          .filter((fish) => {
            const quantity = fish.quantity

            if (filter === 'incomplete') return quantity === -1
            else if (filter === 'complete') return quantity >= 1
            else return true
          })
          .map((fish) => (
            <BooleanCard
              id={fish.id}
              name={fish.name}
              quantity={fish.quantity}
              description={fish.description}
              key={fish.id}
            />
          ))}
      </div>
    </div>
  )
}
