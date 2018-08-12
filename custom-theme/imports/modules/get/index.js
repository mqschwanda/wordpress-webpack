export const get = keys => object =>
  keys.reduce((current, next) =>
    ((current && current[next]) ? current[next] : null, object));

export default get;
