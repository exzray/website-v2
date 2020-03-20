export interface Contact {
  title: string;
  subtitle: string;
  contents: Content[];
}

export interface Content {
  label: string;
  url: string;
  icon: string;
}
