// useState i useEffect su metode (hooks) potrebne za razvoj 
import React, { useState, useEffect } from "react";

// Importom PokeDetails dohvaćamo komponentu koja se nalazi na navedenom pathu
import PokeDetails from './lib/components/PokeDetails';

// Unutar style.js se nalaze stilizirane komponente koje se ovdje importaju
// Njihove definicije i objašnjenje kako su igrađene možeš vidjeti unutar style.js
import {
  PokedexBackground,
  LeftContainer,
  RightContainer,
} from "./style";

// Za definiranje React komponente kreira se funkcija ili klasa koje nasljeđuje od React.Component
// U novije vrijeme se koriste funkcije za izgradnju React komponente zbog veće preglednost i lakše proširivosti
// U ovom primjeru se koristi arrow funkcija, no jednako bi bilo napisati function App () {
// React komponente moraju započeti velikim slovom da bi ih React mogao prepoznati kao takve, a ne kao html tag
const App = () => {
  // useState nam dozvoljava korištenje state-a unutar react komponente
  // State dozovljava da se vrijednost neke varijable mijenja
  // te ovisno o tim promjenama se novi podatci pokazuju
  // prva varijabla koju useState vraća sadrži vrijednost tog statea
  // druga varijabla je metoda pomoću koje namještamo vrijednost tog state-a
  // argument koji se šalje unutar useState je početna vrijednost tog statea
  const [currentPokemonNumber, setCurrentPokemonNumber] = useState(1);
  const [pokemon, setPokemon] = useState();

  // useEffect metoda dozovljava pozivanje drugih metoda ovisno o promjeni unutar navedenih varijabla
  // U ovom slučaju je navedena varijabla currentPokemonNumber kao zavisna varijabla
  // Stoga se metoda unutar useEffecta poziva svaki put kada se vrijednost currentPokemonNumber promijeni
  useEffect(() => {
    // fecth pokemon je asinkrona metoda koja će dohvatiti podatke s pokeapi-a te ih spremiti u state
    const fetchPokemon = async () => {
      // fetch je javascript metoda za pozivanje određenog api-a
      // U ovom slučaju se poziva pokeapi koji će vratiti objekt s vrijednostima pokemona
      // ovisno o broju traženog pokemona
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemonNumber}/`);
      // nakon što je fetch vratio response, potrebno ga je parsirati iz jsona što radi json()
      const fetchedPokemon = await response.json();
  
    };
    fetchPokemon();
    // Kao drugi argument useEffect metode se navode zavisne varijable za izvršavanje
    // Ukoliko je taj array prazan, useEffect metoda će se izvršiti samo jednom
  }, [currentPokemonNumber]);


  // Unutar return-a funkcije se definira kako će izgledati komponenta koju vraćamo
  // Moguće je vraćati html tagove, ili druge React komponente
  // React komponente se razlikuje od html tagova po velikom početnom slovu
  return (
    // Svaka react komponenta mora imati jedan root element koji vraća,
    // a unutar njega se dalje definiraju dijelovi komponente
    // U ovom primjeru je root element background container koji je velik kao cijeli pokedex
    // te sadrži pozadinsku sliku pokedexa
    <PokedexBackground>
      {/* 
        Kako pokedex ima dvije strane, potrebno je te dvije strane rasporediti unutar dva elementa
        Ovdje je definiran lijevi dio pokedexa
      */}
      <LeftContainer>
        {/* 
          Kao što se html tag-u mogu dodijeliti properties
          Tako i React komponente primaju te propertie, po konvenciji zvane props
          Propsi su React komponenti predani kao prvi argument funkcije
          Za daljnje objašnjenje, pogledaj u PokeDetails.js
        */}
        <PokeDetails
          pokemon={pokemon}
        />
      </LeftContainer>
    </PokedexBackground>
  );
}

// Na kraju file-a definiramo što exportamo, odnosno što će drugi file-ovi importati iz ovog file-a
export default App;
