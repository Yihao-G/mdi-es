import { createRequire } from 'module'
import { getVersion } from '@mdi/util'
import { execSync } from 'child_process'

const require = createRequire(import.meta.url)
const { version } = require('../package.json')

const [major, minor] = version.split('.')

const [svgMajor, svgMinor, svgRemaining] = getVersion().split('.')

if (major === svgMajor && minor === svgMinor) {
    // patch update
    execSync('npm version patch')
} else {
    // major/minor update
    execSync(`npm version ${ svgMajor }.${ svgMinor }.${ svgRemaining }`)
}
