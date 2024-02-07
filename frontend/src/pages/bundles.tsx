import type { RoomBundle } from '@/types/bundle'
import { useState, useEffect } from 'react'

import { Room } from '@/components/Room'

export default function Bundles() {
  const [rooms, setRooms] = useState<RoomBundle[]>([])

  useEffect(() => {
    fetch('https://localhost:7039/room')
      .then((response) => response.json())
      .then((data) => setRooms(data))
  }, [])

  return (
    <div className="">
      {rooms.map((room) => (
        <Room name={room.name} bundles={room.bundles} key={room.name} />
      ))}
    </div>
  )
}
