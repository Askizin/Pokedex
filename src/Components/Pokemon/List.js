import { Component } from "react";
import PokemonCard from "./Card";
import axios from 'axios';

export default class PokemonList extends Component{

    state = {
        url : 'https://pokeapi.co/api/v2/pokemon/?limit=350&offset=00',
        pokemon: null
    }

    async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results'] })

    }

    render(){
        return (
            <>
              {
                this.state.pokemon ? (
                  <div className="row">
                    {this.state.pokemon.map(pokemon => (
                      <PokemonCard
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                      />
                    ))}
                  </div>
                ) : (<h1> Loading Pokemóns </h1>)
              }
            </>
          )
    }
}
