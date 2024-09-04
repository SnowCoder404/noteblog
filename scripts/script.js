let allNotes = {
    'notes': ['Rasen mähen', 'Essen machen'],
    'notesTitles': ['Task', 'Task'],
    'archivNotes': [],
    'archivNotesTitles': [],
    'trashNotes': [],
    'trashNotesTitles': [], 
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
        renderAllNotes('archivNotes');
    }
    if (isNull(localTask)) {
        for (let index = 0; index < allNotes['notes'].length; index++) {
            contentRef.innerHTML += getNoteTemplate(index);
        }
       saveNotes('Aufgabe', allNotes['notes']);   
    }else {
        if (!isNull(localTrashTask)) {
            allNotes['trashNotes'] = localTrashTask;
            renderTrashNotes();
        }
        if (!isNull(localTitle)) {
            allNotes['notesTitle'] = localTitle;
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

function renderAllNotes(notes) {
    let notesContent = document.getElementById(notes);
    notesContent.innerHTML = '';
    if (allNotes[notes].length > 0) {
        for (let index = 0; index < allNotes[notes].length; index++) {
            notesContent.innerHTML = getArchivTemplate[index];
        }
    }
}

function addNote () {
    let noteInputRef = document.getElementById('inputNote');
    let titleInputRef = document.getElementById("inputTitle");
    let noteInput = noteInputRef.value;
    let titleInput = titleInputRef.value;
    if (noteInput != '' && titleInput != '') {
        allNotes['notes'].push(noteInput);
        allNotes['notesTitles'].push(titleInput);
        saveAndRenderNotes();
        saveNotes('Aufgabe', allNotes['notes']);
        saveNotes('Title', allNotes['notesTitles']);
        renderAllNotes('notes');
        noteInputRef.value = "";
        titleInputRef.value = "";
    }
}

function deleteNote (index) {
    allNotes['trashNotes'].splice(index, 1);
    renderAllNotes('trashNotes');
    saveNotes('Trash', allNotes['trashNotes']);    
    if (allNotes['trashNotes'].length == 0) {
        document.getElementById('trash').classList.remove('d_flex_c')
    }
}

function saveNotes (task, note) {
    let notesString = JSON.stringify(note) 
    localStorage.setItem(task, notesString); 
}

function getFromLocalData (localTask) {
    let task = localStorage.getItem(localTask);
    return JSON.parse(task);
}

function moveNotes(notesID, index, pushNotesID) {
    let notesSplice = notesID.splice(index, 1);
    pushNotesID.push(notesSplice);    
    checkTrashAndArchiv();
    saveAndRenderNotes();
}

function checkTrashAndArchiv() {
    if (allNotes["trashNotes"].length == 0) {
        document.getElementById('trash').classList.remove('d_flex_c')
    }
    if (allNotes['archivNotes'].length == 0) {
        document.getElementById('archiv').classList.remove('d_flex_c')
    }
}

function saveAndRenderNotes() {
    saveNotes('Archiv', allNotes['archivNotes']);
    saveNotes('Aufgabe', allNotes['notes']);
    saveNotes('Trash', allNotes['trashNotes']);
    saveNotes('Title', allNotes["notesTitles"]);
    renderAllNotes('notes');
    renderAllNotes('archivNotes');
    renderAllNotes('trashNotes');
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