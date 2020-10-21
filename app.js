
var validator = require('validator')
var yargs = require('yargs')
var notesUtility = require('./notes.js');


//console.log(getNotes());

//console.log(validator.isEmail('anju@gmailcom'));

//console.log(process.argv[2]);

debugger

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder: {
        title: {
            describe:'Note Title',
            demandOption : true,
            type: 'string'
        },
        body:{
            describe:'Body of Note',
            demandOption: true,
            type: 'string'
        },        
    },
    handler: function(argv){
        notesUtility.addNote(argv.title,argv.body);

    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption : true,
            type: 'string'
        }
    },
    handler: function(argv){
        notesUtility.deleteNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'List all notes',
    handler: function(){
        notesUtility.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'read a note',
    builder: {
            title: {
                describe:'Note Title',
                demandOption:true,
                type: 'string'
            }           
    }, 
    handler: function(argv){
        notesUtility.readNote(argv.title)
    }    
})

yargs.parse();
//console.log(yargs.argv);

// node app.js add --title="Need to give the content here in double quotes else cmd takes only the first word in the string for title" --body="yea, just about the double quotes"