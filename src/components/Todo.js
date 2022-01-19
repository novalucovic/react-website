import React from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

import { useState } from "react"; // Med useState registrerar olika tillstånd som vi vill ska ingå.

function Todo(props) {
  //Props = behövs för att kunna acceptera värdena som tillskrivs komponenterna i App.js. Syns inte annars.
  const [modalIsOpen, setModalIsOpen] =
    useState(); /*useState = React hook. Hooks kan enbart direktanropas inom en komponent. 
  Kan ges ett startvärde, exempelvis 'false' om man vill kunna kontrollera att Modal är öppen/stängd. 
  Returnerar ALLTID en array med exakt två element som med fördel lagras i varsin const som här eller genom array destructuring. */

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  function deleteHandler() {
    //Nästlad funktion. Ger ett beteende till Delete-knappen.
    setModalIsOpen(true);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>{" "}
      {/* Måsvingar används för att behandla innehållet som ett uttryck, 
        inte som text eller HTML. Genom att göra så får vi återanvändbara komponenter.*/}
      <div className="actions">
        <span>A span</span>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (<Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />)}
      {/* OM modalIsOpen = true - rendera modal, annars = rendera null. 
      Kan skrivas { modalIsOpen ? <Modal /> : null }. 
      Dynamiskt uttryck, conditional rendering. */}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
