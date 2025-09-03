import { cmd_info } from "./@types/tk-bot/keyboard";
const INDENT = "+";

interface string_holder {
  s: string;
}
function prettify(cmds: cmd_info) {
  let ret: string_holder = { s: "" };
  internal_pretty(cmds, 0, ret);
  return ret.s;
}

function internal_pretty(
  cmds: cmd_info,
  indent: number,
  builded_string: string_holder,
) {
  let space_indent = "";
  for (var i: number = 0; i < indent; i++) {
    space_indent += INDENT;
  }
  const line = space_indent + cmds.name + ": " + cmds.doc + "\n";
  builded_string.s += line;
  for (let cmd of cmds.children) {
    internal_pretty(cmd, indent + 1, builded_string);
  }
}

export { prettify };
