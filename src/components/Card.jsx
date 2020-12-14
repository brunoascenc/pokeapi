import React from "react";
import PokemonData from "./PokemonData";
import "../App.css";

const defaultImg =
  "https://imagensemoldes.com.br/wp-content/uploads/2020/07/Interroga%C3%A7%C3%A3o-com-Fundo-Transparente.png";

const Card = () => {
  const [pokemon, pokemonImg, pokeTypes, handleClick] = PokemonData();

  let bgColor = "";
  switch (pokeTypes) {
    case "grass":
      bgColor = "rgb(57, 185, 53)";
      break;
    case "fire":
      bgColor = "rgb(236, 92, 67)";
      break;
    case "fighting":
      bgColor = "rgb(221, 49, 49)";
      break;
    case "water":
      bgColor = "rgb(108, 178, 236)";
      break;
    case "rock":
      bgColor = "rgb(248, 179, 114)";
      break;
    case "steel":
      bgColor = "rgb(77, 112, 126)";
      break;
    case "psychic":
      bgColor = "rgb(236, 127, 127)";
      break;
    case "poison":
      bgColor = "rgba(163, 65, 209, 0.952)";
      break;
    case "normal":
      bgColor = "rgba(203, 198, 206, 0.877)";
      break;
    case "ice":
      bgColor = "rgb(99, 227, 236)";
      break;
    case "ground":
      bgColor = "rgb(223, 115, 66)";
      break;
    case "ghost":
      bgColor = "rgb(108, 85, 235)";
      break;
    case "flying":
      bgColor = "rgb(103, 130, 221)";
      break;
    case "electric":
      bgColor = "rgb(225, 228, 78)";
      break;
    case "fairy":
      bgColor = "rgb(235, 142, 230)";
      break;
    case "dragon":
      bgColor = "rgb(93, 68, 182)";
      break;
    case "dark":
      bgColor = "rgba(55, 55, 56, 0.979)";
      break;
    case "bug":
      bgColor = "rgba(31, 124, 12, 0.979)";
      break;
    default:
      bgColor = "rgba(203, 198, 206, 0.877)";
      break;
  }

  return (
    <div className="container" style={{ backgroundColor: `${bgColor}` }}>
      <button onClick={handleClick}>Generate random pokémon</button>
      <div className="card">
        <img src={!pokemonImg ? defaultImg : pokemonImg} alt={pokemon.name} />
        <h1>{pokemon.name}</h1>
        <p>{pokeTypes}</p>
      </div>
    </div>
  );
};

export default Card;
