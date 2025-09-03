import { cmd_info } from "tk-bot/keyboard";

function figure_out(command: string, command_scope: cmd_info): cmd_info | null {
  const compare: Array<string> = command_scope.alias;
  let longest = 0;
  for (let comparison of compare) {
    if (!command.search(RegExp(comparison))) {
      longest = Math.max(longest, comparison.length);
    }
  }
  const remaining_command = command.substring(longest).trim();

  for (let tail_cmd of command_scope.children) {
    const res = figure_out(remaining_command, tail_cmd);
    if (res) {
      return res;
    }
  }
  if (command_scope.fn.body.length > 0) {
    let command_copy = { ...command_scope };
    command_copy.fn.args = remaining_command;
    return command_scope;
  }
  return null;
}

export { figure_out };
