const hasOwnProperty = Object.prototype.hasOwnProperty;
export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
};

function extend(to, _from) {
  for (let key in _from) {
    to[key] = _from[key];
  }
  return to;
};

export function toObject(arr) {
  var res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
};

export const getValueByPath = function(object, prop) {
  prop = prop || '';
  const paths = prop.split('.');
  let current = object;
  let result = null;
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};

export const setValueByPath = function set(path, obj, value) {
  if (!path || !obj) return;
  let current = obj;
  const paths = path.split('.');
  let len = paths.length;
  for (let i = 0, j = paths.length; i < j; i++) {
    var elem = paths[i];
    if (!current[elem]) current[elem] = {};
    current = current[elem];
  }
  current[paths[len - 1]] = value;
};
