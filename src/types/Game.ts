export interface Game {
  id: string,
  keyImages: keyImages[],
  [key: string]: any;
}

interface keyImages {
  type: string,
  url: string
}