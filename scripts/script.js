let allNotes = {
    'notes': ['Rasen mähen', 'Essen machen'],
    'notesTitles': ['Task', 'Task'],
    'archivNotes': [],
    'archivNotesTitles': [],
    'trashNotes': [],
    'trashNotesTitles': [], 
}

function toggleTrashNote() {
    if (!allNotes['trashNotes'].length < 1) {
        document.getElementById('trashDiv').classList.toggle('d_none');
    }else {
        document.getElementById('trash').classList.add('d_none');
    }
}

function toggleArchivNote() {
    if (!allNotes['archivNotes'].length < 1) {
        document.getElementById('archivDiv').classList.toggle('d_none');
    }else {
        document.getElementById('archiv').classList.add('d_none');
    }
}

function renderNotes() {
    let contentRef = document.getElementById('content');
    let localTask = getFromLocalData('Aufgabe');
    let localTrashTask = getFromLocalData('Trash');
    let localTitle = getFromLocalData('Title');
    let localeArchiv = getFromLocalData('Archiv');
    contentRef.innerHTML = '';
    if (!isNull(localeArchiv)) {
        allNotes['archivNotes'] = localeArchiv;
        renderArchivNotes();
    }
    if (isNull(localTask)) {
        for (let index = 0; index < notes.length; index++) {
            contentRef.innerHTML += getNoteTemplate(index);
        }
       saveNotes('Aufgabe', notes);   
    }else {
        if (!isNull(localTrashTask)) {
            allNotes['trashNotes'] = localTrashTask;
            renderTrashNotes();
        }
        if (!isNull(localTitle)) {
            title = localTitle;
        }
        if (localTask.length > 0 ) {
            allNotes['notes'] = localTask;
            for (let index = 0; index < allNotes['notes'].length; index++) {
                contentRef.innerHTML += getNoteTemplate(index);
            }
        }
    }
}
     

function isNull(value) {
    if (value == null) {
        return true;
    }else {
        return false;
    }
}

function renderTrashNotes() {
    let trashContent = document.getElementById('trash_content'); 
    trashContent.innerHTML = '';
    if (allNotes['trashNotes'].length > 0) {
        document.getElementById('trash').classList.add('d_flex_c');
        for (let index = 0; index < trashNotes.length; index++) {
            trashContent.innerHTML += getTrashTemplate(index);
        }
    } 
}
 
function renderArchivNotes() {
    let archivContent = document.getElementById('archiv_content');
    archivContent.innerHTML = '';
    if (archivNotes.length > 0) {
        document.getElementById('archiv').classList.add('d_flex_c');
        for (let index = 0; index < archivNotes.length; index++) {
            archivContent.innerHTML += getArchivTemplate(index);
        }
    }
}

function addNote () {
    let noteInputRef = document.getElementById('inputNote');
    let titleInputRef = document.getElementById("inputTitle");
    let noteInput = noteInputRef.value;
    let titleInput = titleInputRef.value;
    if (noteInput != '' && titleInput != '') {
        notes.push(noteInput);
        title.push(titleInput);
        saveNotes('Aufgabe', notes);
        saveNotes('Title', title);
        renderNotes();
        noteInputRef.value = "";
        titleInputRef.value = "";
    }
}

function deleteNote (index) {
    trashNotes.splice(index, 1);
    renderTrashNotes();
    saveNotes('Trash', trashNotes);    
    if (trashNotes.length == 0) {
        document.getElementById('trash').classList.remove('d_flex_c')
    }
}

function saveNotes (task, note) {
    let notesString = JSON.stringify(note) 
    localStorage.setItem(task, notesString); 
}

function getFromLocalData (localTask) {
    let task = localStorage.getItem(localTask)
    return JSON.parse(task);
}

function moveNotes(spliceNotes, index, pushNotes) {
    let spliceNote = spliceNotes.splice[index, 1];
    pushNotes.push(spliceNote);
    saveAndRenderNotes();
    if (trashNotes.length == 0) {
        document.getElementById('trash').classList.remove('d_flex_c')
    }else if (archivNotes.length == 0) {
        document.getElementById('archiv').classList.remove('d_flex_c')
    }
}

function saveAndRenderNotes() {
    saveNotes('Archiv', allNotes['archivNotes']);
    saveNotes('Aufgabe', allNotes['notes']);
    saveNotes('Trash', allNotes['trashNotes']);
    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}