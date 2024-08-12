export interface PokemonDetails {
  name: string;
  url?: string;
  description: string;
  details?: string;
  imageUrl: string;
}

export interface PokemonSpeciesResponse {
  flavor_text_entries: {
    flavor_text: string;
    language: { name: string };
  }[];
  id: number;
  name: string;
}