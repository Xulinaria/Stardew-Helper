import BundleItemCard from '@/components/cards/BundleItemCardf'

import type { RoomBundle } from '@/types/bundle'
import { useState, useEffect } from 'react'

export default function Bundles() {
  const [rooms, setRooms] = useState<RoomBundle[]>([])

  useEffect(() => {
    fetch('https://localhost:7039/room')
      .then((response) => response.json())
      .then((data) => setRooms(data))
  }, [])

  let keyItems = 0

  return (
    <div className="">
      {Object.values(rooms).map((room) => (
        <div className="mb-6" key={room.name}>
          <h2 className="text-xl">{room.name}</h2>

          {room.bundles.map((bundle) => (
            <div className="mb-2" key={bundle.name}>
              <h3>{bundle.name}</h3>

              <div className="flex flex-wrap gap-2">
                {bundle.items.map((item) => (
                  <BundleItemCard
                    id={item.id}
                    quantity={item.quantity}
                    compleat={item.compleat}
                    key={keyItems++}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
