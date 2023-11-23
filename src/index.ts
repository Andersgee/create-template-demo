import { execa } from "execa";

async function main() {
	const { stdout } = await execa("echo", ["simple echo from create-template-demo"]);
	console.log(stdout);

	//do stuff, clone some repo with a fresh git history perhaps?
	try {
		console.log("cloning some repo");
		await execa("git", ["clone", "git@github.com:Andersgee/pkg-demo.git", "some-project-name"]);
		await execa("cd", ["some-project-name"]);
		await execa("rm", ["-rf", ".git"]);
		await execa("git", ["init"]);
		console.log("done");
	} catch (error) {
		console.log(error);
	}
}

void main();
