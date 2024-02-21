import { useEffect, useState } from 'react'
import FilterButton from '@/components/FilterButton'

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

  const [filter, setFilter] = useState('all')

  return (
    <div className="">
      <div className="flex gap-2">
        <FilterButton title="Unknown" target="unknown" setFilter={setFilter} />
        <FilterButton title="Known" target="known" setFilter={setFilter} />
        <FilterButton title="Cooked" target="cooked" setFilter={setFilter} />
      </div>

      <div className="mt-4 grid grid-cols-4 gap-4">
        {Object.values(player.cooking)
          .filter((cook) => {
            const quantity = cook.quantity

            if (filter === 'unknown') return quantity === -1
            else if (filter === 'known') return quantity === 0
            else if (filter === 'cooked') return quantity >= 1
            else return true
          })
          .map((cook) => (
            <BooleanCard
              id={cook.id}
              name={cook.name}
              quantity={cook.quantity}
              description={cook.description}
              key={cook.id}
            />
          ))}
      </div>
    </div>
  )
}
