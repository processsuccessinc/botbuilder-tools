import * as program from 'commander';

program
    .command('luis', 'connect to LUIS a service')
    .command('qna', 'connect to QNA a service');

program.parse(process.argv);
