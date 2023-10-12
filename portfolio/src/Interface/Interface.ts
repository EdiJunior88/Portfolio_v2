export interface InterfaceAvatar {
  src: string
  alt: string
  name: string
  description: string
}

export interface InterfaceButton {
  title: string
  onClick?: () => void
  theme?: string
}

export interface InterfaceIcons {
  title: string
  link?: string
}

export interface InterfaceButtonAbility {
  text: string
  image: string
}