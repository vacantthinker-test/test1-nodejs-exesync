// execSync 同步执行
const {execSync} = require('child_process') // node.js 子线程

// echo "# test1-nodejs-exesync" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin git@github.com:vacantthinker-test/test1-nodejs-exesync.git
// git push -u origin main
const queueCmd = [
	'git init', // 初始化 git 仓库
	'git add . ', // 添加所有文件 除了 .gitignore文件中忽略的
	`git commit -m "first commit"`, // git 提交 并携带提交的信息
	`git branch -M main`, // 切换分支
	`git remote add origin git@github.com:vacantthinker-test/test1-nodejs-exesync.git`, // 添加github远程仓库地址
	`git push -u origin main` // git 推送至远程仓库的main分支
]

// queueCmd 是个js数组
queueCmd.forEach(item => execSync(item)) // 使用forEach循环 每次拿到一个字符串, 并使用execSync() 执行该命令

// 使用 node git-init-and-push.js 执行该文件

// $ node git-init-and-push.js // 执行该文件
// warning: LF will be replaced by CRLF in package-lock.json. // 警告信息 说什么空格问题
// 	The file will have its original line endings in your working directory
// To github.com:vacantthinker-test/test1-nodejs-exesync.git //
// * [new branch]      main -> main // 提交成功！

// 查看浏览器, 可以看到效果
