#!node
// html="`cat hire/cv.md | marked`"
// cat hire/cv-template.html | sed "s/{{cv.md}}/$html/g" > hire/index.html

const { execSync } = require('child_process')
const { join } =  require('path')
const { readFileSync, writeFileSync } = require('fs')

const cvPath = join(__dirname, 'hire', 'cv.md')
const cv = execSync(`cat ${cvPath} | marked`).toString()

const templatePath = join(__dirname, 'hire', 'index-template.html')
const indexPath = join(__dirname, 'hire', 'index.html')
const template = readFileSync(templatePath).toString()

writeFileSync(indexPath, template.replace('{{cv.md}}', cv))
