import pipe from '../../../lib/pipe'
import convertToPoint from './convert-to-point'
import adjust from './adjust'
import convertToCoordinates from './convert-to-coordinates'

const adjustToSvg = pipe(convertToPoint, adjust, convertToCoordinates)

export default adjustToSvg
