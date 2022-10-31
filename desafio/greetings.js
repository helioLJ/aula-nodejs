const getFlagValue = require('./exportGetFlag')

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)