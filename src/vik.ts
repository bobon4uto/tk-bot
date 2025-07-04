import {command} from "./entity/admin";
function prettify(cmds: Array<command>) {
	let ret: string = "";
	cmds.forEach((cmd, index) => {
		ret = ret.concat(cmd.name, " - ", cmd.alias, "\n", cmd.doc, "\n");
	});
	return ret;
}

export {prettify};
