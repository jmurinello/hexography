import compose from '../../lib/compose'
import hexagon from './hexagon'
import group from './group'

const groupHexagon = a => d => compose(group(a), hexagon(d))

const createHexagon =
(
  {
    appearance = 'framework',
    diameter = 30,
    coordinates = [[0,0,0]]
  }
) => groupHexagon(appearance)(diameter)(coordinates)

export default createHexagon
