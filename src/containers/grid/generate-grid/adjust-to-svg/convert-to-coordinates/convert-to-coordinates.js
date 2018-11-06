import diameter from '../../../../../helpers/diameter'

const toCoordinates = ([abscissa, ordinate]) => {
  const x = Math.round((abscissa * Math.sqrt(3)/3 - ordinate / 3) / diameter)
  const y = Math.round(ordinate * 2/3 / diameter)
  const z = -x - y

  return [x, y, z]
}

const convertToCoordinates = points => points.map(toCoordinates)

export default convertToCoordinates
