export function getHorizontalPosTimesDepthWithAim(commandString) {
  const commands = commandString.split("\n");
  let depth = 0;
  let pos = 0;
  let aim = 0;
  for(const command of commands) {
    const commandParts = command.split(" ");
    const direction = commandParts[0];
    const value = Number.parseInt(commandParts[1], 10);
    switch (direction) {
      case "forward":
        pos += value;
        depth += aim * value;
        break;
      case "down":
        aim += value;
        break;
      case "up":
        aim -= value;
        break;
      default:
        break;
    }
  }
  
  return depth * pos;
}