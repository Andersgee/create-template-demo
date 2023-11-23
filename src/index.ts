import { execa } from "execa";
import { join } from "path";

async function main() {
	const { stdout } = await execa("echo", ["simple echo from create-template-demo"]);
	console.log(stdout);

	//do stuff, clone some repo with a fresh git init perhaps?
	const cwd = process.cwd();
	let projectName = "template-demo";
	if (!process.argv[2]) {
		console.log(`no project name given. defaulting to '${projectName}'`);
	} else {
		projectName = process.argv[2];
	}
	const projectDir = join(cwd, projectName);

	try {
		console.log("cloning some repo");
		await execa("git", ["clone", "git@github.com:Andersgee/pkg-demo.git", projectName]);

		await execa("rm", ["-rf", ".git"], { cwd: projectDir });
		await execa("git", ["init"], { cwd: projectDir });
		console.log("done");
	} catch (error) {
		console.log(error);
	}
}

void main();
