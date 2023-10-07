export interface InterfaceAvatar {
  src: string;
  alt: string;
  name: string;
  description: string;
}

export interface InterfaceButton {
  title: string;
  children: Node;
  onClick?: () => void;
  theme?: string;
}

export interface InterfaceIcons {
  children: Node;
  title: string;
  link?: string;
}

export interface InterfaceButtonAbility {
  children: Node;
  text: string;
  image: string;
}