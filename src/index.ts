import * as commander from 'commander'

const command = new commander.Command()
command
    .version('0.0.1', '-v, --version')
    .command('status', 'Display the current connection destination of each config.')
    .parse(process.argv)

console.log('Hello World')
