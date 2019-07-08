import * as commander from 'commander'

const program = new commander.Command()
program
    .version('0.0.1', '-v, --version')
    .command('status', 'Display the current connection destination of each config.')
    .action(() => {
        console.log('status')
    })

program.parse(process.argv)
