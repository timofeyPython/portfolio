export function _localStorage(key: string, obj?: any, replacement?: boolean) {
  if (!localStorage.getItem(key)) localStorage.setItem(key, "[]");

  const currentItem = localStorage.getItem(key);
  if (!obj) {
    return currentItem !== null ? JSON.parse(currentItem) : [];
  }

  if (replacement) {
    localStorage.setItem(key, JSON.stringify(obj));
    return obj;
  }

  const item = currentItem !== null ? [...JSON.parse(currentItem), obj] : [obj];
  localStorage.setItem(key, JSON.stringify(item));
  return item;
}
