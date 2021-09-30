import React from 'react';
import { useEffect, useState } from "react";

const RandomNumber = () => {
  return Math.round(Math.random() * 100);
}

function RandomNumberAtATime() {

  const [randomNumber, setRandomNumber] = useState(RandomNumber());
  const [hit, setHit] = useState(false);

  useEffect(() => {
    randomTimer();
    fizzBuzz(randomNumber);
  },[randomNumber]);

  const randomTimer = () => {
    return setInterval(() => {
      setRandomNumber(RandomNumber());
    }, 10000)
  }

  const fizzBuzz = (number) => {
    if(number % 3 === 0 || number % 5 === 0) {
      setHit(true);
      setTimeout(() => {
        setHit(false);
      }, 4000);
    }
  }

  return(
    <>
      <h1>{ randomNumber }</h1>
      {
        hit && <h1>Acerto</h1>
      }
    </>
  );
}

export default RandomNumberAtATime;
