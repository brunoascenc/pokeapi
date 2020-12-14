import { useState, useEffect } from "react";
import axios from "axios";

const PokemonData = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokeTypes, setPokeTypes] = useState("");
  const [totalPokemons, setTotalPokemons] = useState();
  const [pokemonImg, setPokemonImg] = useState("");
  const [pokeId, setPokeId] = useState(1);

  const handleClick = () => {
    setPokeId(Math.floor(Math.random() * totalPokemons + 1));
  };

  useEffect(() => {
    axios
      .all([
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`), //Pokemons
        axios.get("https://pokeapi.co/api/v2/pokemon-species/?limit=0"), //Qtd de species pokemongo
      ])
      .then((res) => {
        const pokemons = res[0].data;
        const totalPokemons = res[1].data;
        const pokeImg = pokemons.sprites.other.dream_world.front_default;

        setPokeTypes(pokemons.types[0].type.name);

        setPokemonImg(pokeImg);

        setPokemon(pokemons);

        setTotalPokemons(totalPokemons.count);
      })
      .catch((err) => console.log(err));
  }, [pokeId]);

  return [pokemon, pokemonImg, pokeTypes, handleClick];
};

export default PokemonData;
