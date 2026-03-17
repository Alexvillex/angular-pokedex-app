import { Component, computed, signal } from '@angular/core';
import { POKEMON_LIST } from './pokemon-list.fake';
import { Pokemon } from './Pokemon.model';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  pokemonList = signal(POKEMON_LIST)
  Size(pokemon: Pokemon){
    if(pokemon.life < 15){
      return 'Petit';
    }else if(pokemon.life < 25){
      return 'Moyen';
    }else{
      return 'Grand';
    }
  };
  incrementlife(pokemon : Pokemon){
    pokemon.life = pokemon.life + 1
  }
  decrementlife(pokemon : Pokemon){
      pokemon.life = pokemon.life - 1
  }
}
