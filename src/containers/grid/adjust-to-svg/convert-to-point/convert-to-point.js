import diameter from '../../../../helpers/diameter'

const toPoint = ([x, y]) => {
  const abscissa = diameter * (x + y/2) * Math.sqrt(3)
  const ordinate = diameter * 3/2 * y

  return [abscissa, ordinate]
}

const convertToPoint = coordinates => coordinates.map(toPoint)

export default convertToPoint
