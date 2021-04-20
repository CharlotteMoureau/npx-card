#!/usr/bin/env node

const terminalImage = require('terminal-image');
const got = require('got');
const boxen = require('boxen');
const chalk = require("chalk");

const NEWLINE = "\n";
const EMPTYLINE = "";

const data = {
    name: chalk.yellow("Charlotte Moureau"),
    presentation: "Hi! I'm an Art Historian currently undertaking a web junior developper cursus. Here are my social medias:",
    github: chalk.white(chalk.yellow("Github: ") + " " + "https://github.com/CharlotteMoureau"),
    linkedin: chalk.white(chalk.yellow("Linkedin: ") + " " + "https://www.linkedin.com/in/charlotte-moureau-783078200/"),
    card: chalk.white(chalk.yellow("Card: ") + " " + chalk.red("npx") + " " + "charlottem")
};

(async () => {
    const body = await got('https://media.insiders.nl/tie/files/image/alphonse-mucha-afbeelding-liggend_2369986702.jpeg').buffer();
    const mucha = await terminalImage.buffer(body);
    console.log(
        mucha, EMPTYLINE, chalk.green(
            boxen([
                data.name,
                EMPTYLINE,
                data.presentation,
                EMPTYLINE,
                data.github,
                EMPTYLINE,
                data.linkedin,
                EMPTYLINE,
                data.card
            ].join(NEWLINE),
                {
                    padding: 1,
                    margin: {
                        top: 1
                    },
                    borderStyle: "round",
                }
            )
        )
    );
})();