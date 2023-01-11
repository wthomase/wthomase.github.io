import fs from "fs";

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
