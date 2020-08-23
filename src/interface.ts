export interface Icategory {
  name: string;
  id: number;
  isActive: boolean;
}

export interface Ibird {
  id: number;
  name: string;
  species?: string;
  description?: string;
  image?: string;
  audio?: string;
}
