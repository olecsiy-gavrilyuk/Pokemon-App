interface InfoObject {
    name: string;
    url: string;
}

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: InfoObject;
}

interface PokemonType {
  slot: number;
  type: InfoObject;
}

export interface Stats {
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
  name: string;
}