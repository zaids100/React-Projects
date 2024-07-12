import React, { useEffect, useState } from 'react';
import Char from './Components/Char';
import Letter from './Components/Letter';

function App() {
  const Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const [selected, setSelected] = useState([]);
  const [hints, setHints] = useState(2);
  const [lifes, setLifes] = useState(2);
  const wordURL = 'https://random-word-api.herokuapp.com/word?length=5';

  // Convert word to array of characters
  const wordToArray = word.split('');

  const isMatch = (char) => {
    let correct = false;
    for (let i = 0; i < wordToArray.length; i++) {
      if (wordToArray[i] === char) {
        setSelected([...selected, wordToArray[i]]);
        correct = true;
        break;
      }
    }

    if (!correct) {
      if (lifes >= 1) {
        setLifes(prev => prev - 1);
      } else {
        alert("Your chances are over : Game Over");
        handleRestart();
      }
    }
  }

  const handleHint = () => {
    if (hints >= 1) {
      setHints(prev => prev - 1);

      let ind = Math.floor(Math.random() * wordToArray.length);

      // Ensure the selected character hasn't been chosen before
      while (selected.includes(wordToArray[ind])) {
        ind = Math.floor(Math.random() * wordToArray.length);
      }

      setSelected([...selected, wordToArray[ind]]);
    }
  }

  const handleRestart = () => {
    setWord('');
    setMeaning('');
    setSelected([]);
    getWord();
    setLifes(2);
    setHints(2);
  };

  useEffect(() => {
    getWord();
  }, [])

  async function getWord() {
    try {
      const response = await fetch(wordURL);
      const data = await response.json();
      setWord(data[0].toUpperCase());
      console.log(data[0]);
      getMeaning(data[0]);
    } catch (err) {
      console.log("Error fetching API:", err);
    }
  }

  async function getMeaning(word) {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
      if (data && data.length > 0 && data[0].meanings.length > 0 && data[0].meanings[0].definitions.length > 0) {
        const mng = data[0].meanings[0].definitions[0].definition;
        setMeaning(mng);
      } else {
        setMeaning("Meaning Not Found");
      }
    } catch (err) {
      setMeaning("Meaning Not Found");
      console.log('Meaning Not Found', err);
    }
  }

  return (
    <div className='main-container'>
     
      <div className='game-div'>
      <h3>Word Guess Game</h3>
        <div className='rand-word'>
          {wordToArray.map((char, index) => (
            <Char key={index} char={char} show={selected.includes(char)} />
          ))}
        </div>
        <div className='hint-restart'>
          <p className='hint'><b>Hint</b>: {meaning}</p>
          <button className='restart' onClick={handleRestart}>Restart</button>
          <button className='restart' onClick={() => setSelected([])}>Remove All</button>
        </div>
        <div className='letters'>
          {Letters.map((char, index) => (
            <Letter key={index} char={char} isMatch={isMatch} />
          ))}
        </div>
        <div className='hint-btn'>
          <span style={{ fontSize: '17px' }}>Hint Remaining: {hints}</span><br />
          <span style={{ fontSize: '17px' }}>Chances Remaining: {lifes}</span><br />
          <button className='get-hint' onClick={handleHint}>Get Hint</button>
        </div>
        {/* <button className='guess' style={{ marginTop: '20px' }}>Guess</button> */}
      </div>
    </div>
  )
}

export default App;
