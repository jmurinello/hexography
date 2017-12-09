import isUndefined from '../../../utils/is-undefined'

const derive =
[
  [0,0,1],
  [0,1,1],
  [0,1,0],
  [1,1,0],
  [1,0,0],
  [1,0,1]
]

const sum = (x, y) =>
  [
    x[0] + y[0],
    x[1] + y[1],
    x[2] + y[2],
  ]

const fetchPoints = ([x, ...xs], y) =>
  isUndefined(x) ? [] : [sum(x, y), ...fetchPoints(xs, y)]

const listPoints = point => fetchPoints(derive, point)

export default listPoints
