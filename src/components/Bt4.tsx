import React, { useState, useMemo } from 'react';

export default function Bt4() {

  const [randomNumber, setRandomNumber] = useState(Math.random());
  const generateRandomNumber = useMemo(() => {
    return Math.random();
  }, [randomNumber]);
   const handleGenerate = () => {
    setRandomNumber(generateRandomNumber);
  };

  return (
    <div>
        Bài tập 4
      <h2>Số ngẫu nhiên: {randomNumber}</h2>
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
}
