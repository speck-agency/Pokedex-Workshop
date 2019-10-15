import React, { useState } from "react";

import {
  SearchContainer,
  InputContainer,
  ArrowButton,
  NumberInput,
  SearchButton,
} from "../../style";

const PokeSearch = props => {
  const { currentPokemonNumber, setCurrentPokemonNumber } = props;

  return (
    <SearchContainer>
      <InputContainer>
        <ArrowButton
          onClick={() => {
            if (currentPokemonNumber > 1) {
              setCurrentPokemonNumber(parseInt(currentPokemonNumber) - 1);
            }
          }}
        >
          &lt;
        </ArrowButton>
        <NumberInput
          value={currentPokemonNumber}
        />
        <ArrowButton
          onClick={() => {
            if (currentPokemonNumber < 802) {
              setCurrentPokemonNumber(parseInt(currentPokemonNumber) + 1);
            }
          }}
        >
          &gt;
        </ArrowButton>
      </InputContainer>
    </SearchContainer>
  );
};

export default PokeSearch;
