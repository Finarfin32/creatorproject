import React from "react";
import Card from "./RaceCards.js";
import "../App.css";
import { RACE_HUMAN, RACE_ELF, RACE_DWARF, RACE_ORC } from "../const.js";

function RaceCardsState({ setpickedCard, handleSubmit }) {
  const setCardAndButtons = (raceOfCard) => {
    setpickedCard(raceOfCard);
    handleSubmit();
  };
  return (
    <>
      <div className="Human" onClick={() => setCardAndButtons("HUMAN")}>
        <Card name="Human" attributes={RACE_HUMAN} />
      </div>
      <div className="Elf" onClick={() => setCardAndButtons("ELF")}>
        <Card name="Elf" attributes={RACE_ELF} />
      </div>
      <div className="Dwarf" onClick={() => setCardAndButtons("DWARF")}>
        <Card name="Dwarf" attributes={RACE_DWARF} />
      </div>
      <div className="Orc" onClick={() => setCardAndButtons("ORC")}>
        <Card name="Orc" attributes={RACE_ORC} />
      </div>
    </>
  );
}

// function RaceCardsState({ setpickedCard, handleSubmit }) {
//   return (
//     <>
//       <div
//         className="Human"
//         onClick={() => {
//           setpickedCard("HUMAN");
//           handleSubmit();
//         }}
//       >
//         <Card name="Human" attributes={RACE_HUMAN} />
//       </div>
//       <div
//         className="Elf"
//         onClick={() => {
//           setpickedCard("ELF");
//           handleSubmit();
//         }}
//       >
//         <Card name="Elf" attributes={RACE_ELF} />
//       </div>
//       <div
//         className="Dwarf"
//         onClick={() => {
//           setpickedCard("DWARF");
//           handleSubmit();
//         }}
//       >
//         <Card name="Dwarf" attributes={RACE_DWARF} />
//       </div>
//       <div
//         className="Orc"
//         onClick={() => {
//           setpickedCard("ORC");
//           handleSubmit();
//         }}
//       >
//         <Card name="Orc" attributes={RACE_ORC} />
//       </div>
//     </>
//   );
// }

export default RaceCardsState;
