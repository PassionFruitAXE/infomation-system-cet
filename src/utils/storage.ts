export function setItem(key: string, value: string | Record<string, unknown>) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key: string) {
  return JSON.parse(localStorage.getItem(key) ?? JSON.stringify(""));
}

export function removeItem(key: string) {
  localStorage.removeItem(key);
}
