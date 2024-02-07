export type RoomBundle = {
  name: string
  bundles: Bundle[]
}

export type Bundle = {
  name: string
  items: BundleItem[]
}

export type BundleItem = {
  id: number
  quantity: number
  compleat: boolean
}

export const APP_VERSION = 'v1.0.0'
