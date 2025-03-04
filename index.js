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
            todos.push({
                line: index + 1,
                comment: line.trim()
            });
        }
    });

    return todos;
}
function processCommand(command) {
    switch (command) {
        case 'show':
            getFiles().forEach((file) => {
                todos.push(...findTodosInFile(file));
            })
            console.log(todos);
            break;
        case 'exit':
            process.exit(0);
            break;
        default:
            console.log('wrong command');
            break;
    }
}

// TODO you can do it!
