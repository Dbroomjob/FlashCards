import React from "react";
import StudyTrue from "./StudyTrue.js";
import StudyNull from "./StudyNull.js";

function Study({ currentDeck }) {
  const { cards } = currentDeck;
  return Object.keys(currentDeck).length > 0 && cards.length >= 3 ? (
    <StudyTrue currentDeck={currentDeck} />
  ) : (
    <StudyNull currentDeck={currentDeck} />
  );
}

export default Study;
