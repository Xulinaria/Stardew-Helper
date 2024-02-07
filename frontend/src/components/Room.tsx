import type { RoomBundle } from '@/types/bundle'
import RoomItem from './ui/RoomItem'

let keyItems = 0
export const Room = ({ name, bundles }: RoomBundle) => (
  <div className="mb-6">
    <h2 className="text-xl">{name}</h2>
    {bundles.map((bundle) => (
      <div className="mb-2 ml-3" key={bundle.name}>
        <h3>{bundle.name}</h3>
        <div className="flex flex-wrap gap-2">
          {bundle.items.map((item) => (
            <RoomItem
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
)
