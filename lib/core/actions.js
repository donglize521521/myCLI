const { promisify } = require('util');

const download = promisify(require('download-git-repo'));
const open = require('open')

const { vueRepo } = require('../config/repo-config');
const { spawn } = require('../utils/terminal');
const { compile } = require('../utils/utils');

// callback =>promisify(函数) => Promise => async await
const createProjectAction = async (project) =>{
   console.log("mycli helps you create your project~")
  
  // 1.clone项目
    await download(vueRepo, project, { clone:true });
        
    
  // 2.执行npm install
    const  command =  process.platform === 'win32' ? 'npm.cmd' : 'npm';// 报错原因：在windows下npm的执行命令不同,需要作如下条件判断
    await spawn(command, ['install'], { cwd: `./${project}` });
 
  // 3.打开浏览器
   open("http://localhost:8080/")

  // 4.运行npm run serve
    await spawn(command,['run','serve'],{cwd:`./${project}`});

}

// 添加组件的action
const addComponentAction = async (name, dest) => {
  // 1.有对应的ejs模块
  // 2.编译ejs模块result
  const result =  await compile("vue-component.ejs",{name, lowerName:name.toLowerCase()});
  console.log(result)
  // 3.将result写入道.vue文件中
  // 4.放到对应的文件夹中

}




module.exports ={
  createProjectAction,
  addComponentAction
}