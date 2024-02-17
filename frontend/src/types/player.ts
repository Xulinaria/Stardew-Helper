export type Player = {
  name: string
  experience: number[]
  cooking: Cook[]
  crafting: Craft[]
  fishes: Fish[]
}

export type Cook = {
  id: number
  name: string
  quantity: number
  description: string
}

export type Craft = {
  name: string
  quantity: number
}

export type Fish = {
  id: number
  name: string
  quantity: number
  maxLength: number
  description: string
}
