type Result = {
  name: string;
  url: string;
};

type ListPagination<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

type Pokemon = {
  abilities: {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: { name: string; url: string }[];
  game_indices: {
    game_index: number;
    version: { name: string; url: string };
  }[];

  height: number;
  held_items: {
    item: { name: string; url: string };

    version_details: [
      {
        rarity: number;
        version: {
          name: string;
          url: string;
        };
      },
    ];
  }[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [
    {
      move: { name: string; url: string };
      version_group_details: [
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "red-blue";
            url: "https://pokeapi.co/api/v2/version-group/1/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "yellow";
            url: "https://pokeapi.co/api/v2/version-group/2/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "gold-silver";
            url: "https://pokeapi.co/api/v2/version-group/3/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "crystal";
            url: "https://pokeapi.co/api/v2/version-group/4/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "ruby-sapphire";
            url: "https://pokeapi.co/api/v2/version-group/5/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "emerald";
            url: "https://pokeapi.co/api/v2/version-group/6/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "firered-leafgreen";
            url: "https://pokeapi.co/api/v2/version-group/7/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "diamond-pearl";
            url: "https://pokeapi.co/api/v2/version-group/8/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "platinum";
            url: "https://pokeapi.co/api/v2/version-group/9/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "heartgold-soulsilver";
            url: "https://pokeapi.co/api/v2/version-group/10/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "black-white";
            url: "https://pokeapi.co/api/v2/version-group/11/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "colosseum";
            url: "https://pokeapi.co/api/v2/version-group/12/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "xd";
            url: "https://pokeapi.co/api/v2/version-group/13/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "black-2-white-2";
            url: "https://pokeapi.co/api/v2/version-group/14/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "x-y";
            url: "https://pokeapi.co/api/v2/version-group/15/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "omega-ruby-alpha-sapphire";
            url: "https://pokeapi.co/api/v2/version-group/16/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "sun-moon";
            url: "https://pokeapi.co/api/v2/version-group/17/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "ultra-sun-ultra-moon";
            url: "https://pokeapi.co/api/v2/version-group/18/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee";
            url: "https://pokeapi.co/api/v2/version-group/19/";
          };
        },
        {
          level_learned_at: 1;
          move_learn_method: {
            name: "level-up";
            url: "https://pokeapi.co/api/v2/move-learn-method/1/";
          };
          version_group: {
            name: "sword-shield";
            url: "https://pokeapi.co/api/v2/version-group/20/";
          };
        },
      ];
    },
  ];
  name: string;
  order: number;
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    versions: {
      [key: string]: {
        [key: string]: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/132.png";
          back_gray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/132.png";
          back_transparent: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/132.png";
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/132.png";
          front_gray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/132.png";
          front_transparent: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/132.png";
        };
        yellow: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/132.png";
          back_gray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/132.png";
          back_transparent: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/132.png";
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/132.png";
          front_gray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/132.png";
          front_transparent: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/132.png";
        };
      };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];

  types: [
    {
      slot: number;
      type: { name: string; url: string };
    },
  ];
  weight: number;
};

type GetKey<T> = (pageIndex: number, previousPage: T | null) => string | null;
