const {getAllFilePathsWithExtension, readFile} = require('./fileSystem');
const {readLine} = require('./console');

const files = getFiles();

console.log('Please, write your command!');
readLine(processCommand);

function getFiles() {
    const filePaths = getAllFilePathsWithExtension(process.cwd(), 'js');
    return filePaths.map(path => readFile(path));
}

const todos = []


function findTodosInFile(file) {
    const lines = file.split('\n');
    const todos = [];

    lines.forEach((line, index) => {
        if (line.includes('// TODO')) {
            todos.push(line.trim());
        }
    });

    return todos;
}

getFiles().forEach((file) => {
    todos.push(...findTodosInFile(file));
})

const todosWithDate = []


function processCommand(command) {
    switch (command) {
        case 'show':
            writeTodos(todos)
            break;
        case 'important':
            const importantTodos = getImportantTodos()
            writeTodos(importantTodos)
            break;
        case 'exit':
            process.exit(0);
            break;
        case 'sort importance':
            break;
        case 'sort user':
            todos.forEach((command) => {
                let regex = /\/\/ TODO\s*\{([^}]+)\};/;
                if (command.match('// TODO ')) {}
            })

            break
        case 'sort date':
            break;

        default:
            console.log('wrong command');
            break;
    }
}

function getImportantTodos() {
    /** @type {Array<string>} */
    let importantTodos = []

    for (const todoCommand of todos) {
        if (todoCommand.includes('!')) {
            importantTodos.push(todoCommand)
        }
    }
    return importantTodos
}

function writeTodos(todosArray) {
    for (const item of todosArray) {
        console.log(item)
    }
}

//TODO makeIt!
