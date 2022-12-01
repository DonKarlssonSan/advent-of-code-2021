export function getHorizontalPosTimesDepth(commandString) {
  const commands = commandString.split("\n");
  let depth = 0;
  let pos = 0;
  for(const command of commands) {
    const commandParts = command.split(" ");
    const direction = commandParts[0];
    const value = Number.parseInt(commandParts[1], 10);
    switch (direction) {
      case "forward":
        pos += value;
        break;
      case "down":
        depth += value;
        break;
      case "up":
        depth -= value;
        break;
      default:
        break;
    }
  }
  
  return depth * pos;
}