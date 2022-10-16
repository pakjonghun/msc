export function getID() {
  return Math.random().toString(32).slice(0, 12);
}
