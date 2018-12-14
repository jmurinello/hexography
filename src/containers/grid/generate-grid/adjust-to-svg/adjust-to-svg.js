import pipe from '../../../../lib/pipe'
import convertToPoint from './convert-to-point'
import adjust from './adjust'
import convertToCoordinates from './convert-to-coordinates'

const adjustToSvg = (coordinates) => {
  const p = pipe(convertToPoint, adjust, convertToCoordinates)(coordinates)
  return p
}

export default adjustToSvg
