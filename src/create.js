import { getMeta, getVersion } from '@mdi/util'
import { existsSync, mkdirSync } from 'fs'
import { writeFile } from 'fs/promises'

const OUTPUT_FOLDER = './output'

const meta = getMeta(true)

const find = /(-\w)/g
const convert = function (matches) {
    return matches[1].toUpperCase()
}

if (!existsSync(OUTPUT_FOLDER)) {
    mkdirSync(OUTPUT_FOLDER)
}

const icons = meta.map(icon => {
    let name = icon.name.replace(find, convert)
    name = `mdi${ name[0].toUpperCase() }${ name.slice(1) }`
    return { name, path: icon.path }
})

const firstLine = `// Material Design Icons v${ getVersion() }\n`

await Promise.all(icons.map(({ name, path }) => writeFile(`${ OUTPUT_FOLDER }/${ name }.ts`,
    firstLine +
    `const ${ name }: string = "${ path }"\n` +
    `export default ${ name }`
)))

const indexTsLines = icons.map(({ name }) => {
    return `export { default as ${ name } } from "./${ name }"`
})

await writeFile(`${ OUTPUT_FOLDER }/index.ts`, `${ firstLine }${ indexTsLines.join('\n') }`)
