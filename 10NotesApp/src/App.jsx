import React, { useState } from 'react';
import NotesList from './Components/NotesList';
import { nanoid } from 'nanoid';
import SearchBar from './Components/SearchBar';
import Header from './Components/Header';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "15/04/2021"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "16/04/2021"
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "17/04/2021"
    }
  ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const note = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString()
    };
    const newNotes = [...notes, note];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const updateNote = (id, updatedText) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text: updatedText } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div className={`main-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className='container'>
        <Header handleDarkMode={setDarkMode} />
        <SearchBar handleSearchText={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      </div>
    </div>
  );
}

export default App;
