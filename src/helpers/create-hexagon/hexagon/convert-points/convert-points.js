const toScreen = diameter => ([x, y, z]) => {
  const abscissa = diameter * (0.5 * (x + z) - y)
  const ordinate = diameter * (x - z) * Math.sqrt(3)/2

  return `${abscissa},${ordinate}`
}

const convertPoints = diameter => vertices =>
  vertices.map(toScreen(diameter))
          .join(' ')

export default convertPoints
