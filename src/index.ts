import { execa } from "execa";
/*
async function initGit(opts: IContext) {
	const { projectRoot } = opts;
	const isGit = existsSync(join(projectRoot, ".git"));
	if (isGit) return;
	try {
		await execa("git", ["init"], { cwd: projectRoot });
	} catch {
		logger.error(`Initial the git repo failed`);
	}
}
*/

async function main() {
	const { stdout } = await execa("echo", ["simple echo from create-template-demo"]);
	console.log(stdout);
}

void main();
