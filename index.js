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

function processCommand(command) {
    if (command.includes("user")) {
        const [_, user] = command.split(' ');
        for (const todo of todos) {
            if (todo.includes(`// TODO ${user}`)) {
                console.log(todo);
            }
        }
    } else {
        switch (command) {
            case 'show':
                console.log(todos);
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
