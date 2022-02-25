#!/usr/bin/env node

const program  = require('commander');
const helpOptions = require('./lib/core/help');
const createCommands = require('./lib/core/create');



// 查看版本号
program.version(require('./package.json').version,'-v,--version');


helpOptions()


// 帮助和可选信息
// console.log(helpOptions())
// helpOptions();
createCommands()




program.parse(process.argv)


