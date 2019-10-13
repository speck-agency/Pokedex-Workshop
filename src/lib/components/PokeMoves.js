import React from "react";
import { MovesContainer, MovesRow, Move } from "../../style";

const PokeMoves = props => {
  const { pokemon } = props;

  return (
    <MovesContainer>
      <MovesRow>
        <Move>
          {pokemon &&
            pokemon.moves[0].move.name}
        </Move>
      </MovesRow>

    </MovesContainer>
  );
};

export default PokeMoves;
