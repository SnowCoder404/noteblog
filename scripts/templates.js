function getNoteTemplate(index) {
    return `<div id='hDiv' class='d_flex_a_c'>            
                <h2 class='bk_o d_flex_c_c'>
                    ${allNotes.title[index]}<br>
                </h2>
                <h2 class='bk_o d_flex_c_c'>    
                    ${allNotes.notes[index]}
                </h2>
                <div style='width: 100%; background-color: orange; display: flex; justify-content: space-between;'>
                    <button onclick="pushToArchiv(${index})" class='bk_o br_24 h_55px'>A</button>
                    <button onclick="moveToTrash(${index})" class='bk_o br_24 h_55px'>X</button>
                </div>
            </div>`;
}

function getTrashTemplate(index) {
    return `<div id='hDiv' class='d_flex_a_c'>            
                <h2 class='bk_o d_flex_c_c'>
                    ${allNotes.title[index]}<br>
                </h2>
                <h2 class='bk_o d_flex_c_c'>    
                    ${allNotes.trashNotes[index]}
                </h2>
                <div style='width: 100%; background-color: orange; display: flex; justify-content: space-between;'>
                    <button onclick="trashToArchiv(${index})" class='bk_o br_24 h_55px'>A</button>
                    <button onclick="deleteNote(${index})" class='bk_o br_24 h_55px'>X</button>
                </div>
            </div>`;
}

function getArchivTemplate(index) {
    return `<div id='hDiv' class='d_flex_a_c'>            
    <h2 class='bk_o d_flex_c_c'>
        ${allNotes.title[index]}<br>
    </h2>
    <h2 class='bk_o d_flex_c_c'>    
        ${allNotes.archivNotes[index]}
    </h2>
    <div style='width: 100%; background-color: orange; display: flex; justify-content: space-between;'>
        <button onclick="backToNotes(${index})" class='bk_o br_24 h_55px'>R</button>
        <button onclick="archivToTrash(${index})" class='bk_o br_24 h_55px'>X</button>
    </div>
</div>`;
}