import * as commander from 'commander'

const command = new commander.Command()
command
    .version('0.0.1', '-v, --version')
    .parse(process.argv)

console.log('Hello World')
