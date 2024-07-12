import { useState } from "react"

function AddNote({ handleAddNote }) {
    const [noteText, setNoteText] = useState('');

    const handleText = (e) => {
        if (200 - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return (
        <div className="note new">
            <textarea rows='8'
                cols='10'
                placeholder="Type to add note"
                value={noteText}
                onChange={handleText}
            ></textarea>

            <div className="note-footer">
                <small>{200 - noteText.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>

        </div>
    )
}

export default AddNote