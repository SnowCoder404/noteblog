function getNoteTemplate(index) {
    return `<div id='hDiv' class='d_flex_a_c'>            
                <h2 class='bk_o d_flex_c_c'>
                    ${title[index]}<br>
                </h2>
                <h2 class='bk_o d_flex_c_c'>    
                    ${notes[index]}
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
                    ${title[index]}<br>
                </h2>
                <h2 class='bk_o d_flex_c_c'>    
                    ${trashNotes[index]}
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
        ${title[index]}<br>
    </h2>
    <h2 class='bk_o d_flex_c_c'>    
        ${archivNotes[index]}
    </h2>
    <div style='width: 100%; background-color: orange; display: flex; justify-content: space-between;'>
        <button onclick="backToNotes(${index})" class='bk_o br_24 h_55px'>R</button>
        <button onclick="archivToTrash(${index})" class='bk_o br_24 h_55px'>X</button>
    </div>
</div>`;
}