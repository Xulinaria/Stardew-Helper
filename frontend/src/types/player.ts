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
}

export type Craft = {
  name: string
  quantity: number
}

export type Fish = {
  id: number
  quantity: number
  maxLength: number
}
