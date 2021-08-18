import React from 'react';
import { useEffect, useState } from "react";

const RandomNumber = () => {
  return Math.round(Math.random() * 100);
}

function RandomNumberAtATime() {

  const [randomNumber, setRandomNumber] = useState(RandomNumber());

  useEffect(() => {
    randomTimer();
  },[randomNumber]);

  const randomTimer = () => {
    return setInterval(() => {
      setRandomNumber(RandomNumber());
    }, 10000)
  }

  return(
    <h1>{ randomNumber }</h1>
  );
}

export default RandomNumberAtATime;
