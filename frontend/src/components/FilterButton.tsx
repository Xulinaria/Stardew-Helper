import { Dispatch, SetStateAction } from 'react'

export type Props = {
  title: string
  target: string
  setFilter: Dispatch<SetStateAction<string>>
}

export default function FilterButton({ title, target, setFilter }: Props) {
  const clickFlipper = () => {
    setFilter((prev) => {
      if (prev === target) return 'all'
      return target
    })
  }

  return (
    <button
      className="py-1 px-3 border border-neutral-700 rounded-md"
      onClick={clickFlipper}
    >
      {title}
    </button>
  )
}
