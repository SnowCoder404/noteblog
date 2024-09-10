function getNoteTemplate(index) {
    return `<div id='hDiv' class='d_flex_a_c'>            
                <h2 class='bk_o d_flex_c_c'>
                    ${allNotes.notesTitles[index]}<br>
                </h2>
                <h2 class='bk_o d_flex_c_c'>    
                    ${allNotes.notes[index]}
                </h2>
                <div style='width: 100%; background-color: orange; display: flex; justify-content: space-between;'>
                    <button onclick="moveNotes(allNotes.notes, ${index}, allNotes.archivNotes, allNotes.notesTitle, allNotes.archivNotesTitles)" class='bk_o br_24 h_55px'>A</button>
                    <button onclick="moveNotes(allNotes.notes, ${index}, allNotes.trashNotes, allNotes.notesTitle, allNotes.trashNotesTitles)" class='bk_o br_24 h_55px'>X</button>
                </div>
            </div>`;
}

function getTrashTemplate(index) {
    return `<div id='hDiv' class='d_flex_a_c'>            
                <h2 class='bk_o d_flex_c_c'>
                    ${allNotes.notesTitles[index]}<br>
                </h2>
                <h2 class='bk_o d_flex_c_c'>    
                    ${allNotes.trashNotes[index]}
                </h2>
                <div style='width: 100%; background-color: orange; display: flex; justify-content: space-between;'>
                    <button onclick="moveNotes(allNotes.trashNotes, ${index}, allNotes.archivNotes, allNotes.trashNotesTitle, allNotes.archivNotesTitles)" class='bk_o br_24 h_55px'>A</button>
                    <button onclick="deleteNote(${index})" class='bk_o br_24 h_55px'>X</button>
                </div>
            </div>`;
}

function getArchivTemplate(index) {
    return `<div id='hDiv' class='d_flex_a_c'>            
    <h2 class='bk_o d_flex_c_c'>
        ${allNotes.notesTitles[index]}<br>
    </h2>
    <h2 class='bk_o d_flex_c_c'>    
        ${allNotes.archivNotes[index]}
    </h2>
    <div style='width: 100%; background-color: orange; display: flex; justify-content: space-between;'>
        <button onclick="moveNotes(allNotes.archivNotes, ${index}, allNotes.notes, allNotes.archivNotesTitles, allNotes.notesTitle)" class='bk_o br_24 h_55px'>R</button>
        <button onclick="moveNotes(allNotes.archivNotes, ${index}, allNotes.trashNotes, allNotes.archivNotesTitles, allNotes.notesTitle)" class='bk_o br_24 h_55px'>X</button>
    </div>
</div>`;
}