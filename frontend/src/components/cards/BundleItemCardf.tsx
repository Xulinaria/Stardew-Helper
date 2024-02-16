import type { BundleItem } from '@/types/bundle'
import Image from 'next/image'

export default function BundleItemCard({ id, quantity, compleat }: BundleItem) {
  const imageSrc = '/assets/items/' + id + '.png'
  const classStyle = compleat
    ? 'bg-green-500 dark:bg-green-800 relative border border-green-600 rounded-md p-2 mt-1'
    : 'relative border dark:border-neutral-600 rounded-md p-2 mt-1'

  return (
    <div className={classStyle}>
      <Image src={imageSrc} width={40} height={40} alt={'Bundle Image'} />
      {quantity < 100 && quantity > 1 && (
        <span className="absolute flex items-center justify-center -right-1.5 -top-1.5 border rounded-full w-6 h-6 text-sm bg-white dark:bg-neutral-950 dark:border-neutral-700">
          {quantity}
        </span>
      )}
    </div>
  )
}
