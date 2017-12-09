const compose = (...functions) => data =>
  Array.prototype.reduceRight.call(functions, (value, func) => func(value), data)

export default compose
