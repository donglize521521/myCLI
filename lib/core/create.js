const program = require('commander');

const {
  createProjectAction,
  addComponentAction
}  = require('./actions');

const createCommands = () =>{
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder')
    .action(createProjectAction)

  program
    .command('addcpn <name>')
    .description('add vue component,例如：why addcpn HelloWorld -d src/components')
    .action(addComponentAction)

}

module.exports = createCommands