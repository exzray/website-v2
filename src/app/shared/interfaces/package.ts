export interface Package {
  title: string;
  button_text: string;
  contents: Content[];
}

export interface Content {
  name: string;
  image: string;
  kps: number;
}
