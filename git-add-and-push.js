const {execSync} = require('child_process')
const queueCommand = [
	'git add . ',
	"git commit -m 'update' ",
	'git branch -M main',
	'git push -u origin main'
]
queueCommand.forEach(item => execSync(item))
