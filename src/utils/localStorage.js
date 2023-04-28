export function addMediaToLocalStorage(key, value) {
  let { page, data } = getMediaFromLocalStorage(key);
  localStorage.setItem(
    key,
    JSON.stringify({ page: ++page, data: [...data, ...value] })
  );
}

export function getMediaFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key) || '{ "page": 1, "data": [] }');
}
