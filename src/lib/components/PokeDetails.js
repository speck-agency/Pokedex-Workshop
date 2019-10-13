import React from "react";

// Ovdje su sve potrebne komponente za ovu komponentu
// Za njihove definicije, pogledaj u style.js
import {
  DetailsContainer,
  Details,
  Pokemon,
  Title,
  PokemonImage,
  Statuses,
  Status,
  TypeContainer,
  TypeImg,
} from "../../style";

// Ovo je objekt koji sadrži sve slike za tipove pokemona
import typeMapper from '../typeMapper';


// Svaka React komponenta kao prvi argument prima propertye definira unutar poziva te komponente
// po konvenciji ih se naziva props
// da bi se dobio pojedini property, jednostavno je potrebno dohvatiti field po tom imenu unutar props
const PokeDetails = props => {
  // U App.js smo Komponenti PokeDetails dali prop pokemon te ga ovdje dohvaćamon
  // const { pokemon } = props; je isto kao i const pokemon = props.pokemon;
  const { pokemon } = props;

  return (
    <DetailsContainer>
      <Details>
        <Pokemon>
          {/*
            Da se prikaže određeni tekst unutar React komponente
            taj tekst se unese unutar tagova kao i u html-u
            Ako je teks unutar neke varijable, tu varijablu je potrebno staviti unutar vitičastih zagrada

            Note, pošto varijablu pokemon dohvaćamo s API-a ona može biti nedefinirana
            Stoga prvo provjeravamo je li ta varijabla definirana, prije nego dohvatimo njegov field name
          */}
          <Title>{pokemon && pokemon.name}</Title>
        </Pokemon>

        <Statuses>
          <Status>No. {pokemon && pokemon.id}</Status>
        </Statuses>
      </Details>
    </DetailsContainer>
  );
};

export default PokeDetails;
