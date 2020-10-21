const fs = require('fs')

var addNote = (title,body) => {
    const notes = getNotes()

    //filter function iterates through the entire list even if it finds a match early on in its iterations
    // which does not effectively serve the purpose here. so - using find
    //var duplicates = notes.filter((note) => note.title===title)
    var duplicate = notes.find((note) => note.title===title)

    //if(duplicates.length===0){
    if(!duplicate){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);  
        console.log("note added!")
    }else{
        console.log("duplicate title!")
    }  
}

var deleteNote = (title) => {
    const notes = getNotes()
    var initialLength = notes.length
    var notesToKeep = notes.filter((note) => note.title!=title)

    if(notesToKeep.length < initialLength){
        console.log("note Removed!")
        saveNotes(notesToKeep)
    }else{
        console.log("No Matching note found")
    }
}

var listNotes = ()=>{
    const notes = getNotes();
    notes.forEach((note)=>
        console.log(note.title + " ")
    )
}

var readNote = (title) =>{
    var notes = getNotes()
    var findNote = notes.find((note) => note.title === title)
    if(!findNote){
        console.log("no matching notes found!")
    }else{
        console.log(findNote.title + " " + findNote.body)
    }
}

var saveNotes = (notes) => {
    debugger
    fs.writeFileSync('notes.json',JSON.stringify(Notes))
}

var getNotes = () =>{
    try{
        const bufferNote = fs.readFileSync('notes.json')
        return JSON.parse(bufferNote.toString())
    }catch(e){
        return []
    }
}

module.exports = {    
    addNote: addNote,
    deleteNote: deleteNote,
    listNotes: listNotes,
    readNote : readNote
}