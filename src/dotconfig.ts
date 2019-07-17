import * as commander from 'commander'

const program = new commander.Command()
program
    .version('0.0.1', '-v, --version')
    .command('init', 'Generate a preset in the current directory.')
    .command('status', 'Display the current connection destination of each config.')

program.parse(process.argv)
