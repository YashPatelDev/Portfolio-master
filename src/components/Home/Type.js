import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Project Manager",
          "Bussiness Devlopment Executive",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        typespeed: 20
      }}
    />
  );
}

export default Type;
