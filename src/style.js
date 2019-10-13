// Styled coponents je library koji omogućava definiranja komponenti s određenim css stilom
// Za jednostavnost radionice, speck je pripremio sve stilske komponente potrebne za igradnju pokedexa
// Kasnije slobodno uredi pokedex po svojoj želji
import styled from "styled-components";
import border from "./lib/images/borderTransparent.png";
import pokedexPic from "./lib/images/pokedex.png";


// App.js komponente
const PokedexBackground = styled.div`
  width: 1200px;
  height: 840px;
  margin: 0 auto;
  background-image: url(${pokedexPic});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  display: flex;
  padding: 216px 0 0 100px;
  box-sizing: border-box;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 124px;
  width: 440px;
`;

const RightContainer = styled.div`
  display: flex;
  width: 434px;
`;


// PokeDetails komponente

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  border: solid 3px #000;
`;

const Details = styled.div`
  display: flex;
`;


const Pokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PokemonImage = styled.img`
  width: 152px;
`;

const Statuses = styled.div`
  width: 267px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
`;

const Status = styled.div`
  font-family: Rubik;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  color: #333333;
  padding: 12px 0px;
  border-bottom: ${props =>
    props.borderBottomDisabled ? "unset" : "solid 1px #eeeeee"};
`;

const TypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TypeImg = styled.img`
  object-fit: contain;
  padding-right: 24px;
`;

// Tipografija
const Title = styled.div`
  font-family: "Rubik", sans-serif;
  color: #333333;
  text-transform: uppercase;
  padding: 16px 24px;
  font-size: 18px;
  font-weight: bold;
`;

// Descriptions components
const DescriptionContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 10px;
  border: solid 3px #000000;
`;

const PokemonDescription = styled.div`
  width: 100%;
  font-family: "Rubik", sans-serif;
  color: #333333;
  width: 100%;
  padding: 16px 24px;
  line-height: 1.5;
  box-sizing: border-box;
`;

// Search komponente
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;


const InputContainer = styled.div`
  width: 435px;
  border: 3px black solid;
  background-color: white;
  border-radius: 10px;
  display: flex;
  padding: 8px 0;
  justify-content: space-around;
  align-items: center;
`;

const ArrowButton = styled.div`
  border-radius: 32px;
  background-color: #eeeeee;
  width: 44px;
  text-align: center;
  vertical-align: middle;
  line-height: 42px;
  font-weight: 900;
  cursor: pointer;
`;

const NumberInput = styled.input`
  background-color: #eeeeee;
  border: 3px black solid;
  padding: 8px 64px;
  border-radius: 8px;
  width: 72px;
  text-align: center;
  font-family: Rubik;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  color: #3a3a3a;
`;

const SearchButton = styled.div`
  text-align: center;
  font-family: "Rubik", sans-serif;
  color: #333333;
  cursor: pointer;
  width: 435px;
  margin-top: 16px;
  text-align: center;
  border: 3px black solid;
  background-color: #40bc14;
  border-radius: 10px;
  padding: 16px 0;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  transition: 0.2s all;

  :hover {
    background-color: #399e14;
  }
`;

// Moves komponente
const MovesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  padding-top: 8px;
`;

const MovesRow = styled.div`
  min-height: 27px;
  width: 435px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 8px;
`;

const Move = styled.div`
  text-align: center;
  font-family: "Rubik", sans-serif;
  color: #333333;
  min-height: 21px;
  background-image: url(${border});
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  padding: 18px 8px;
  width: 40%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export {
  PokedexBackground,
  LeftContainer,
  RightContainer,
  DetailsContainer,
  Details,
  Pokemon,
  PokemonImage,
  Statuses,
  Status,
  TypeContainer,
  TypeImg,
  Title,
  DescriptionContainer,
  PokemonDescription,
  SearchContainer,
  InputContainer,
  ArrowButton,
  NumberInput,
  SearchButton,
  MovesContainer,
  MovesRow,
  Move
};
