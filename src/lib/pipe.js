const pipe = (...functions) => data => Array.prototype.reduce.call(
  functions, (value, func) => func(value), data,
)

export default pipe
