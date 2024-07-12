import React, { useState } from 'react';

function Note({ id, text, date, deleteNote, updateNote }) {
  const [editText, setEditText] = useState(text);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    deleteNote(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(text);
  };

  const handleSave = () => {
    updateNote(id, editText);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div className="note">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={handleChange}
          autoFocus
          onBlur={handleSave}
        />
      ) : (
        <span>{text}</span>
      )}
      <div className="note-footer">
        <small>{date}</small>
        {isEditing ? (
          <button className="save" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="edit" onClick={handleEdit}>
            Edit
          </button>
        )}
        <img
          src="/public/bin.png"
          alt="Delete"
          style={{ width: '20px', cursor: 'pointer' }}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}

export default Note;
