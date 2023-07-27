export interface InterfaceAvatar {
  src: string;
  alt: string;
  name: string;
  description: string;
}

export interface InterfaceButton {
  title: string;
  children: React.ReactNode;
}

export interface InterfaceIcons {
  children: React.ReactNode;
  title: string;
  link: string;
}
