import { useRef, useState } from 'react';
import Ball from './Components/Ball';

function App() {
  const [time, setTime] = useState(0);
  const [rolls, setRolls] = useState(0);
  const [balls, setBalls] = useState([]);
  const [parentBall, setParentBall] = useState(null);
  const [selectedBallCount, setBallCount] = useState(0);
  const intervalRef = useRef(null);

  const getRandoms = () => {
    let randoms = [];
    for (let i = 0; i < 10; i++) {
      let num = Math.floor(Math.random() * 10) + 1;
      randoms.push(num);
    }
    return randoms;
  };

  const handleTimeAndGame = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setTime(0); // Reset time to 0 on each start
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    // Initialize the game with random numbers
    const randoms = getRandoms();
    const newBalls = randoms.map((num) => ({
      randomNumber: num,
      selected: false,
    }));
    setBalls(newBalls);
    setRolls(0);
    setParentBall(null);
  };

  const handleBallClick = (index) => {
    setBalls((prevBalls) => {
      const newBalls = prevBalls.map((ball, i) => {
        if (i === index && (parentBall === null || ball.randomNumber === parentBall)) {
          if (parentBall === null) {
            setParentBall(ball.randomNumber);
          }

          return { ...ball, selected: !ball.selected };
        }
        return ball;
      });

      let cnt = 0;
      for (let obj of newBalls) {
        if (obj.selected == true) cnt++;
      }

      if (cnt == 10) {
        clearInterval(intervalRef.current);
        alert(`Game Over! Time: ${time} seconds, Rolls: ${rolls}`);      }

        return newBalls

    });
  };

  const rollDice = () => {
    setBalls((prevBalls) => {
      return prevBalls.map((ball) => {
        if (!ball.selected) {
          let num = Math.floor(Math.random() * 10) + 1;
          return { ...ball, randomNumber: num };
        }
        return ball;
      });
    });
    setRolls((prevRolls) => prevRolls + 1);
  };

  return (
    <>
      <div className='container'>
        <div className="main-container">
          <div className="header">
            <h3 className='header'>Tenzies Game</h3>
          </div>
          <div className="balls-container">
            {balls.map((obj, ind) => (
              <Ball
                key={ind}
                num={obj.randomNumber}
                isSelected={obj.selected}
                handleClick={() => handleBallClick(ind)}
              />
            ))}
          </div>
          <button className='roll-dice' onClick={rollDice}>Roll Dice</button>
          <span className='rolls'>Rolls: {rolls}</span>
          <span className='time'>Time elapsed: {time} seconds</span>
          <button className='start' onClick={handleTimeAndGame}>Start</button>
        </div>
      </div>
    </>
  );
}

export default App;
