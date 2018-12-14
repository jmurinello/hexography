const sum = x => y => [
  x[0] + y[0],
  x[1] + y[1],
  x[2] + y[2],
]

const offsetPoint = ys => x => ys.map(sum(x))

const listPoints = offsetPoint([
  [0, 0, 1],
  [0, 1, 1],
  [0, 1, 0],
  [1, 1, 0],
  [1, 0, 0],
  [1, 0, 1],
])

export default listPoints
