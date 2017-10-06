#!node
const { execSync } = require('child_process')
const { join } =  require('path')
const { readFileSync, writeFileSync } = require('fs')

for (let dir of ['hire', 'resume']) {
  const mdPath = join(__dirname, dir, 'content.md')
  const content = execSync(`cat ${mdPath} | marked`).toString()

  const templatePath = join(__dirname, dir, 'index-template.html')
  const indexPath = join(__dirname, dir, 'index.html')
  const template = readFileSync(templatePath).toString()

  writeFileSync(indexPath, template.replace('{{content.md}}', content))
}
