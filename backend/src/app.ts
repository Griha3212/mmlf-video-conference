import chalk from 'chalk';
import express, { Request, Response } from 'express';


const port: Number = 3005;
console.log(chalk.yellow('process.env.PORT', process.env.PORT));

// Create a new express application instance
export const app: express.Application = express();

const server = app.listen(port, () => {
    console.log(chalk.yellow(`Example app listening on port ${port}!`));
});


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});