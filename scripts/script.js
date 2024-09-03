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
        archivNotes = localeArchiv;
        renderArchivNotes();
    }
    if (isNull(localTask)) {
        for (let index = 0; index < notes.length; index++) {
            contentRef.innerHTML += getNoteTemplate(index);
        }
       saveNotes('Aufgabe', notes);   
    }else {
        if (!isNull(localTrashTask)) {
            trashNotes = localTrashTask;
            renderTrashNotes();
        }
        if (!isNull(localTitle)) {
            title = localTitle;
        }
        if (localTask.length > 0 ) {
            notes = localTask;
            for (let index = 0; index < notes.length; index++) {
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
    if (trashNotes.length > 0) {
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

function moveToTrash (index) {
    let trashNote = notes.splice(index, 1);
    trashNotes.push(trashNote);
    saveNotes('Aufgabe', notes);
    saveNotes('Trash', trashNotes);
    renderNotes();
    renderTrashNotes();
}

function saveNotes (task, note) {
    let notesString = JSON.stringify(note) 
    localStorage.setItem(task, notesString); 
}

function getFromLocalData (localTask) {
    let task = localStorage.getItem(localTask)
    return JSON.parse(task);
}

function pushToArchiv (index) {
    let archivNote = notes.splice(index, 1);
    archivNotes.push(archivNote);
    saveNotes('Aufgabe', notes);
    saveNotes('Archiv', archivNotes);
    renderNotes();
    renderArchivNotes(); 
}

function archivToTrash(index) {
    let trashNote = archivNotes.splice(index, 1);
    trashNotes.push(trashNote);
    saveNotes('Archiv', archivNotes);
    saveNotes('Trash', trashNotes);
    renderArchivNotes();
    renderTrashNotes();
    if (archivNotes.length == 0) {
        document.getElementById('archiv').classList.remove('d_flex_c')
    }
}

function trashToArchiv(index) {
    let trashNote = trashNotes.splice(index, 1);
    archivNotes.push(trashNote);
    saveNotes('Archiv', notes);
    saveNotes('Trash', trashNotes);
    renderArchivNotes();
    renderTrashNotes();
    if (trashNotes.length == 0) {
        document.getElementById('trash').classList.remove('d_flex_c')
    }else if (archivNotes.length == 0) {
        document.getElementById('archiv').classList.remove('d_flex_c')
    }
}

function backToNotes(index) {
    let backNote = archivNotes.splice(index, 1);
    notes.push(backNote);
    saveNotes('Archiv', archivNotes);
    saveNotes('Aufgabe', notes);
    renderNotes();
    renderArchivNotes();
    if (archivNotes.length == 0) {
        document.getElementById('archiv').classList.remove('d_flex_c')
    }
}
