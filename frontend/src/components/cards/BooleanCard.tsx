import Image from 'next/image'

export type Props = {
  id: number
  name: string
  quantity: number
  description: string
}

export default function BooleanCard({
  id,
  name,
  quantity,
  description,
}: Props) {
  const imageSrc = '/assets/items/' + id + '.png'
  const classStyle =
    quantity >= 1
      ? 'flex items-center border rounded-md py-2 px-4 bg-green-500/20 border-green-700'
      : quantity >= 0
        ? 'flex items-center border rounded-md py-2 px-4 bg-orange-500/20 border-orange-800'
        : 'flex items-center border rounded-md py-2 px-4 border-neutral-700'

  return (
    <div className={classStyle}>
      <Image src={imageSrc} width={40} height={40} alt={name} />
      <div className="ml-4 min-w-0">
        <p className="truncate">{name}</p>
        <p className="truncate text-neutral-500 text-sm">{description}</p>
      </div>
    </div>
  )
}
