import fs from "fs";
import * as readline from "readline";
import ghpages from "gh-pages";

const PATH_TO_VIEWS = "./src/components/views";
const PATH_TO_OUTPUT = "./dist";

const INDEX_FILE = "Index.tsx";

const views = fs.readdirSync(PATH_TO_VIEWS).filter((val) => val !== INDEX_FILE);

for (let view of views) {
    const input = PATH_TO_OUTPUT + "/index.html";
    const output = `${PATH_TO_OUTPUT}/${view.toLowerCase().replace(".tsx", ".html")}`;

    fs.copyFileSync(input, output);
    console.log("Copying ", input, " as ", output);
}

const promptUser = readline.createInterface({ input: process.stdin, output: process.stdout });

promptUser.question("Enter commit message: ", (msg) => {
    promptUser.close();
    if (!msg) {
        throw Error("Commit message required for update.");
    }

    ghpages.publish(
        "./dist",
        {
            branch: "main",
            message: `PUBLISH: ${msg}`,
        },
        (err) => {
            if (err) {
                console.log("Error from gh-pages: ", err);
            }
        }
    );
});
